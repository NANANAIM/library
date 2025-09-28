// Generar ID simple
function generarId() {
	return 'id-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
}

function truncar(texto, max = 25) {
	if (typeof texto !== 'string') return '';
	return texto.length > max ? texto.slice(0, max).trimEnd() + '…' : texto;
}

// Función para crear una tarjeta de libro
function crearTarjetaLibro(libro) {
	const card = document.createElement('div');
	card.className = 'libro-card';
	const leidoBadge = libro.leido
		? '<span class="badge badge-ok badge-leido clickable" title="Click para cambiar a No leído">Leído</span>'
		: '<span class="badge badge-pend badge-leido clickable" title="Click para cambiar a Leído">No leído</span>';
	card.innerHTML = `
		<div class="card-header">
			<h3>${libro.titulo}</h3>
			<button class="btn-eliminar" title="Eliminar">×</button>
		</div>
		<p class="autor"><strong>Autor:</strong> <span class="autor-nombre" title="${libro.autor}">${truncar(libro.autor, 25)}</span></p>
		<div class="resena">${libro.resena}</div>
		<div class="badges">
			${leidoBadge}
		</div>
	`;

	// Eventos de acciones
	card.querySelector('.btn-eliminar').addEventListener('click', () => eliminarLibro(libro.id));
	const badgeLeido = card.querySelector('.badge-leido');
	if (badgeLeido) {
		badgeLeido.addEventListener('click', () => {
			// animación de feedback
			badgeLeido.classList.remove('pulse');
			void badgeLeido.offsetWidth; // forzar reflow para reiniciar animación
			badgeLeido.classList.add('pulse');
			// hacer toggle tras un pequeño delay para que se note
			setTimeout(() => toggleLeido(libro.id), 120);
		});
	}
	return card;
}

// Guardar y mostrar libros en el grid
function obtenerLibros() {
	const libros = localStorage.getItem('libros');
	return libros ? JSON.parse(libros) : [];
}

function guardarLibros(libros) {
	localStorage.setItem('libros', JSON.stringify(libros));
}

function mostrarLibros() {
	const grid = document.querySelector('.main-grid');
	grid.innerHTML = '';
	const libros = obtenerLibros();
	libros.forEach(libro => {
		const card = crearTarjetaLibro(libro);
		grid.appendChild(card);
	});
}

function eliminarLibro(id) {
	const libros = obtenerLibros().filter(l => l.id !== id);
	guardarLibros(libros);
	mostrarLibros();
}

function toggleLeido(id) {
	const libros = obtenerLibros().map(l => l.id === id ? { ...l, leido: !l.leido } : l);
	guardarLibros(libros);
	mostrarLibros();
}

// (Se quitó funcionalidad de película)

// Manejar el envío del formulario de agregar libro
document.addEventListener('DOMContentLoaded', function() {
	mostrarLibros();
	const form = document.getElementById('formAgregarLibro');
	const modal = document.getElementById('modalAgregarLibro');
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		const titulo = document.getElementById('tituloLibro').value;
		const autor = document.getElementById('autorLibro').value;
		const resena = document.getElementById('resenaLibro').value;
	const leido = document.getElementById('leidoLibro').checked;
		const libros = obtenerLibros();
	libros.push({ id: generarId(), titulo, autor, resena, leido });
	guardarLibros(libros);
	mostrarLibros();
	form.reset();
	modal.classList.remove('show');
	});
});
/*
// Leer reseñas guardadas al cargar la página
document.addEventListener('DOMContentLoaded', function() {
	mostrarResenas();
});

// Manejar el envío del formulario
document.getElementById('reviewForm').addEventListener('submit', function(e) {
	e.preventDefault();
	const libro = document.getElementById('book').value;
	const resena = document.getElementById('review').value;
	agregarResena(libro, resena);
	this.reset();
});

function obtenerResenas() {
	const resenas = localStorage.getItem('resenas');
	return resenas ? JSON.parse(resenas) : [];
}

function guardarResenas(resenas) {
	localStorage.setItem('resenas', JSON.stringify(resenas));
}

function agregarResena(libro, resena) {
	const resenas = obtenerResenas();
	resenas.push({ libro, resena });
	guardarResenas(resenas);
	mostrarResenas();
}

function mostrarResenas() {
	const resenas = obtenerResenas();
	const lista = document.getElementById('reviewsList');
	lista.innerHTML = '';
	resenas.forEach(r => {
		const li = document.createElement('li');
		li.textContent = `"${r.libro}": ${r.resena}`;
		lista.appendChild(li);
	});
}
*/


// Mostrar el modal al hacer clic en el botón agregar-libro
document.addEventListener('DOMContentLoaded', function() {
	const btnAgregar = document.querySelector('.agregar-libro');
	const modal = document.getElementById('modalAgregarLibro');
	const cancelar = document.getElementById('cancelarModal');
	const modalContent = document.getElementById('modalContent');

	btnAgregar.addEventListener('click', function() {
		modal.classList.add('show');
	});

	cancelar.addEventListener('click', function() {
		modal.classList.remove('show');
	});

	// Cerrar modal si se hace clic fuera del contenido
	modal.addEventListener('mousedown', function(e) {
		if (!modalContent.contains(e.target)) {
			modal.classList.remove('show');
		}
	});
});