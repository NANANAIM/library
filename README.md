<!-- README.html para tu Biblioteca Web -->

<h1>📚 Biblioteca Web</h1>

<p>
  Este proyecto es una aplicación web sencilla para gestionar tu propia biblioteca de libros. Permite agregar, visualizar y eliminar libros, así como marcar si ya los has leído. Todo el contenido se almacena localmente en tu navegador, por lo que tus datos se mantienen aunque recargues la página.
</p>

<h2>Características</h2>
<ul>
  <li><strong>Agregar libros:</strong> Completa un formulario con título, autor y reseña.</li>
  <li><strong>Marcar como leído:</strong> Indica si ya leíste el libro y cambia el estado con un solo clic.</li>
  <li><strong>Eliminar libros:</strong> Borra cualquier libro de tu lista fácilmente.</li>
  <li><strong>Interfaz moderna:</strong> Diseño responsivo, animaciones suaves y experiencia de usuario intuitiva.</li>
  <li><strong>Persistencia local:</strong> Los libros se guardan en LocalStorage, así que no se pierden al recargar.</li>
  <li><strong>Accesibilidad:</strong> Navegación sencilla y soporte para teclado.</li>
</ul>

<h2>¿Cómo usarlo?</h2>
<ol>
  <li>Haz clic en el botón "+" para agregar un nuevo libro.</li>
  <li>Completa los campos requeridos y guarda.</li>
  <li>Marca como leído haciendo clic en el badge correspondiente.</li>
  <li>Elimina libros con el botón en la esquina inferior derecha de cada tarjeta.</li>
</ol>

<h2>Demo</h2>
<p>
  Puedes ver una demo en vivo del proyecto aquí:<br>
  <a href="https://nananaim.github.io/library/" target="_blank">🔴 Live Review</a>
</p>

<h2>¿Cómo se guardan los datos?</h2>
<p>
  Los libros se almacenan en el navegador usando <strong>LocalStorage</strong>. Así, aunque recargues la página o cierres el navegador, tu lista de libros se mantiene.<br>
  <code>
    localStorage.setItem('libros', JSON.stringify(libros));
  </code>
</p>
