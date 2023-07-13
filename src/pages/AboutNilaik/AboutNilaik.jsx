import style from "./AboutNilaik.module.css";
import walking from "../../assets/walkinG.png";
import CardVision from "../../components/CardAboutNilaik/CardVision";
import CardMision from "../../components/CardAboutNilaik/CardMision";
import CardValores from "../../components/CardAboutNilaik/CardValores";
import CardNosotros from "../../components/CardAboutNilaik/CardNosotros";
import Footer from "../../components/Footer/Footer";
export default function AboutNilaik() {
  return (
    <>
      <div className={style.content}>

        <h1 className={style.tittleAboutNilaik}>
          Acerca de Nosotros
        </h1>

        <CardVision
          tittle="Visión"
          content="Expandir nuestra presencia en territorio nacional, ampliando nuestro catálogo y producción para mantener el crecimiento constante de nuestro proyecto. Y vender productos para público infantil y adulto, a precios competentes, manteniendo la calidad que nos respalda."
        />

        <CardMision
          tittle="Misión"
          content="Somos un proyecto especialista en elevar el confort de la población infantil sin descartar el estilo, esto lo logramos ofreciendo diseños actuales y contemporáneos para que la ropa ayude a reflejar la personalidad de tus pequeños."
        />
        <div className={style.principal}>

          <div className={style.aprincipal}>
            <img className={style.aboutNilaikImg} src={walking} alt="personas caminando" />
          </div>


          <div className={style.ValoresNosotros}>
            <CardValores
              tittle="Nuestros valores"
              content="Somos un proyecto que está enfocado en ofrecer productos de calidad a un precio bajo, nos caracterizamos por ser un proyecto con valores como, accesibilidad, medio ambiente, inclusión y diversidad."
            />

            <CardNosotros
              tittle="Sobre nosotros"
              //content="Nilaik surge como un proyecto improvisado, como suele ocurrir con las cosas buenas en México, sin planificación previa. Buscamos ofrecer conjuntos de ropa accesibles y de buena calidad para los niños, permitiéndoles jugar cómodamente mientras se divierten." />
              content="import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class LoginForm {
    public static void main(String[] args) {
        // Crear un nuevo marco (ventana) con título
        JFrame frame = new JFrame(+Formulario de inicio de sesión+);

            // Configurar el tamaño del marco
            frame.setSize(300, 200);

            // Crear etiquetas y campos de texto
            JLabel userLabel = new JLabel(+Usuario:+);
            JTextField userField = new JTextField();
            JLabel passwordLabel = new JLabel(+Contraseña:+);
            JPasswordField passwordField = new JPasswordField();
            JButton loginButton = new JButton(+Iniciar sesión+);

            // Establecer la ubicación y el tamaño de los componentes
            userLabel.setBounds(20, 30, 80, 25);
            userField.setBounds(100, 30, 160, 25);
            passwordLabel.setBounds(20, 60, 80, 25);
            passwordField.setBounds(100, 60, 160, 25);
            loginButton.setBounds(100, 100, 100, 25);

            // Agregar componentes al marco
            frame.add(userLabel);
            frame.add(userField);
            frame.add(passwordLabel);
            frame.add(passwordField);
            frame.add(loginButton);

            // Establecer el diseño nulo (null layout) para posicionar los componentes manualmente
            frame.setLayout(null);

            // Agregar un ActionListener al botón de inicio de sesión
            loginButton.addActionListener(new ActionListener() {
              @Override
              public void actionPerformed(ActionEvent e) {
              String user = userField.getText();
            String password = new String(passwordField.getPassword());
            String url = +jdbc:ncluster://myhost:2406/database+;

            try {
              // Intentar establecer la conexión
              Connection connection = DriverManager.getConnection(url, user, password);
            JOptionPane.showMessageDialog(null, +Conexión exitosa+);
            // Aquí puedes realizar cualquier operación adicional con la conexión establecida

            // Cerrar la conexión cuando hayas terminado de usarla
            connection.close();
                } catch (SQLException ex) {
              JOptionPane.showMessageDialog(null, +Error al conectar: + + ex.getMessage());
                }
            }
        });

            // Hacer visible el marco
            frame.setVisible(true);
    }
}
" />


          </div>
        </div>
      </div>
      <Footer styleFoo={style.foo} />
    </>

  );
}
