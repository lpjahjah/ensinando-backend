using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;
using System.Runtime.Serialization;
using System.Security.Cryptography;

namespace ensinando.html
{
    public partial class login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string RM = Request["R"].ToString();
            string Senha = Request["S"].ToString();
            string falso = "false";
            MySqlConnection DB; 
            MySqlDataReader TABELA; 
            string cconnect = "SERVER=localhost;UID=root;PASSWORD=root;DATABASE=prjEnsinando;"; 
            DB = new MySqlConnection(cconnect);
            try
            {
                DB.Open(); 
            }
            catch 
            {
                return;
            }
            MySqlCommand cSQL = new MySqlCommand("select cd_login_usuario, cd_senha_usuario from usuario", DB);
            TABELA = cSQL.ExecuteReader();
            System.Security.Cryptography.MD5 md5 = System.Security.Cryptography.MD5.Create();
            byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(Senha);
            byte[] hash = md5.ComputeHash(inputBytes);
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                sb.Append(hash[i].ToString("X2"));
            }
            while (TABELA.Read())
            {
                if (TABELA["cd_login_usuario"].ToString() == RM && TABELA["cd_senha_usuario"].ToString().ToUpper() == sb.ToString().Replace("{","").Replace("}",""))
                {
                    falso = "true";
                }
            }

            Response.Write(falso);

        }
    }
}