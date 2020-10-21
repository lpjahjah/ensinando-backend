using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;
using System.Runtime.Serialization;

namespace ensinando.html
{
    public partial class ensin_ndo : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            MySqlConnection DB; //Variável que guardará o acesso ao banco.
            MySqlDataReader TABELA; //Variável que guardará itens que são recebidos na tabela do banco.
            string cconnect = "SERVER=localhost;UID=root;PASSWORD=root;DATABASE=prjEnsinando;"; //Realiza conexão ao banco.
            DB = new MySqlConnection(cconnect); //Instancia conexão ao banco.
            try //Tenta algo.
            {
                DB.Open(); //Abre conexão com o banco.
            }
            catch //Caso não possa estabelecer conexão, faz algo.
            {
                return; //Para de executar o programa.
            }
             MySqlCommand cSQL = new MySqlCommand("select * from materia m join turma t on (t.cd_materia 	= m.cd_materia)", DB); //Guarda comando SQL num tipo de variável próprio.
             TABELA = cSQL.ExecuteReader(); //Executa comando SQL.
             List<string> retornar = new List<string>(); //Cria uma lista (Equivalente a um array, porém, infinito).
             List<string> retornar2 = new List<string>();//Cria uma lista (Equivalente a um array, porém, infinito).
             string jason = "{\"materia\":["; //Começa criando uma string com formatação JSON.
            while(TABELA.Read()){ //Começa a ler as tabelas SQL.
                retornar.Add(TABELA["nm_sala"].ToString()); //Adiciona um item da tabela (nm_sala) na lista.
                retornar2.Add(TABELA["nm_materia"].ToString()); //Adiciona um item da tabela (nm_materia) na lista.
            }
            for (int i = 0; i < retornar.Count; i++) //For para adicionar itens no JSON
            {
                if (i == retornar.Count - 1) //O último item do JSON não pode ter vírgula e deve ser fechado com colchetes e chaves. Esse IF define isso.
                {
                    jason += "{\"nome\":\"" + retornar[i] + "\",\"conteudo\":\"" + retornar2[i] + "\"}]}"; //Fecha JSON.
                }
                else
                {
                    jason += "{\"nome\":\"" + retornar[i] + "\",\"conteudo\":\"" + retornar2[i] + "\"},"; //Adiciona mais um item no JSON.
                }

            }
            Response.Write(jason); //Envia a variável JSON para o JS.

        }
    }
}