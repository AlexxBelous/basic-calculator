import './main.scss'



// ==========================================
// 1. ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ (DOM)
// ==========================================
// * Найти все кнопки калькулятора ('button')
// * Найти поле вывода результата (#result)

const buttonsEl = document.querySelectorAll( 'button' );
const inputFieldEl = document.getElementById( 'result' );



// ==========================================
// 2. ОБРАБОТКА СОБЫТИЙ И ЛОГИКА КНОПОК
// ==========================================
// * Перебрать все найденные кнопки в цикле
// * На каждую кнопку повесить слушатель клика:
//   - Получить текст нажатой кнопки
//   - Если нажата 'C' — очистить поле (вызвать clearResult)
//   - Если нажата '=' — вычислить результат (вызвать calculateResult)
//   - Иначе — добавить символ к текущему значению (вызвать appendValue)


for ( let i = 0; i < buttonsEl.length; i++ ) {
	buttonsEl[ i ].addEventListener( 'click', () => {
		const buttonValue = buttonsEl[ i ].textContent;
		if ( buttonValue === 'C' ) {
			clearResult();
		} else if ( buttonValue === '=' ) {
			calculateResult();
		} else {
			appendValue( buttonValue );
		}
	} )
}






// ==========================================
// 3. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ==========================================

// --- Очистка поля: clearResult() ---
// * Сбросить значение (value) поля ввода на пустую строку

function clearResult() {
	inputFieldEl.value = "";
}

// --- Вычисление: calculateResult() ---
// * Вычислить математическое выражение из поля ввода и записать результат обратно

function calculateResult() {
	inputFieldEl.value = eval( inputFieldEl.value );
}

// --- Добавление символа: appendValue(buttonValue) ---
// * Прибавить текст нажатой кнопки к текущему значению поля ввода

function appendValue( buttonValue ) {
	inputFieldEl.value += buttonValue;
}