import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // ===================== 1. BIOLOGÍA =====================
  {
    id: 'bio-1',
    categoryId: 'biologia',
    question: '¿En qué organelo celular eucariota se realiza la síntesis del ATP mediante la respiración celular aeróbica?',
    options: ['Ribosoma', 'Mitocondria', 'Aparato de Golgi', 'Lisosoma'],
    correctIndex: 1,
    explanation: 'La mitocondria es la central energética de la célula eucariota; en sus crestas y matriz mitocondrial se efectúan el ciclo de Krebs y la fosforilación oxidativa.',
    curiosityFact: 'Las mitocondrias poseen su propio ADN circular y ribosomas 70S, respaldando la teoría endosimbiótica de Lynn Margulis.',
    difficulty: 'fácil',
  },
  {
    id: 'bio-2',
    categoryId: 'biologia',
    question: '¿Cuál es la base nitrogenada exclusiva del ARN que sustituye a la timina del ADN?',
    options: ['Guanina', 'Adenina', 'Uracilo', 'Citosina'],
    correctIndex: 2,
    explanation: 'El uracilo (U) es una base pirimidínica que se empareja con la adenina en las moléculas de ARN, sustituyendo a la timina presente en el ADN.',
    curiosityFact: 'El uracilo se diferencia químicamente de la timina únicamente por la ausencia de un grupo metilo (-CH3).',
    difficulty: 'fácil',
  },
  {
    id: 'bio-3',
    categoryId: 'biologia',
    question: 'Durante la fotosíntesis, ¿en qué estructura de los cloroplastos se lleva a cabo la fase luminosa (reacciones fotoquímicas)?',
    options: ['Estroma', 'Membrana de los tilacoides', 'Membrana externa', 'Espacio intermembrana'],
    correctIndex: 1,
    explanation: 'La fase luminosa ocurre en la membrana del tilacoide, donde se encuentran los fotosistemas I y II, la clorofila y la ATP sintasa.',
    curiosityFact: 'El oxígeno gaseoso (O2) liberado en la fotosíntesis no proviene del dióxido de carbono, sino de la fotólisis del agua en el fotosistema II.',
    difficulty: 'medio',
  },
  {
    id: 'bio-4',
    categoryId: 'biologia',
    question: '¿Qué tipo de enlace químico une a los aminoácidos para formar una cadena polipeptídica?',
    options: ['Enlace fosfodiéster', 'Enlace glucosídico', 'Enlace peptídico', 'Enlace éster'],
    correctIndex: 2,
    explanation: 'El enlace peptídico se forma por condensación entre el grupo amino (-NH2) de un aminoácido y el grupo carboxilo (-COOH) del siguiente, liberando una molécula de agua.',
    curiosityFact: 'El enlace peptídico tiene carácter parcial de doble enlace, lo que le otorga rigidez y planaridad a la estructura de las proteínas.',
    difficulty: 'fácil',
  },
  {
    id: 'bio-5',
    categoryId: 'biologia',
    question: '¿Cuál es la biomolécula más abundante en los seres vivos después del agua?',
    options: ['Glúcidos', 'Proteínas', 'Ácidos nucleicos', 'Lípidos'],
    correctIndex: 1,
    explanation: 'Las proteínas constituyen más del 50% del peso seco de la mayoría de las células, desempeñando funciones estructurales, enzimáticas y de transporte.',
    curiosityFact: 'Existen aproximadamente 20 aminoácidos estándar con los que se sintetizan todas las proteínas de la biosfera.',
    difficulty: 'medio',
  },
  {
    id: 'bio-6',
    categoryId: 'biologia',
    question: 'En la división celular, ¿en qué etapa de la mitosis los cromosomas homólogos o hermanos se alinean en el plano ecuatorial?',
    options: ['Profase', 'Metafase', 'Anafase', 'Telofase'],
    correctIndex: 1,
    explanation: 'En la metafase, los cromosomas condensados al máximo se alinean en la placa metafásica o ecuatorial guiados por el huso acromático.',
    curiosityFact: 'Es en la metafase donde se realizan los cariotipos clínicos para detectar anomalías cromosómicas como el síndrome de Down.',
    difficulty: 'fácil',
  },

  // ===================== 2. FILOSOFÍA =====================
  {
    id: 'fil-1',
    categoryId: 'filosofia',
    question: '¿Quién es considerado el padre de la Filosofía Antigua occidental por proponer el "Agua" como Arjé (principio de todas las cosas)?',
    options: ['Anaxímenes', 'Tales de Mileto', 'Parménides', 'Heráclito'],
    correctIndex: 1,
    explanation: 'Tales de Mileto (siglo VI a.C.) inició el paso del mito al logos en Grecia proponiendo una sustancia natural (el agua o lo húmedo) como origen del cosmos.',
    curiosityFact: 'Tales también fue astrónomo y predijo con asombrosa precisión el eclipse solar del 28 de mayo del 585 a.C.',
    difficulty: 'fácil',
  },
  {
    id: 'fil-2',
    categoryId: 'filosofia',
    question: 'El método socrático que consistía en hacer preguntas sucesivas para que el interlocutor descubra la verdad por sí mismo se denomina:',
    options: ['Hermenéutica', 'Mayéutica', 'Deducción dialéctica', 'Silogismo'],
    correctIndex: 1,
    explanation: 'La mayéutica (del griego maieutiké, "arte de dar a luz") fue creada por Sócrates, comparando su labor con la de su madre que era partera.',
    curiosityFact: 'Sócrates no dejó ningún texto escrito; todo su pensamiento fue transmitido a la posteridad por sus discípulos Platón y Jenofonte.',
    difficulty: 'fácil',
  },
  {
    id: 'fil-3',
    categoryId: 'filosofia',
    question: '¿Qué célebre filósofo moderno formuló la premisa "Cogito, ergo sum" (Pienso, luego existo) en su Discurso del Método?',
    options: ['John Locke', 'René Descartes', 'Immanuel Kant', 'Baruch Spinoza'],
    correctIndex: 1,
    explanation: 'René Descartes, padre del racionalismo moderno, utilizó la duda metódica para encontrar una verdad indubitable: el propio acto de dudar y pensar.',
    curiosityFact: 'Descartes también fue el inventor del sistema de coordenadas cartesianas que une el álgebra con la geometría.',
    difficulty: 'fácil',
  },
  {
    id: 'fil-4',
    categoryId: 'filosofia',
    question: 'La disciplina filosófica que reflexiona sobre el origen, la naturaleza, la validez y los límites del conocimiento humano se llama:',
    options: ['Ontología', 'Gnoseología', 'Axiología', 'Ética'],
    correctIndex: 1,
    explanation: 'La gnoseología (del griego gnosis, conocimiento) estudia el conocimiento en general, a diferencia de la epistemología que se centra en el conocimiento científico.',
    curiosityFact: 'El problema central de la gnoseología enfrenta históricamente a racionalistas (Descartes) y empiristas (Locke, Hume).',
    difficulty: 'medio',
  },
  {
    id: 'fil-5',
    categoryId: 'filosofia',
    question: '¿Qué filósofo alemán propuso el "Imperativo Categórico" como máxima moral incondicional y universal en su ética del deber?',
    options: ['Friedrich Nietzsche', 'Immanuel Kant', 'Arthur Schopenhauer', 'G. W. F. Hegel'],
    correctIndex: 1,
    explanation: 'Kant formuló: "Obra solo según aquella máxima por la cual puedas querer que al mismo tiempo se convierta en ley universal".',
    curiosityFact: 'Kant era tan metódico en su vida diaria en Königsberg que los ciudadanos ajustaban sus relojes al verlo pasar en su paseo de las 3:30 p.m.',
    difficulty: 'medio',
  },
  {
    id: 'fil-6',
    categoryId: 'filosofia',
    question: 'La famosa alegoría de "El Mito de la Caverna", que distingue el mundo sensible del mundo inteligible de las ideas, fue escrita por:',
    options: ['Aristóteles', 'Platón', 'Epicuro', 'Zenón de Citio'],
    correctIndex: 1,
    explanation: 'Platón expone esta alegoría en el Libro VII de su obra cumbre "La República", ilustrando el ascenso del alma desde la ignorancia hacia la idea del Bien.',
    curiosityFact: 'Platón fundó la Academia de Atenas en el 387 a.C., considerada la primera universidad de la civilización occidental.',
    difficulty: 'fácil',
  },

  // ===================== 3. GEOGRAFÍA =====================
  {
    id: 'geo-1',
    categoryId: 'geografia',
    question: 'Según la tesis de Javier Pulgar Vidal, ¿cuál es la región natural ubicada entre los 3.500 y 4.000 m.s.n.m., cuyo nombre significa "tierras altas"?',
    options: ['Yunga', 'Quechua', 'Suni o Jalca', 'Puna'],
    correctIndex: 2,
    explanation: 'La región Suni o Jalca (3.500 a 4.000 m.s.n.m.) presenta clima templado-frío y es el límite superior para la agricultura de la quinua y papa.',
    curiosityFact: 'Las 8 regiones naturales del Perú de Pulgar Vidal se definieron considerando el relieve, altitud, clima, flora, fauna y toponimia nativa.',
    difficulty: 'medio',
  },
  {
    id: 'geo-2',
    categoryId: 'geografia',
    question: '¿Cuál es la ecorregión marina del Perú caracterizada por sus aguas frías ricas en fitoplancton y anchoveta?',
    options: ['Mar tropical', 'Mar frío de la Corriente Peruana (Humboldt)', 'Zona Pelágica Oceánica', 'Mar Abisal'],
    correctIndex: 1,
    explanation: 'El mar frío de la corriente peruana es uno de los ecosistemas marinos más productivos del mundo gracias al fenómeno de afloramiento de nutrientes.',
    curiosityFact: 'La corriente de Humboldt fue descrita por el sabio Alexander von Humboldt a inicios del siglo XIX.',
    difficulty: 'fácil',
  },
  {
    id: 'geo-3',
    categoryId: 'geografia',
    question: '¿Cuál es el río más largo del territorio peruano que se origina en la confluencia de los ríos Marañón y Ucayali?',
    options: ['Río Huallaga', 'Río Urubamba', 'Río Amazonas', 'Río Mantaro'],
    correctIndex: 2,
    explanation: 'El río Amazonas nace formalmente en territorio peruano cerca de la localidad de Nauta (Loreto) tras la confluencia de los ríos Ucayali y Marañón.',
    curiosityFact: 'El río Ucayali es a su vez el río más extenso que discurre enteramente en el Perú antes de unirse al Marañón.',
    difficulty: 'fácil',
  },
  {
    id: 'geo-4',
    categoryId: 'geografia',
    question: '¿Qué placa tectónica oceánica subduce por debajo de la Placa Sudamericana, originando la fosa marina y la cordillera andina?',
    options: ['Placa de Cocos', 'Placa del Caribe', 'Placa de Nazca', 'Placa Antártica'],
    correctIndex: 2,
    explanation: 'La subducción de la Placa de Nazca bajo la Placa Sudamericana a unos 7-8 cm anuales es la causante principal de la actividad sísmica y volcánica en el Perú.',
    curiosityFact: 'El cinturón de fuego del Pacífico alberga más del 80% de los terremotos más intensos del planeta.',
    difficulty: 'fácil',
  },
  {
    id: 'geo-5',
    categoryId: 'geografia',
    question: '¿Cuál es el departamento más extenso del Perú por superficie territorial?',
    options: ['Ucayali', 'Cusco', 'Loreto', 'Madre de Dios'],
    correctIndex: 2,
    explanation: 'Loreto abarca casi el 29% del territorio nacional peruano con más de 368.000 kilómetros cuadrados de superficie selvática.',
    curiosityFact: 'Iquitos, capital de Loreto, es la ciudad más poblada del mundo que no tiene conexión por carretera terrestre hacia otra ciudad.',
    difficulty: 'fácil',
  },
  {
    id: 'geo-6',
    categoryId: 'geografia',
    question: '¿Cuál es la línea imaginaria de latitud 0° que divide la Tierra en Hemisferio Norte y Hemisferio Sur?',
    options: ['Meridiano de Greenwich', 'Trópico de Cáncer', 'Línea Ecuatorial (Ecuador terrestre)', 'Trópico de Capricornio'],
    correctIndex: 2,
    explanation: 'El Ecuador terrestre es el paralelo máximo de 0° de latitud y mide aproximadamente 40.075 kilómetros de circunferencia.',
    curiosityFact: 'Debido al achatamiento polar y ensanchamiento ecuatorial, los puntos en el ecuador están unos 21 km más lejos del centro de la Tierra que los polos.',
    difficulty: 'fácil',
  },

  // ===================== 4. RAZONAMIENTO LÓGICO =====================
  {
    id: 'rl-1',
    categoryId: 'raz-logico',
    question: '¿A qué proposición es lógicamente equivalente la condicional: p → q?',
    options: ['~p ∧ q', '~p ∨ q', 'p ∧ ~q', '~q → ~p es falsa'],
    correctIndex: 1,
    explanation: 'Por la Ley de Implicación Material, la proposición p → q equivale estrictamente a (~p ∨ q), y por contraposición también a (~q → ~p).',
    curiosityFact: 'La implicación solo es falsa cuando el antecedente es verdadero y el consecuente es falso (V → F ≡ F).',
    difficulty: 'fácil',
  },
  {
    id: 'rl-2',
    categoryId: 'raz-logico',
    question: 'Según las Leyes de De Morgan, la negación de una disyunción ~(p ∨ q) equivale a:',
    options: ['~p ∨ ~q', '~p ∧ ~q', 'p ∧ q', '~p ∨ q'],
    correctIndex: 1,
    explanation: 'Las leyes de De Morgan establecen que ~(p ∨ q) ≡ (~p ∧ ~q) y que ~(p ∧ q) ≡ (~p ∨ ~q).',
    curiosityFact: 'Augustus De Morgan fue un matemático británico del siglo XIX muy cercano a George Boole, creador del álgebra booleana.',
    difficulty: 'fácil',
  },
  {
    id: 'rl-3',
    categoryId: 'raz-logico',
    question: 'Una fórmula lógica cuya matriz principal en la tabla de verdad resulta con todos sus valores de verdad como FALSOS se clasifica como:',
    options: ['Tautología', 'Contradicción', 'Contingencia', 'Consistencia'],
    correctIndex: 1,
    explanation: 'Una fórmula es una contradicción (o antitautología) si todas sus salidas son falsas (F). Si todas son verdaderas es tautología, y si hay mixtas es contingencia.',
    curiosityFact: 'El principio de no contradicción de Aristóteles postula que una proposición no puede ser verdadera y falsa al mismo tiempo.',
    difficulty: 'fácil',
  },
  {
    id: 'rl-4',
    categoryId: 'raz-logico',
    question: '¿Qué tipo de circuito lógico representa a dos interruptores conectados en serie?',
    options: ['Disyunción (∨)', 'Conjunción (∧)', 'Bicondicional (↔)', 'Negación conjunta (↓)'],
    correctIndex: 1,
    explanation: 'En un circuito en serie la corriente solo pasa si ambos interruptores están cerrados simultáneamente (p y q), lo que modela la conjunción (p ∧ q).',
    curiosityFact: 'Los interruptores en paralelo, en cambio, representan la disyunción inclusiva (p ∨ q).',
    difficulty: 'medio',
  },
  {
    id: 'rl-5',
    categoryId: 'raz-logico',
    question: 'Simplifique aplicando leyes de absorción: p ∧ (p ∨ q)',
    options: ['q', 'p', 'p ∨ q', 'Falso'],
    correctIndex: 1,
    explanation: 'Por la Ley de Absorción total: p ∧ (p ∨ q) ≡ p y de igual forma p ∨ (p ∧ q) ≡ p.',
    curiosityFact: 'La absorción permite simplificar circuitos lógicos reduciendo el número de compuertas necesarias en microprocesadores.',
    difficulty: 'medio',
  },
  {
    id: 'rl-6',
    categoryId: 'raz-logico',
    question: 'La negación lógica de la proposición cuantificada: "Todos los estudiantes son dedicados" es:',
    options: [
      'Ningún estudiante es dedicado',
      'Algunos estudiantes no son dedicados',
      'Todos los estudiantes no son dedicados',
      'Muchos estudiantes son dedicados',
    ],
    correctIndex: 1,
    explanation: 'La negación del cuantificador universal afirmativo (Todos los S son P) es el cuantificador particular negativo (Existe al menos un S que no es P / Algunos S no son P).',
    curiosityFact: 'Para refutar una afirmación universal solo se necesita encontrar un único contraejemplo.',
    difficulty: 'medio',
  },

  // ===================== 5. ÁLGEBRA =====================
  {
    id: 'alg-1',
    categoryId: 'algebra',
    question: 'Al resolver la ecuación cuadrática ax² + bx + c = 0, ¿qué indica que el discriminante Δ = b² - 4ac sea igual a cero (Δ = 0)?',
    options: [
      'Tiene dos raíces reales distintas',
      'Tiene raíces complejas o imaginarias',
      'Tiene una raíz real única (dos raíces reales e iguales)',
      'No tiene solución posible',
    ],
    correctIndex: 2,
    explanation: 'Cuando el discriminante Δ = 0, el trinomio es un trinomio cuadrado perfecto y la ecuación posee raíces reales e iguales (raíz doble).',
    curiosityFact: 'El matemático persa Al-Juarismi en el siglo IX sistematizó las reglas para resolver ecuaciones de segundo grado.',
    difficulty: 'fácil',
  },
  {
    id: 'alg-2',
    categoryId: 'algebra',
    question: '¿A qué es igual el producto notable de la diferencia de cuadrados: (a + b)(a - b)?',
    options: ['a² + b²', 'a² - b²', 'a² - 2ab + b²', '(a - b)²'],
    correctIndex: 1,
    explanation: 'La multiplicación de una suma por su diferencia da como resultado la diferencia de sus cuadrados: (a + b)(a - b) = a² - b².',
    curiosityFact: 'Este producto notable es clave para racionalizar denominadores con raíces cuadradas binomiales.',
    difficulty: 'fácil',
  },
  {
    id: 'alg-3',
    categoryId: 'algebra',
    question: 'En las leyes de exponentes, ¿a qué equivale la expresión (xᵃ)ᵇ?',
    options: ['xᵃ⁺ᵇ', 'xᵃ⁻ᵇ', 'xᵃᵇ (x elevado a a·b)', 'xᵃ/ᵇ'],
    correctIndex: 2,
    explanation: 'Potencia de potencia: se mantiene la misma base y los exponentes se multiplican directamente: (xᵃ)ᵇ = xᵃ·ᵇ.',
    curiosityFact: 'Cuidado con x^(a^b), donde no hay paréntesis y se resuelve de arriba hacia abajo como exponente escalonado.',
    difficulty: 'fácil',
  },
  {
    id: 'alg-4',
    categoryId: 'algebra',
    question: '¿Cuál es el resto o residuo de dividir el polinomio P(x) = x³ - 2x² + 3x - 5 entre (x - 2) aplicando el Teorema del Resto?',
    options: ['-1', '0', '1', '2'],
    correctIndex: 2,
    explanation: 'Por el Teorema del Resto de René Descartes, igualamos el divisor a cero: x - 2 = 0 → x = 2. Reemplazamos en P(2): P(2) = (2)³ - 2(2)² + 3(2) - 5 = 8 - 8 + 6 - 5 = 1.',
    curiosityFact: 'El teorema del resto evita tener que efectuar toda la división por el método de Horner o Ruffini cuando solo se pide el residuo.',
    difficulty: 'medio',
  },
  {
    id: 'alg-5',
    categoryId: 'algebra',
    question: 'Si en la ecuación x² - 7x + 12 = 0 las raíces son x₁ y x₂, ¿cuánto vale la suma de raíces (x₁ + x₂) según el Teorema de Cardano-Vieta?',
    options: ['12', '7', '-7', '-12'],
    correctIndex: 1,
    explanation: 'Por las relaciones de Cardano-Vieta, en ax² + bx + c = 0 la suma de raíces es x₁ + x₂ = -b/a. En este caso: -(-7)/1 = 7.',
    curiosityFact: 'El producto de las raíces es c/a = 12/1 = 12. Las raíces son efectivamente 3 y 4 (3+4=7 y 3·4=12).',
    difficulty: 'fácil',
  },
  {
    id: 'alg-6',
    categoryId: 'algebra',
    question: '¿Cuál es el valor simplificado de x⁰ para cualquier número real x diferente de cero?',
    options: ['0', '1', 'x', 'Indefinido'],
    correctIndex: 1,
    explanation: 'Por definición axiomática de exponentes, todo número real no nulo elevado a la potencia cero es igual a 1 (x⁰ = 1 con x ≠ 0).',
    curiosityFact: 'La expresión 0⁰ se considera una forma indeterminada en cálculo matemático.',
    difficulty: 'fácil',
  },

  // ===================== 6. PSICOLOGÍA =====================
  {
    id: 'psi-1',
    categoryId: 'psicologia',
    question: '¿Quién fundó en Leipzig (Alemania) en 1879 el primer laboratorio de psicología experimental, marcando el inicio de la psicología como ciencia?',
    options: ['Sigmund Freud', 'Wilhelm Wundt', 'John B. Watson', 'William James'],
    correctIndex: 1,
    explanation: 'Wilhelm Wundt es reconocido como el padre de la psicología científica por emplear el método de introspección experimental controlada.',
    curiosityFact: 'Antes de 1879, la psicología era tratada como una rama de la filosofía o de la fisiología médica.',
    difficulty: 'fácil',
  },
  {
    id: 'psi-2',
    categoryId: 'psicologia',
    question: 'Según el psicoanálisis de Sigmund Freud, ¿cuál es la estructura de la personalidad que opera bajo el "principio del placer"?',
    options: ['El Yo (Ego)', 'El Ello (Id)', 'El Superyó (Superego)', 'El Inconsciente Colectivo'],
    correctIndex: 1,
    explanation: 'El Ello (Id) es totalmente inconsciente, innato y alberga los impulsos biológicos y pulsiones, buscando gratificación inmediata según el principio del placer.',
    curiosityFact: 'El Yo actúa como mediador con la realidad y el Superyó representa las normas morales internalizadas.',
    difficulty: 'fácil',
  },
  {
    id: 'psi-3',
    categoryId: 'psicologia',
    question: 'El célebre experimento del perro que salivaba al escuchar el sonido de una campana previamente asociada con la comida fue desarrollado por:',
    options: ['B. F. Skinner', 'Iván Pávlov', 'Jean Piaget', 'Edward Thorndike'],
    correctIndex: 1,
    explanation: 'Iván Pávlov descubrió el Condicionamiento Clásico: un estímulo neutro (campana) se convierte en estímulo condicionado tras emparejarse con un estímulo incondicionado (comida).',
    curiosityFact: 'Pávlov era fisiólogo y ganó el Premio Nobel de Medicina en 1904 por sus estudios sobre el sistema digestivo.',
    difficulty: 'fácil',
  },
  {
    id: 'psi-4',
    categoryId: 'psicologia',
    question: 'Según Jean Piaget, ¿en qué etapa del desarrollo cognitivo los niños adquieren la noción de permanencia del objeto (0 a 2 años)?',
    options: [
      'Etapa preoperacional',
      'Etapa sensoriomotriz',
      'Etapa de operaciones concretas',
      'Etapa de operaciones formales',
    ],
    correctIndex: 1,
    explanation: 'En la etapa sensoriomotriz (0-2 años), el bebé aprende a través de los sentidos y acciones motoras, descubriendo que los objetos siguen existiendo aunque no los vea.',
    curiosityFact: 'Antes de adquirir la permanencia del objeto, si tapas un juguete con una manta el bebé asume que el objeto ha dejado de existir.',
    difficulty: 'medio',
  },
  {
    id: 'psi-5',
    categoryId: 'psicologia',
    question: 'El tipo de memoria que almacena información por escasos segundos antes de ser procesada o descartada se llama:',
    options: ['Memoria a largo plazo', 'Memoria episódica', 'Memoria sensorial / a corto plazo', 'Memoria procedimental'],
    correctIndex: 2,
    explanation: 'La memoria sensorial retiene la huella del estímulo (icónica o ecoica) durante milisegundos a segundos antes de pasar a la memoria de trabajo a corto plazo.',
    curiosityFact: 'George Miller demostró que la capacidad de la memoria de trabajo a corto plazo es de aproximadamente 7 ± 2 elementos (chunks).',
    difficulty: 'fácil',
  },
  {
    id: 'psi-6',
    categoryId: 'psicologia',
    question: 'El mecanismo de defensa freudiano en el cual una persona atribuye sus propios impulsos o defectos inaceptables a los demás se denomina:',
    options: ['Represión', 'Proyección', 'Sublimación', 'Racionalización'],
    correctIndex: 1,
    explanation: 'En la proyección, el sujeto expulsa de sí y localiza en otra persona sentimientos, deseos o defectos que no reconoce en sí mismo.',
    curiosityFact: 'La sublimación es el único mecanismo considerado enteramente maduro, al canalizar pulsiones hacia el arte o el estudio.',
    difficulty: 'medio',
  },

  // ===================== 7. LENGUAJE Y LITERATURA =====================
  {
    id: 'len-1',
    categoryId: 'lenguaje-literatura',
    question: '¿Qué función del lenguaje predomina en una orden o súplica como: "¡Por favor, cierra la puerta inmediatamente!"?',
    options: ['Función emotiva o expresiva', 'Función apelativa o conativa', 'Función fática o de contacto', 'Función poética'],
    correctIndex: 1,
    explanation: 'La función apelativa o conativa se centra en el receptor, buscando influir en su conducta o persuadirlo para que realice una acción.',
    curiosityFact: 'El lingüista Roman Jakobson definió las 6 funciones del lenguaje asociadas cada una a un elemento de la comunicación.',
    difficulty: 'fácil',
  },
  {
    id: 'len-2',
    categoryId: 'lenguaje-literatura',
    question: '¿Qué palabra lleva tilde por presentar hiato acentual (vocal cerrada tónica + vocal abierta)?',
    options: ['Canción', 'Raíz', 'Comió', 'Árbol'],
    correctIndex: 1,
    explanation: 'En "ra-íz", la vocal cerrada "i" tiene la mayor fuerza de voz y se separa de la vocal abierta "a", formándose un hiato acentual que siempre se tilda.',
    curiosityFact: 'El hiato acentual rompe las reglas generales de acentuación (se tilda sin importar si es aguda terminada en z).',
    difficulty: 'fácil',
  },
  {
    id: 'len-3',
    categoryId: 'lenguaje-literatura',
    question: '¿Quién es el autor de los poemarios cumbre de la literatura peruana "Los heraldos negros" (1918) y "Trilce" (1922)?',
    options: ['José María Eguren', 'César Vallejo', 'Ciro Alegría', 'Abraham Valdelomar'],
    correctIndex: 1,
    explanation: 'César Vallejo es el poeta universal del Perú; "Trilce" revolucionó la vanguardia poética en idioma español.',
    curiosityFact: 'Vallejo publicó "Trilce" tras haber estado injustamente encarcelado durante 112 días en Trujillo en 1920.',
    difficulty: 'fácil',
  },
  {
    id: 'len-4',
    categoryId: 'lenguaje-literatura',
    question: '¿En qué novela de Mario Vargas Llosa se retratan las vivencias y rigores de los cadetes del Colegio Militar Leoncio Prado?',
    options: ['Conversación en La Catedral', 'La ciudad y los perros', 'La fiesta del Chivo', 'Pantaleón y las visitadoras'],
    correctIndex: 1,
    explanation: 'Publicada en 1963, "La ciudad y los perros" fue la primera gran novela de Mario Vargas Llosa e inauguró el Boom Latinoamericano.',
    curiosityFact: 'Autoridades del colegio militar quemaron ejemplares del libro en el patio central acusándolo de calumnioso.',
    difficulty: 'fácil',
  },
  {
    id: 'len-5',
    categoryId: 'lenguaje-literatura',
    question: '¿Qué figura literaria consiste en la exageración desmesurada de las cualidades o acciones de un objeto o persona?',
    options: ['Metáfora', 'Hipérbole', 'Anáfora', 'Antítesis'],
    correctIndex: 1,
    explanation: 'La hipérbole es una figura retórica de pensamiento que aumenta o disminuye de forma exagerada lo que se dice (ej: "Lloró ríos de lágrimas").',
    curiosityFact: 'El célebre poeta Francisco de Quevedo fue maestro de la hipérbole con versos como "Érase un hombre a una nariz pegado".',
    difficulty: 'fácil',
  },
  {
    id: 'len-6',
    categoryId: 'lenguaje-literatura',
    question: '¿Cuál es la obra cumbre del escritor indigenista José María Arguedas ambientada en Abancay que narra la vida del joven Ernesto?',
    options: ['Yawar Fiesta', 'Los ríos profundos', 'El zorro de arriba y el zorro de abajo', 'Agua'],
    correctIndex: 1,
    explanation: '"Los ríos profundos" (1958) refleja el conflicto cultural andino a través de la mirada y sensibilidad de Ernesto en un internado religioso.',
    curiosityFact: 'Arguedas aprendió quechua antes que español al haber sido criado por sirvientes indígenas en la hacienda de su madrastra.',
    difficulty: 'medio',
  },

  // ===================== 8. CÍVICA =====================
  {
    id: 'civ-1',
    categoryId: 'civica',
    question: 'Según la Constitución Política del Perú, ¿cuál es el fin supremo de la sociedad y del Estado?',
    options: [
      'El crecimiento económico sostenido',
      'La defensa de la persona humana y el respeto de su dignidad',
      'La seguridad nacional y fronteriza',
      'La recaudación justa de tributos',
    ],
    correctIndex: 1,
    explanation: 'El Artículo 1° de la Constitución de 1993 señala textualmente: "La defensa de la persona humana y el respeto de su dignidad son el fin supremo de la sociedad y del Estado".',
    curiosityFact: 'Este principio personalista subordina todas las leyes e instituciones al bienestar y derechos fundamentales de los individuos.',
    difficulty: 'fácil',
  },
  {
    id: 'civ-2',
    categoryId: 'civica',
    question: '¿Qué garantía constitucional protege la libertad individual y los derechos conexos ante una detención arbitraria?',
    options: ['Acción de Amparo', 'Habeas Corpus', 'Habeas Data', 'Acción de Cumplimiento'],
    correctIndex: 1,
    explanation: 'El Hábeas Corpus (Art. 200, inc. 1 de la Constitución) procede ante el hecho u omisión que vulnera o amenaza la libertad individual o la integridad física.',
    curiosityFact: 'El Hábeas Corpus tiene origen en el derecho inglés de 1679 ("que tengas tu cuerpo") para evitar encarcelamientos sin orden judicial.',
    difficulty: 'fácil',
  },
  {
    id: 'civ-3',
    categoryId: 'civica',
    question: '¿Qué órgano constitucional autónomo se encarga del cómputo oficial de votos y la organización de los procesos electorales en el Perú?',
    options: [
      'Jurado Nacional de Elecciones (JNE)',
      'Oficina Nacional de Procesos Electorales (ONPE)',
      'Registro Nacional de Identificación y Estado Civil (RENIEC)',
      'Tribunal Constitucional (TC)',
    ],
    correctIndex: 1,
    explanation: 'La ONPE organiza y ejecuta los procesos electorales y anuncia los resultados oficiales, mientras el JNE fiscaliza la legalidad y administra justicia electoral.',
    curiosityFact: 'El sistema electoral peruano es tripartito: ONPE (organiza), JNE (juzga y fiscaliza) y RENIEC (mantiene el padrón electoral).',
    difficulty: 'fácil',
  },
  {
    id: 'civ-4',
    categoryId: 'civica',
    question: '¿Cuál es el órgano supremo de interpretación y control de la constitucionalidad de las leyes en el Perú?',
    options: ['Corte Suprema de Justicia', 'Tribunal Constitucional', 'Ministerio de Justicia', 'Fiscalía de la Nación'],
    correctIndex: 1,
    explanation: 'El Tribunal Constitucional es autónomo e independiente; está integrado por 7 magistrados elegidos por el Congreso por un período de 5 años.',
    curiosityFact: 'La sede histórica oficial del Tribunal Constitucional fijada por ley es la ciudad de Arequipa.',
    difficulty: 'medio',
  },
  {
    id: 'civ-5',
    categoryId: 'civica',
    question: 'Los derechos de "Primera Generación" (Civiles y Políticos) tienen su reconocimiento fundamental tras qué acontecimiento histórico?',
    options: ['Revolución Rusa de 1917', 'Revolución Francesa de 1789', 'Final de la Segunda Guerra Mundial', 'Guerra Fría'],
    correctIndex: 1,
    explanation: 'Los derechos civiles y políticos (a la vida, libertad, propiedad e igualdad ante la ley) surgieron con la Declaración de los Derechos del Hombre y del Ciudadano (1789).',
    curiosityFact: 'Se les llama derechos negativos porque exigen que el Estado no intervenga ni restrinja la libertad individual.',
    difficulty: 'fácil',
  },
  {
    id: 'civ-6',
    categoryId: 'civica',
    question: '¿Cómo se llama el mecanismo de participación ciudadana mediante el cual los ciudadanos pueden destituir a alcaldes o gobernadores regionales de su cargo?',
    options: ['Remoción', 'Revocatoria de autoridades', 'Referéndum', 'Iniciativa legislativa'],
    correctIndex: 1,
    explanation: 'La revocatoria permite a los ciudadanos dar por terminado el mandato de alcaldes, regidores y autoridades regionales electas mediante votación popular.',
    curiosityFact: 'No procede la revocatoria contra congresistas de la República ni contra el Presidente de la Nación.',
    difficulty: 'fácil',
  },

  // ===================== 9. HISTORIA =====================
  {
    id: 'his-1',
    categoryId: 'historia',
    question: '¿Qué civilización peruana preincaica es considerada la más antigua de América con más de 5.000 años de antigüedad?',
    options: ['Chavín', 'Caral-Supe', 'Moche', 'Tiahuanaco'],
    correctIndex: 1,
    explanation: 'La Ciudad Sagrada de Caral (valle de Supe, Lima), estudiada por la arqueóloga Ruth Shady, se desarrolló coetáneamente con las pirámides de Egipto.',
    curiosityFact: 'Caral no tuvo murallas ni evidencias de armas, destacando como una sociedad pacífica basada en el comercio y la religión.',
    difficulty: 'fácil',
  },
  {
    id: 'his-2',
    categoryId: 'historia',
    question: '¿Cuál era el principio económico básico del Tahuantinsuyo basado en la ayuda mutua entre miembros del ayllu ("hoy por ti, mañana por mí")?',
    options: ['Mita', 'Ayni', 'Minka', 'Chunca'],
    correctIndex: 1,
    explanation: 'El Ayni era el sistema de trabajo recíproco intrafamiliar en el ayllu agrícola y de construcción de viviendas.',
    curiosityFact: 'La Minka era el trabajo comunal a favor de todo el ayllu, mientras que la Mita era el tributo laboral obligatorio para el Estado inca.',
    difficulty: 'fácil',
  },
  {
    id: 'his-3',
    categoryId: 'historia',
    question: '¿Qué virrey organizó administrativamente el Virreinato del Perú, estableció las reducciones de indios y fijó el tributo y la mita minera de Potosí?',
    options: ['Blasco Núñez Vela', 'Francisco de Toledo', 'Manuel de Amat y Junyent', 'José Fernando de Abascal'],
    correctIndex: 1,
    explanation: 'Francisco de Toledo (virrey entre 1569 y 1581) fue el gran organizador del sistema virreinal español en el Perú.',
    curiosityFact: 'Toledo ordenó también la captura y ejecución del último inca de Vilcabamba, Túpac Amaru I, en 1572.',
    difficulty: 'medio',
  },
  {
    id: 'his-4',
    categoryId: 'historia',
    question: '¿Qué batalla librada el 9 de diciembre de 1824 selló definitivamente la independencia del Perú y de América del Sur?',
    options: ['Batalla de Junín', 'Batalla de Pichincha', 'Batalla de Ayacucho', 'Batalla de Maipú'],
    correctIndex: 2,
    explanation: 'En la Pampa de la Quinua (Ayacucho), el Ejército Libertador al mando de Antonio José de Sucre venció a las tropas realistas del virrey La Serna.',
    curiosityFact: 'Tras la batalla se firmó la histórica Capitulación de Ayacucho, poniendo fin a más de tres siglos de dominio colonial español.',
    difficulty: 'fácil',
  },
  {
    id: 'his-5',
    categoryId: 'historia',
    question: '¿Quién fue conocido como "El Brujo de los Andes" por liderar la Campaña de la Breña durante la Guerra del Pacífico?',
    options: ['Miguel Grau Seminario', 'Francisco Bolognesi', 'Andrés Avelino Cáceres', 'Alfonso Ugarte'],
    correctIndex: 2,
    explanation: 'El mariscal Andrés Avelino Cáceres organizó la resistencia guerrillera con campesinos andinos en la sierra central hostigando al ejército invasor chileno.',
    curiosityFact: 'Cáceres hablaba quechua con fluidez, lo que le permitió inspirar y comandar con fervor a las tropas indígenas de la Breña.',
    difficulty: 'fácil',
  },
  {
    id: 'his-6',
    categoryId: 'historia',
    question: '¿Qué conflicto mundial se desencadenó tras el asesinato del archiduque Francisco Fernando de Austria en Sarajevo en 1914?',
    options: ['Guerra Franco-Prusiana', 'Primera Guerra Mundial', 'Segunda Guerra Mundial', 'Guerra Ruso-Japonesa'],
    correctIndex: 1,
    explanation: 'El magnicidio activó el complejo sistema de alianzas europeas (Triple Entente vs. Triple Alianza), iniciando la Gran Guerra.',
    curiosityFact: 'Durante la Primera Guerra Mundial se utilizaron por primera vez tanques de combate, aviones militares y gases químicos venenosos.',
    difficulty: 'fácil',
  },

  // ===================== 10. ECONOMÍA =====================
  {
    id: 'eco-1',
    categoryId: 'economia',
    question: '¿Cuál es el problema económico fundamental que da origen a la ciencia económica?',
    options: [
      'La falta de moneda circulante',
      'La escasez de recursos frente a necesidades humanas ilimitadas',
      'El exceso de producción fabril',
      'La alta tasa de impuestos gubernamentales',
    ],
    correctIndex: 1,
    explanation: 'La economía surge porque los recursos materiales y naturales son escasos o limitados, mientras que las necesidades de la sociedad son ilimitadas.',
    curiosityFact: 'Lionel Robbins definió la economía como la ciencia que estudia la conducta humana como una relación entre fines y medios escasos que tienen usos alternativos.',
    difficulty: 'fácil',
  },
  {
    id: 'eco-2',
    categoryId: 'economia',
    question: 'Según la Ley de la Demanda, ¿qué ocurre con la cantidad demandada de un bien cuando su precio sube (ceteris paribus)?',
    options: ['Aumenta', 'Disminuye', 'Permanece constante', 'Se vuelve infinita'],
    correctIndex: 1,
    explanation: 'Existe una relación inversa entre el precio y la cantidad demandada: a mayor precio, menor cantidad demandada, manteniendo los demás factores constantes.',
    curiosityFact: 'Los únicos bienes que desafían esta ley son los teóricos bienes Giffen y los bienes Veblen de lujo extremo.',
    difficulty: 'fácil',
  },
  {
    id: 'eco-3',
    categoryId: 'economia',
    question: '¿Cómo se denomina la estructura de mercado donde existe un único vendedor que fija el precio sin competidores directos?',
    options: ['Monopsonio', 'Monopolio', 'Oligopolio', 'Competencia perfecta'],
    correctIndex: 1,
    explanation: 'Un monopolio es una falla de mercado donde una sola empresa domina la oferta total de un producto o servicio.',
    curiosityFact: 'En el Perú, el Artículo 61 de la Constitución prohíbe el monopolio y el abuso de posición de dominio en la economía social de mercado.',
    difficulty: 'fácil',
  },
  {
    id: 'eco-4',
    categoryId: 'economia',
    question: '¿Cuál es el organismo estatal autónomo encargado de preservar la estabilidad monetaria y regular la emisión de billetes en el Perú?',
    options: [
      'Banco de la Nación (BN)',
      'Banco Central de Reserva del Perú (BCRP)',
      'Superintendencia de Banca y Seguros (SBS)',
      'Ministerio de Economía y Finanzas (MEF)',
    ],
    correctIndex: 1,
    explanation: 'La finalidad constitucional del BCRP es preservar la estabilidad monetaria, controlando la inflación mediante la tasa de interés de referencia.',
    curiosityFact: 'El BCRP tiene como meta un rango inflacionario explícito entre 1% y 3% anual.',
    difficulty: 'fácil',
  },
  {
    id: 'eco-5',
    categoryId: 'economia',
    question: 'El aumento continuo, generalizado y sostenido del nivel de precios de bienes y servicios en una economía se denomina:',
    options: ['Deflación', 'Devaluación', 'Inflación', 'Recesión'],
    correctIndex: 2,
    explanation: 'La inflación erosiona el poder adquisitivo del dinero; se mide a través de la variación porcentual del Índice de Precios al Consumidor (IPC).',
    curiosityFact: 'El Perú sufrió una de las peores hiperinflaciones de la historia entre 1988 y 1990 superando el 7.000% anual.',
    difficulty: 'fácil',
  },
  {
    id: 'eco-6',
    categoryId: 'economia',
    question: '¿Cómo se llama el indicador macroeconómico que mide el valor monetario de todos los bienes y servicios finales producidos en un país durante un año?',
    options: ['Producto Nacional Neto (PNN)', 'Producto Bruto Interno (PBI)', 'Ingreso Nacional Per Cápita', 'Balanza Comercial'],
    correctIndex: 1,
    explanation: 'El PBI es el principal indicador de la actividad y tamaño de la economía de un país.',
    curiosityFact: 'El PBI solo contabiliza bienes finales para evitar la doble contabilidad de los insumos intermedios.',
    difficulty: 'fácil',
  },

  // ===================== 11. RAZONAMIENTO MATEMÁTICO =====================
  {
    id: 'rm-1',
    categoryId: 'raz-matematico',
    question: 'En una granja hay 30 cabezas y 90 patas entre conejos y gallinas. ¿Cuántos conejos hay? (Aplica método del rombo o planteo)',
    options: ['10', '15', '20', '25'],
    correctIndex: 1,
    explanation: 'Si todas las 30 cabezas fueran gallinas (2 patas c/u) habría: 30 × 2 = 60 patas. Error total = 90 - 60 = 30 patas faltantes. Error unitario = 4 - 2 = 2 patas. Número de conejos = 30 / 2 = 15 conejos.',
    curiosityFact: 'El método del rombo es un algoritmo visual preuniversitario muy popular para resolver sistemas de 2 ecuaciones con 2 incógnitas.',
    difficulty: 'fácil',
  },
  {
    id: 'rm-2',
    categoryId: 'raz-matematico',
    question: '¿Cuál es la suma de los primeros 50 números enteros positivos (1 + 2 + 3 + ... + 50)?',
    options: ['1.225', '1.250', '1.275', '1.300'],
    correctIndex: 2,
    explanation: 'Aplicando la fórmula de Gauss S = n(n + 1)/2: S = 50(51)/2 = 25 × 51 = 1.275.',
    curiosityFact: 'Carl Friedrich Gauss descubrió esta fórmula mentalmente cuando tenía apenas 9 años de edad en la escuela elemental.',
    difficulty: 'fácil',
  },
  {
    id: 'rm-3',
    categoryId: 'raz-matematico',
    question: 'En una urna hay 10 esferas rojas, 8 azules y 6 verdes. ¿Cuántas esferas se deben extraer al azar como mínimo para tener la certeza de haber sacado una roja?',
    options: ['10', '14', '15', '24'],
    correctIndex: 2,
    explanation: 'Principio del peor de los casos (certezas): primero sacas todas las que NO son rojas (8 azules + 6 verdes = 14). La siguiente bola que extraigas (14 + 1 = 15) será necesariamente roja.',
    curiosityFact: 'El análisis del peor de los casos es la base de las demostraciones de cotas superiores en teoría de la computación.',
    difficulty: 'medio',
  },
  {
    id: 'rm-4',
    categoryId: 'raz-matematico',
    question: 'Si al cuádruple de la edad que tendré dentro de 5 años le resto el doble de la edad que tenía hace 3 años, obtengo 58 años. ¿Cuál es mi edad actual?',
    options: ['15 años', '16 años', '18 años', '20 años'],
    correctIndex: 1,
    explanation: 'Sea x la edad actual: 4(x + 5) - 2(x - 3) = 58 → 4x + 20 - 2x + 6 = 58 → 2x + 26 = 58 → 2x = 32 → x = 16 años.',
    curiosityFact: 'Los problemas sobre edades son casos especiales de planteo de ecuaciones lineales donde la diferencia de edades entre dos personas siempre permanece constante en el tiempo.',
    difficulty: 'medio',
  },
  {
    id: 'rm-5',
    categoryId: 'raz-matematico',
    question: 'Un reloj da 5 campanadas en 8 segundos. ¿Cuánto tardará en dar 10 campanadas?',
    options: ['16 segundos', '18 segundos', '20 segundos', '15 segundos'],
    correctIndex: 1,
    explanation: 'El tiempo se mide entre intervalos: 5 campanadas tienen 4 intervalos → cada intervalo dura 8 / 4 = 2 segundos. Para dar 10 campanadas hay 9 intervalos → Tiempo = 9 × 2 = 18 segundos.',
    curiosityFact: 'El error más común en este tipo de problema es aplicar una regla de tres directa entre campanadas y segundos en lugar de contar los intervalos.',
    difficulty: 'medio',
  },
  {
    id: 'rm-6',
    categoryId: 'raz-matematico',
    question: '¿Qué número continúa en la sucesión numérica: 2; 5; 10; 17; 26; ...?',
    options: ['35', '37', '38', '40'],
    correctIndex: 1,
    explanation: 'Las diferencias consecutivas son números impares: +3, +5, +7, +9, +11. Por tanto: 26 + 11 = 37. También corresponde al patrón n² + 1: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26, 6²+1=37.',
    curiosityFact: 'Las sucesiones de segundo orden tienen diferencias de diferencias constantes (en este caso 2).',
    difficulty: 'fácil',
  },

  // ===================== 12. II EXAMEN IDEPUNP SEPT =====================
  {
    id: 'ide-s-1',
    categoryId: 'idepunp-sept',
    question: '[IDEPUNP Septiembre - Raz. Lógico]: La proposición equivalente a la negación de: "El postor ingresa a la universidad o no aprueba el examen", formalizada como ~(p ∨ ~q), es:',
    options: ['~p ∧ q', '~p ∨ q', 'p ∧ q', '~p ∧ ~q'],
    correctIndex: 0,
    explanation: 'Por Ley de De Morgan: ~(p ∨ ~q) ≡ ~p ∧ ~(~q) ≡ ~p ∧ q. Traducido: "El postor no ingresa a la universidad y aprueba el examen".',
    curiosityFact: 'Pregunta clásica del II Examen del ciclo Regular/Septiembre en el área de Lógica Proposicional.',
    difficulty: 'medio',
  },
  {
    id: 'ide-s-2',
    categoryId: 'idepunp-sept',
    question: '[IDEPUNP Septiembre - Álgebra]: Si el polinomio P(x) = x⁴ - 3x² + ax + b es divisible exactamente entre (x² - 1), ¿cuánto vale la suma (a + b)?',
    options: ['-2', '0', '2', '-1'],
    correctIndex: 2,
    explanation: 'Como x² - 1 = (x - 1)(x + 1), las raíces son 1 y -1. P(1) = 1 - 3 + a + b = 0 → a + b = 2. De forma directa, la suma a + b es igual a 2.',
    curiosityFact: 'Por el Teorema del Factor, si un polinomio es divisible entre un producto de binomios lineales, se anula en cada una de sus raíces.',
    difficulty: 'medio',
  },
  {
    id: 'ide-s-3',
    categoryId: 'idepunp-sept',
    question: '[IDEPUNP Septiembre - Biología]: Durante la gametogénesis humana, ¿en qué fase meiótica se produce el fenómeno de "crossing-over" (entrecruzamiento genético)?',
    options: ['Leptoteno', 'Zigoteno', 'Paquiteno', 'Diploteno'],
    correctIndex: 2,
    explanation: 'En la subfase de Paquiteno (dentro de la Profase I de la meiosis) ocurre la recombinación genética o crossing-over entre cromátidas no hermanas de cromosomas homólogos.',
    curiosityFact: 'El crossing-over es la principal fuente de variabilidad genética que hace que los hermanos no sean idénticos entre sí.',
    difficulty: 'medio',
  },
  {
    id: 'ide-s-4',
    categoryId: 'idepunp-sept',
    question: '[IDEPUNP Septiembre - Cívica]: ¿Cuántos miembros titulares componen el pleno del Tribunal Constitucional del Perú y por cuántos años son elegidos por el Congreso?',
    options: ['5 miembros por 3 años', '7 miembros por 5 años', '9 miembros por 6 años', '7 miembros por 7 años'],
    correctIndex: 1,
    explanation: 'El Tribunal Constitucional se compone de 7 magistrados designados por el Congreso con el voto favorable de los dos tercios del número legal de sus miembros (87 votos).',
    curiosityFact: 'Los magistrados del TC gozan de la misma inmunidad y prerrogativas que los congresistas de la República.',
    difficulty: 'fácil',
  },
  {
    id: 'ide-s-5',
    categoryId: 'idepunp-sept',
    question: '[IDEPUNP Septiembre - Historia]: ¿Qué acontecimiento desencadenó el inicio de la llamada "Guerra de los Conquistadores" en el Perú en 1538?',
    options: [
      'La batalla de Chupas entre almagristas y Vaca de Castro',
      'La disputa por la posesión de la ciudad del Cusco y la batalla de las Salinas',
      'La promulgación de las Leyes Nuevas de 1542',
      'La rebelión de Gonzalo Pizarro contra Blasco Núñez Vela',
    ],
    correctIndex: 1,
    explanation: 'Diego de Almagro y Francisco Pizarro se enfrentaron por la posesión del Cusco; el conflicto concluyó momentáneamente con la victoria pizarrista en la Batalla de las Salinas (1538) y la ejecución de Almagro "El Viejo".',
    curiosityFact: 'Años después, en 1541, los almagristas cobraron venganza asesinando a Francisco Pizarro en su palacio en Lima.',
    difficulty: 'medio',
  },
  {
    id: 'ide-s-6',
    categoryId: 'idepunp-sept',
    question: '[IDEPUNP Septiembre - Raz. Matemático]: Un caño llena un tanque en 4 horas y un desagüe lo vacía en 6 horas. Estando vacío, si se abren ambos a la vez, ¿en cuántas horas se llenará?',
    options: ['8 horas', '10 horas', '12 horas', '24 horas'],
    correctIndex: 2,
    explanation: 'Por reducción a la unidad: en 1 hora el caño llena 1/4 y el desagüe quita 1/6. Juntos en 1 hora llenan: 1/4 - 1/6 = (3 - 2)/12 = 1/12 del tanque. Por tanto, el tanque completo se llenará en 12 horas.',
    curiosityFact: 'Este es el clásico modelo de fracciones y flujo simultáneo recurrente en los exámenes preuniversitarios de la UNP.',
    difficulty: 'fácil',
  },

  // ===================== 13. II EXAMEN IDEPUNP VERANO =====================
  {
    id: 'ide-v-1',
    categoryId: 'idepunp-verano',
    question: '[IDEPUNP Verano - Lenguaje]: En la oración: "Los postulantes de Piura rindieron con éxito su segundo examen", ¿cuál es el núcleo del sujeto?',
    options: ['Postulantes', 'Piura', 'Examen', 'Éxito'],
    correctIndex: 0,
    explanation: 'El sujeto es "Los postulantes de Piura". El sustantivo principal que concuerda en número y persona con el verbo "rindieron" es "postulantes" (núcleo del sujeto).',
    curiosityFact: '"de Piura" funciona como modificador indirecto (MI) del sujeto.',
    difficulty: 'fácil',
  },
  {
    id: 'ide-v-2',
    categoryId: 'idepunp-verano',
    question: '[IDEPUNP Verano - Raz. Matemático]: En una progresión aritmética de 20 términos, el primer término es 5 y la razón es 3. ¿Cuál es el valor del último término?',
    options: ['60', '62', '65', '68'],
    correctIndex: 1,
    explanation: 'Fórmula del término enésimo: aₙ = a₁ + (n - 1)·r. Reemplazando: a₂₀ = 5 + (20 - 1)·3 = 5 + 19·3 = 5 + 57 = 62.',
    curiosityFact: 'La suma de todos los términos sería S = (5 + 62) × 20 / 2 = 670.',
    difficulty: 'fácil',
  },
  {
    id: 'ide-v-3',
    categoryId: 'idepunp-verano',
    question: '[IDEPUNP Verano - Filosofía]: La postura gnoseológica que sostiene que es imposible conocer la verdad absoluta y que solo existen opiniones relativas se denomina:',
    options: ['Dogmatismo', 'Escepticismo', 'Criticismo', 'Racionalismo'],
    correctIndex: 1,
    explanation: 'El escepticismo (iniciado por Pirrón de Elis) pone en duda la capacidad de la mente humana para alcanzar certezas indubitables sobre la realidad.',
    curiosityFact: 'Pirrón recomendaba la "ataraxia" (tranquilidad del alma) suspendiendo el juicio definitivo (epojé).',
    difficulty: 'medio',
  },
  {
    id: 'ide-v-4',
    categoryId: 'idepunp-verano',
    question: '[IDEPUNP Verano - Geografía]: ¿En qué departamento peruano se ubica el punto más occidental de América del Sur continental (Punta Balcones)?',
    options: ['Tumbes', 'Piura', 'Lambayeque', 'La Libertad'],
    correctIndex: 1,
    explanation: 'Punta Balcones se ubica en el distrito de La Brea (Talara, departamento de Piura) a 81° 19′ 34″ de longitud occidental.',
    curiosityFact: 'Piura alberga así el punto extremo más al oeste de toda la masa continental sudamericana.',
    difficulty: 'fácil',
  },
  {
    id: 'ide-v-5',
    categoryId: 'idepunp-verano',
    question: '[IDEPUNP Verano - Economía]: Si ante una variación porcentual del precio de un bien del 10%, su cantidad demandada cae en 25%, su elasticidad precio de la demanda es:',
    options: ['Inelástica (Ep < 1)', 'Elástica (Ep > 1)', 'Perfectamente inelástica', 'Unitaria (Ep = 1)'],
    correctIndex: 1,
    explanation: 'Elasticidad precio = |%ΔQ / %ΔP| = 25% / 10% = 2,5. Al ser mayor que 1 (Ep > 1), la demanda se clasifica como elástica.',
    curiosityFact: 'Los bienes con muchos sustitutos cercanos (como marcas de refrescos) tienden a tener una demanda muy elástica.',
    difficulty: 'medio',
  },
  {
    id: 'ide-v-6',
    categoryId: 'idepunp-verano',
    question: '[IDEPUNP Verano - Álgebra]: Calcule el valor de E = 16^(1/2) + 27^(1/3) + 32^(1/5):',
    options: ['7', '8', '9', '10'],
    correctIndex: 2,
    explanation: '16^(1/2) = √16 = 4. 27^(1/3) = ∛27 = 3. 32^(1/5) = ⁵√32 = 2. Por tanto: 4 + 3 + 2 = 9.',
    curiosityFact: 'Los exponentes fraccionarios expresan raíces: a^(m/n) = ⁿ√(aᵐ).',
    difficulty: 'fácil',
  },

  // ===================== 14. EXAMEN DE ADMISIÓN MARZO =====================
  {
    id: 'adm-m-1',
    categoryId: 'admision-marzo',
    question: '[Admisión Marzo - Biología]: ¿Qué molécula actúa como el aceptor final de electrones en la cadena de transporte de electrones de la respiración celular aeróbica?',
    options: ['Glucosa', 'Oxígeno molecular (O₂)', 'NADP+', 'Dióxido de carbono (CO₂)'],
    correctIndex: 1,
    explanation: 'El oxígeno (O₂) es el aceptor final de electrones y protones H⁺, formándose agua metabólica (H₂O) como producto final.',
    curiosityFact: 'Si falta el oxígeno (asfixia o cianuro), la cadena respiratoria se detiene de golpe impidiendo la producción de ATP.',
    difficulty: 'fácil',
  },
  {
    id: 'adm-m-2',
    categoryId: 'admision-marzo',
    question: '[Admisión Marzo - Raz. Lógico]: Si formalizamos la proposición: "Ni Juan estudia en la biblioteca ni practica deportes en el campus", el operador principal es:',
    options: ['Disyunción inclusiva', 'Conjunción (Negación conjunta)', 'Condicional simple', 'Bicondicional'],
    correctIndex: 1,
    explanation: 'La estructura "Ni p ni q" expresa (~p ∧ ~q), es decir, la conjunción de dos negaciones o flecha de Peirce (p ↓ q).',
    curiosityFact: 'La flecha de Peirce (NOR) junto con la barra de Sheffer (NAND) son operadores funcionalmente completos capaces de generar todos los demás conectores lógicos.',
    difficulty: 'medio',
  },
  {
    id: 'adm-m-3',
    categoryId: 'admision-marzo',
    question: '[Admisión Marzo - Cívica]: ¿A quién corresponde la atribución constitucional de declarar la guerra y firmar la paz con la aprobación previa del Congreso?',
    options: [
      'Al Presidente del Consejo de Ministros',
      'Al Presidente de la República',
      'Al Ministro de Defensa',
      'Al Comandante General de las Fuerzas Armadas',
    ],
    correctIndex: 1,
    explanation: 'El Artículo 118 de la Constitución establece que el Presidente de la República, como Jefe de Estado y Jefe Supremo de las FFAA, declara la guerra y firma la paz previa autorización del Congreso.',
    curiosityFact: 'El Presidente no puede disolver el Congreso durante el último año de su mandato constitucional ni bajo estado de sitio.',
    difficulty: 'medio',
  },
  {
    id: 'adm-m-4',
    categoryId: 'admision-marzo',
    question: '[Admisión Marzo - Historia del Perú]: ¿Qué presidente peruano firmó en 1879 el Tratado de Ancón que puso fin al estado de guerra formal con Chile?',
    options: ['Mariano Ignacio Prado', 'Nicolás de Piérola', 'Miguel Iglesias', 'Andrés A. Cáceres'],
    correctIndex: 2,
    explanation: 'El general Miguel Iglesias estableció el "Gobierno Regenerador" en Cajamarca y firmó el Tratado de Ancón el 20 de octubre de 1883 cediendo a perpetuidad la provincia de Tarapacá.',
    curiosityFact: 'Este tratado dio paso al periodo de la Reconstrucción Nacional en la historia republicana del Perú.',
    difficulty: 'medio',
  },
  {
    id: 'adm-m-5',
    categoryId: 'admision-marzo',
    question: '[Admisión Marzo - Literatura]: ¿Cuál es la obra dramática en quechua de autor anónimo colonial que narra los amores prohibidos de un general inca y la princesa Cusi Coyllur?',
    options: ['El mito de Inkari', 'Ollantay', 'El dios Coniraya', 'Huasipungo'],
    correctIndex: 1,
    explanation: '"Ollantay" es el drama colonial más célebre de la literatura andina, dividido en tres actos y ambientado en la época de los incas Pachacútec y Túpac Yupanqui.',
    curiosityFact: 'El manuscrito más antiguo conocido fue hallado por el sacerdote Antonio Valdés en el siglo XVIII en Lares (Cusco).',
    difficulty: 'fácil',
  },
  {
    id: 'adm-m-6',
    categoryId: 'admision-marzo',
    question: '[Admisión Marzo - Raz. Matemático]: Una persona gasta la mitad de su dinero en alimentos y luego la tercera parte del resto en pasajes. Si todavía le quedan S/ 120, ¿cuánto dinero tenía al inicio?',
    options: ['S/ 240', 'S/ 360', 'S/ 480', 'S/ 600'],
    correctIndex: 1,
    explanation: 'Método del cangrejo o fracciones: Si gasta 1/2 le queda 1/2. Si luego gasta 1/3 le quedan los 2/3 de lo que tenía: (2/3) × (1/2) × Total = S/ 120 → (1/3) × Total = S/ 120 → Total = 120 × 3 = S/ 360.',
    curiosityFact: 'El método de operaciones inversas (cangrejo) permite resolver este tipo de problemas de atrás hacia adelante en pocos segundos.',
    difficulty: 'fácil',
  },

  // ===================== ULTIMA AMANECIDA FUL FIJAS - 1. RAZ. VERBAL (GOOGLE DRIVE) =====================
  {
      "id": "amanecida-rv-1",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°01: Una Laptop por Niño] De la lectura se infiere que las nuevas tecnologías:",
      "options": [
          "Solucionan los problemas educativos.",
          "Incrementan los sueldos.",
          "Mejoran la calidad educativa.",
          "Mejoran la calidad de vida.",
          "Se convierten en un inmejorable asistente para las clases."
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Mejoran la calidad educativa..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-2",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°01: Una Laptop por Niño] Una clase maestra por Internet es:",
      "options": [
          "indiferente",
          "gravitante",
          "ineficiente",
          "alucinante",
          "espantosa"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: gravitante.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-3",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°01: Una Laptop por Niño] Se debe combinar los contenidos de todo el mundo con:",
      "options": [
          "Programas extranjeros",
          "Programas existenciales",
          "Programas nacionales",
          "Programas sociales",
          "Programas universales"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Programas nacionales.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-4",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°01: Una Laptop por Niño] En  relación  al  programa  propuesto  por  el  Gobierno  Una Laptop por Niño, el autor está:",
      "options": [
          "De acuerdo.",
          "En desacuerdo.",
          "Absorto.",
          "Incrédulo.",
          "Preocupado."
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: De acuerdo..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-4",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°01: Una Laptop por Niño] Contenido de la novela peruana del siglo XXI. ➢ El orden correcto es:",
      "options": [
          "1-3-4-2",
          "3-2-1-4",
          "2-4-1-3",
          "3-1-2-4",
          "1-2-3-4"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 3-2-1-4.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-4",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°01: Una Laptop por Niño] Todas  ellas  son  homogéneas  y  sus  componentes  no  se alteran. ➢ El orden correcto es:",
      "options": [
          "3-1-2-4",
          "3-1-4-2",
          "3-4-1-2",
          "3-2-4-1",
          "3-2-1-4 ORDENAMIENTO DE ENUNCIADOS"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 3-4-1-2.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-5",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°01: Una Laptop por Niño] De la lectura se infiere que el docente:",
      "options": [
          "No desea capacitarse.",
          "Desea capacitarse.",
          "Es indiferente.",
          "No necesita capacitarse.",
          "Quiere aprender a usar las computadoras."
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Desea capacitarse..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-5",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°01: Una Laptop por Niño] No tienen las verrugas típicas de los sapos. ➢ El orden correcto es:",
      "options": [
          "2-1-4-3-5",
          "2-4-1-3-5",
          "5-1-4-3-2",
          "3-1-4-2-5",
          "4-1-2-3-5"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 2-1-4-3-5.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-5",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°01: Una Laptop por Niño] Se dirige a la sección de filosofía. ➢ El orden correcto es:",
      "options": [
          "5-3-1-4-2",
          "3-1-5-2-4",
          "3-1-5-4-2",
          "3-1-2-4-5",
          "3-5-1-2-4"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 3-1-5-4-2.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-5",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°01: Una Laptop por Niño] Novela de ambientes bonaerenses típicos. ➢ El orden correcto es:",
      "options": [
          "1-3-5-4-2",
          "1-2-3-4-5",
          "1-4-5-3-2",
          "1-3-5-2-4",
          "1-3-4-5-2"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 1-3-4-5-2.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-6",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°01: Una Laptop por Niño] El  Gobierno  pretende  vincular  al  estudiante  y  al  docente con:",
      "options": [
          "Las tecnologías tradicionales.",
          "Las técnicas de lectura.",
          "Las técnicas de comprensión.",
          "Las nuevas tecnologías.",
          "Las laptops modernas."
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Las nuevas tecnologías..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-7",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°02: El Sexto - José María Arguedas] En el texto, la expresión \"devoraban la esperanza con una lentitud implacable\" sugiere que:",
      "options": [
          "Los prisioneros mueren rápidamente de hambre.",
          "El  entorno  de  la  cárcel  consume  gradualmente  el optimismo de los reclusos.",
          "La estructura física de la prisión está en ruinas.",
          "El tiempo transcurre de forma acelerada dentro de la cárcel.",
          "La  libertad  es  un  objetivo  fácil  de  alcanzar  con paciencia. Texto Nº03 La  justicia  predictiva  es  una  herramienta  tecnológica innovadora  que  mejora  la  eficiencia  del  sistema  legal.  Sus algoritmos  procesan  grandes  volúmenes  de  datos  para identificar  patrones  delictivos  y  optimizar  la  asignación  de recursos  policiales.  Este  enfoque  permite  tomar  decisiones más rápidas y basadas en evidencia. La  justicia  predictiva  puede  reducir  el  sesgo  humano  en  la toma de decisiones legales. Los algoritmos, bien diseñados, son objetivos y consistentes, lo que garantiza un tratamiento más  equitativo  de  los  casos.  Con  las  debidas  regulaciones, esta  tecnología  puede  superar  las  limitaciones  del  juicio humano. La  implementación  de  sistemas  predictivos  contribuye  a  la prevención del delito. Identificar áreas o perfiles de alto riesgo ayuda  a  diseñar  políticas  de  seguridad  más  efectivas.  Al actuar  de  manera  anticipada,  se  pueden  evitar  crímenes  y proteger a las comunidades de manera proactiva."
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: El  entorno  de  la  cárcel  consume  gradualmente  el optimismo de los reclusos..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-8",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°02: El Sexto - José María Arguedas] Según  el  texto,  ¿cuál  de  las  siguientes  alternativas expone una ventaja de la justicia predictiva?",
      "options": [
          "Reduce las desigualdades sociales en el ámbito de la justicia teórico-práctica.",
          "Elimina  completamente  todo  tipo  de  errores  en  la toma de decisiones judiciales laborales.",
          "Permite  la  toma  de  decisiones  más  rápidas  sin necesidad  de  tener  evidencias  ni  supervisión humana.",
          "Mejora  la  eficiencia  del  sistema  legal  al  procesar grandes volúmenes de datos.",
          "Sustituye,  de  manera  efectiva,  a  los  jueces  y  a  los abogados en procesos legales."
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Mejora  la  eficiencia  del  sistema  legal  al  procesar grandes volúmenes de datos..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-9",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°02: El Sexto - José María Arguedas] Del texto podemos deducir:",
      "options": [
          "La simpatía es inferior a la amistad.",
          "La verdadera amistad tiene en el amor la fuente en que se sustenta.",
          "La amistad depende de la simpatía y el agrado que se siente al encontrarse para desarrollarse.",
          "La verdadera amistad tiene ciertas características y exigencias.",
          "Resaltar las virtudes y minimizar los defectos de un amigo son ejemplos de amistad."
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: La verdadera amistad tiene en el amor la fuente en que se sustenta..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-10",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°02: El Sexto - José María Arguedas] La enseñanza que nos trasmite el texto es:",
      "options": [
          "Hay que buscar buenos amigos.",
          "El conocimiento de un amigo y su aceptación con sus virtudes y defectos es lo más importante.",
          "Hay que valorar a los verdaderos amigos porque son escasos.",
          "Una verdadera amistad conlleva al amor romántico.",
          "Nadie  se  da  cuenta  de  lo  que  tiene  hasta  que  lo pierde, por eso hay que valorar a los amigos. ENUNCIADO EXCLUIDO"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: El conocimiento de un amigo y su aceptación con sus virtudes y defectos es lo más importante..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-11",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°02: El Sexto - José María Arguedas] (1) Tanto la novela de Vargas Llosa como la película de Lombardi  comparten el destino de la buena elaboración y el fértil simbolismo. (2) ¿Qué significa un prostíbulo flotante para servir  al  ejército,  mejor  organizado  que  éste?  (3)  Confluyen una de las instituciones más serias de un país como son sus fuerzas  armadas  y  el  trabajo  más  antiguo  del  mundo.  (4) Pantaleón Pantoja es el encargado de unir ambos universos. (5) Pantoja es un soldado y un gran administrador que funda el prostíbulo más absurdo de la historia de la literatura. ➢ El enunciado que se excluye es:",
      "options": [
          "1",
          "2",
          "3",
          "4",
          "5"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 5.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-12",
      "categoryId": "amanecida-raz-verbal",
      "question": "[Texto N°02: El Sexto - José María Arguedas] (1) Zeus era hermano y marido de Hera, con quien tuvo a Ares, Hebe y Hefesto,  aunque  algunas  fuentes  dicen  que Hera tuvo a Hefesto sola. (2) En la mitología griega, Hefesto es el dios de la forja y del fuego, así como de los herreros,  los artesanos,  los escultores,  los metales y la metalurgia.(3)  Zeus  es  famoso  por  sus  conquistas  de —entre muchas mujeres mortales las que — y ninfas, de destacan Sémele, Alcmena, Ío, Europa y Leda las que nacieron los fundadores de muchas dinastías helénicas. (4) La mitografía olímpica recoge incluso uniones  con  las  diosas Leto, Deméter, Dione y Maya.  (5) Muchos  mitos  muestran  a  una  Hera  muy  celosa  de  estas conquistas  amorosas,  y  enemiga  sistemática  de  todas  las amantes de Zeus y de los hijos que tenían con él. ➢ El enunciado que se excluye es:",
      "options": [
          "1",
          "2",
          "3",
          "4",
          "5 detengas\""
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 1.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-13",
      "categoryId": "amanecida-raz-verbal",
      "question": "(1) El viejo y el mar es una novela corta escrita por Ernest Hemingway en 1951 en Cabo  Blanco y  publicada  en 1952. (2) Era un viejo que pescaba solo en un bote en la corriente del Golfo y hacía ochenta y cuatro días que no cogía un pez. (3)  Fue  su  último  trabajo  de  ficción  importante  publicado  en vida  y  posiblemente  su  obra  más  famosa.  (4)  Aunque  la novela ha sido objeto de numerosas críticas, es considerada como  uno  de  los  trabajos  de  ficción  más  destacados  del siglo ,  reafirmando  el  valor  literario  de  la  obra  de XX Hemingway.  (5)  La  novela  ha  sido  llevada  al  cine  en numerosas ocasiones siendo la adaptación de 1958 protagonizada  por Spencer  Tracy una  de  las  más populares y conocidas. ➢ El enunciado que se excluye es:",
      "options": [
          "1",
          "2",
          "3",
          "4",
          "5"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 2.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-14",
      "categoryId": "amanecida-raz-verbal",
      "question": "(1) Metis, en la religión y mitología griega antigua, era una ninfa  mítica  de  Oceanid,  una  de  las  hijas  de  los  titanes Océano  y Tetis. (2) Metis se destaca por ayudar a un joven Zeus a liberar a sus hermanos del vientre de su padre Cronos proporcionándole  una  droga  especial.  (3)  Después  de  que Zeus se convirtió en rey, él y Metis se casaron y ella le dio una hija, Atenea, la diosa de la sabiduría. (4) Después de escuchar una profecía donde decía que luego de que Metis diera a luz a Atenea, ella tendría un hijo más poderoso que Zeus que lo derrocaría,  Zeus  engañó  a  Metis,  que  aún  estaba embarazada, y se la tragó entera . (5) Metis fue quien  le dio a Zeus una poción para que cronos vomitara a sus hermanos y se convirtió en la esposa de Zeus. ➢ El enunciado que se excluye es:",
      "options": [
          "1",
          "2",
          "3",
          "4",
          "5"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 5.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-15",
      "categoryId": "amanecida-raz-verbal",
      "question": "(1)  Erase  un  pequeño  ratoncito  que  vivía  muy  feliz  y tranquilo  dando  vueltas  por  el  bosque.  (2)  Un  bosque bellísimo con muchos árboles y flores de todos los colores y en la noche se refleja la luna en las aguas cristalinas del lago. (3) Podía correr de acá para allá con total libertad, y hasta los gatos que de vez en cuando pasaban por allí le respetaban. (4) Pero dicha tranquilidad quedó rota por completo el día en que el ratón se topó con un extraño animal que jamás había visto. (5) El ratón no sabía que se había encontrado con un oso  hormiguero,  que  a  diferencia  de  él,  no  parecía  muy tranquilo, sino con muchas ganas de actividad y de reírse un poco. ➢ El enunciado que se excluye es:",
      "options": [
          "1",
          "2",
          "3",
          "4",
          "5 TÉRMINO EXCLUÍDO"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 2.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-16",
      "categoryId": "amanecida-raz-verbal",
      "question": "Ansiedad",
      "options": [
          "regocijo",
          "ansia",
          "angustia",
          "inquietud",
          "preocupación"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: regocijo.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-17",
      "categoryId": "amanecida-raz-verbal",
      "question": "Abalizar",
      "options": [
          "señalar",
          "esconder",
          "amojonar",
          "marcar",
          "indicar"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: esconder.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-18",
      "categoryId": "amanecida-raz-verbal",
      "question": "Sepulcro",
      "options": [
          "panteón",
          "cementerio",
          "epitafio",
          "sepultura",
          "necrópolis"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: epitafio.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-19",
      "categoryId": "amanecida-raz-verbal",
      "question": "Arrogante",
      "options": [
          "soberbio",
          "altanero",
          "vanidad",
          "orgulloso",
          "altivo"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: vanidad.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-20",
      "categoryId": "amanecida-raz-verbal",
      "question": "Cortar",
      "options": [
          "dividir",
          "partir",
          "separar",
          "amputar",
          "infringir SINÓNIMOS LEXICALES"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: infringir SINÓNIMOS LEXICALES.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-21",
      "categoryId": "amanecida-raz-verbal",
      "question": "Vaho",
      "options": [
          "ilusión",
          "mentira",
          "niebla",
          "noche",
          "oscuridad"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: niebla.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-22",
      "categoryId": "amanecida-raz-verbal",
      "question": "Ínfulas",
      "options": [
          "satisfacción",
          "deleite",
          "orondo",
          "supuesto",
          "vanidad"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: vanidad.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-23",
      "categoryId": "amanecida-raz-verbal",
      "question": "Laxo",
      "options": [
          "debilitar",
          "hueco",
          "poroso",
          "esponjoso",
          "flojo"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: flojo.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-24",
      "categoryId": "amanecida-raz-verbal",
      "question": "Boceto",
      "options": [
          "gráfico",
          "manuscrito",
          "proyecto",
          "planear",
          "dibujo"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: proyecto.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-25",
      "categoryId": "amanecida-raz-verbal",
      "question": "Convicción",
      "options": [
          "supuesto",
          "precisión",
          "cuidado",
          "premonición",
          "certidumbre SINÓNIMOS CONTEXTUALES"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: certidumbre SINÓNIMOS CONTEXTUALES.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-26",
      "categoryId": "amanecida-raz-verbal",
      "question": "El  consejo  que  le  di  fue  con  la  mejor  intención  por  eso deploro que lo haya tomado tan mal.",
      "options": [
          "lamento",
          "saludo",
          "suspiro",
          "prefiero",
          "felicito"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: lamento.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-27",
      "categoryId": "amanecida-raz-verbal",
      "question": "Cada libro representa un universo arcano.",
      "options": [
          "histórico",
          "lejano",
          "misterioso",
          "escabroso",
          "viejo"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: misterioso.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-28",
      "categoryId": "amanecida-raz-verbal",
      "question": "La policía multó al chofer porque no tenía sus papeles en regla.",
      "options": [
          "credenciales",
          "brevetes",
          "escritos",
          "permisos",
          "documentos"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: documentos.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-29",
      "categoryId": "amanecida-raz-verbal",
      "question": "Esta casa no se ajusta a mis necesidades, por ejemplo, le falta un ambiente para mi taller.",
      "options": [
          "conforma",
          "arregla",
          "prepara",
          "adapta",
          "dispone"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: adapta.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-30",
      "categoryId": "amanecida-raz-verbal",
      "question": "La  empresa  debe  resarcir  a  todas  las  víctimas  del accidente.",
      "options": [
          "indemnizar",
          "reparación",
          "remediar",
          "enmendar",
          "gratificar detengas\""
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: indemnizar.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-31",
      "categoryId": "amanecida-raz-verbal",
      "question": "Errar",
      "options": [
          "aprobar",
          "atinar",
          "ganar",
          "aplaudir",
          "confiar"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: atinar.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-32",
      "categoryId": "amanecida-raz-verbal",
      "question": "Impune",
      "options": [
          "puntual",
          "castigado",
          "pundonoroso",
          "intratable",
          "amordazado"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: castigado.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-33",
      "categoryId": "amanecida-raz-verbal",
      "question": "Diseminar",
      "options": [
          "esparcir",
          "reunir",
          "sembrar",
          "concentrado",
          "retornar"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: reunir.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-34",
      "categoryId": "amanecida-raz-verbal",
      "question": "Apetecible",
      "options": [
          "repugnante",
          "sucio",
          "horripilante",
          "estrafalario",
          "inapetente"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: repugnante.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-35",
      "categoryId": "amanecida-raz-verbal",
      "question": "Popular",
      "options": [
          "rebelde",
          "desconocido",
          "incógnito",
          "repudiable",
          "rechazar ANTÓNIMOS CONTEXTUALES"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: desconocido.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-36",
      "categoryId": "amanecida-raz-verbal",
      "question": "El brillo del diamante que puedes cargar en el bolsillo no acrecentará en absoluto el brillo que falte en tus ojos.",
      "options": [
          "atentará",
          "encogerá",
          "disminuirá",
          "acortará",
          "contraerá"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: disminuirá.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-37",
      "categoryId": "amanecida-raz-verbal",
      "question": "La vanidad es un veneno, una enfermedad.",
      "options": [
          "específico",
          "antídoto",
          "virtud",
          "justicia",
          "medicina"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: virtud.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-38",
      "categoryId": "amanecida-raz-verbal",
      "question": "La  lógica  clásica  dio  especial  atención  al  género  y  a  la especie",
      "options": [
          "descortesía",
          "indiferencia",
          "pereza",
          "desprecio",
          "flojera"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: indiferencia.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-39",
      "categoryId": "amanecida-raz-verbal",
      "question": "La  principal  preocupación  científica  de  Aristóteles  fue  la clasificación zoológica y botánica.",
      "options": [
          "desgano",
          "desánimo",
          "desidia",
          "fastidio",
          "inapetencia"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: desidia.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-40",
      "categoryId": "amanecida-raz-verbal",
      "question": "Necesitamos un auxiliar de oficina para meter los datos en el ordenador.",
      "options": [
          "extraer",
          "borrar",
          "sacar",
          "anular",
          "destruir ANALOGÍAS"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: borrar.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-41",
      "categoryId": "amanecida-raz-verbal",
      "question": "Progresar : Retroceder",
      "options": [
          "arreglar : desordenar",
          "limpiar : manchar",
          "comer : ayunar",
          "avanzar : replegarse",
          "ofender : elogiar"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: avanzar : replegarse.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-42",
      "categoryId": "amanecida-raz-verbal",
      "question": "Armonía : Tranquilidad",
      "options": [
          "discordia : caos",
          "incomprensión: separación",
          "divorcio : infidelidad",
          "cobardía : paz",
          "alegría : victoria"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: incomprensión: separación.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-43",
      "categoryId": "amanecida-raz-verbal",
      "question": "Fingido : Sincero",
      "options": [
          "amedrentar : envalentonar",
          "cuidar : descuidar",
          "infinito : acabable",
          "amigo : enemigo",
          "día : noche"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: infinito : acabable.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-44",
      "categoryId": "amanecida-raz-verbal",
      "question": "Indemne : Ileso",
      "options": [
          "resuelto : decidido",
          "exonerado : exiguo",
          "absuelto : inculpado",
          "alegre : risueño",
          "golpe : hematoma"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: resuelto : decidido.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-45",
      "categoryId": "amanecida-raz-verbal",
      "question": "Ascender : Subir",
      "options": [
          "aspirar : anhelar",
          "reparar : restaurar",
          "ordenar : organizar",
          "trepar : escalar",
          "bajar : arriar"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: trepar : escalar.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-46",
      "categoryId": "amanecida-raz-verbal",
      "question": "Juventud : Vida",
      "options": [
          "alba : día",
          "progreso : provincia",
          "primavera : año",
          "apogeo : cultura",
          "metro : espacio"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: primavera : año.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-47",
      "categoryId": "amanecida-raz-verbal",
      "question": "Óxido : Humedad",
      "options": [
          "caer : resbalar",
          "pánico : temblor",
          "matrimonio : amor",
          "golpe : boxeador",
          "desolación : huracán"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: desolación : huracán.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-48",
      "categoryId": "amanecida-raz-verbal",
      "question": "Escultura : Arte",
      "options": [
          "filosofía : ciencia",
          "pesca : deporte",
          "asado : comida",
          "diccionario : libro",
          "geometría : ciencia"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: geometría : ciencia.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-49",
      "categoryId": "amanecida-raz-verbal",
      "question": "Follaje : Hojas",
      "options": [
          "hormigueo : hormigas",
          "trigal               : trigos",
          "pedregal : piedras",
          "pavada : pavos",
          "perra : perras detengas\""
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: pavada : pavos.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-50",
      "categoryId": "amanecida-raz-verbal",
      "question": "Químico : Matraz",
      "options": [
          "Abeja : polen",
          "estilista : pelo",
          "carpintero : madera",
          "traductor : diccionario",
          "nadador : agua SIGNIFICADO CONTEXTUAL"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: traductor : diccionario.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-51",
      "categoryId": "amanecida-raz-verbal",
      "question": "El  Sexto es  una  novela  corta  que narra  la  experiencia carcelaria  de  Arguedas  entre  1937  y  1938 en  uno  de  los penales más conocidos de la capital. ➢ El significado contextual de la palabra subrayada es:",
      "options": [
          "Persona que se dedica a narrar o escribir cuentos.",
          "Contar una historia o suceso, real o imaginario, oralmente, por escrito o de cualquier otra manera.",
          "Conjunto  de  hazañas  y  hechos  memorables  de  una persona o un pueblo.",
          "Poema narrativo extenso de tono grandilocuente que relata hechos  heroicos  realizados  por  personajes  históricos  o legendarios.",
          "Actividad que se realiza con mucho esfuerzo y tras vencer numerosas dificultades."
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Contar una historia o suceso, real o imaginario, oralmente, por escrito o de cualquier otra manera..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-52",
      "categoryId": "amanecida-raz-verbal",
      "question": "El gerente de la constructora es un hombre bastante serio, por ello todos los proveedores prefieren firmar contratos con él antes que con otros directivos del sector. ➢ El significado contextual de la palabra subrayada es:",
      "options": [
          "Dicho  de  una  persona:  Que  no  sonríe,  que  muestra  un semblante adusto o severo.",
          "Persona que demuestra frialdad, distancia y hostilidad en el trato social.",
          "Formal,  de  fiar  y  que  cumple  con  sus  compromisos  o promesas de manera recta.",
          "Asunto que reviste extrema gravedad, peligro o importancia para la sociedad.",
          "Individuo que actúa de manera rígida, sin aceptar opiniones de los demás."
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Formal,  de  fiar  y  que  cumple  con  sus  compromisos  o promesas de manera recta..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-53",
      "categoryId": "amanecida-raz-verbal",
      "question": "A pesar de los constantes ataques informáticos que sufrió el  sistema  de  la  universidad,  la  base  de  datos  se  mantuvo saludable y no se perdió ninguna matrícula. ➢ El significado contextual de la palabra subrayada es:",
      "options": [
          "Estado orgánico en el que un ser vivo ejerce normalmente todas sus funciones.",
          "Que  sirve  para  conservar  o  restituir  el  bienestar  físico  o mental del cuerpo.",
          "Que goza de buena salud y no padece ninguna enfermedad contagiosa.",
          "Libre de daños, íntegro, seguro o en óptimas condiciones de funcionamiento.",
          "Que produce un efecto favorable para el desarrollo moral o espiritual."
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Libre de daños, íntegro, seguro o en óptimas condiciones de funcionamiento..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-54",
      "categoryId": "amanecida-raz-verbal",
      "question": "Tras  debatir  durante  tres  horas  en  la  asamblea,  los estudiantes  llegaron  a  un  acuerdo  salomónico  que  dejó satisfechas a ambas posturas en disputa. ➢ El significado contextual de la palabra subrayada es: Perteneciente o relativo al rey Salomón o a su época histórica.",
      "options": [
          "Decisión justa, equitativa y que busca una salida intermedia entre dos partes.",
          "Postura impositiva que se adopta utilizando la fuerza o el poder político."
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Decisión justa, equitativa y que busca una salida intermedia entre dos partes..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-55",
      "categoryId": "amanecida-raz-verbal",
      "question": "El joven postulante no pudo responder la última pregunta de física porque la formulación del problema era demasiado oscura. ➢ El significado contextual de la palabra subrayada es:",
      "options": [
          "Que carece de luz o claridad física, por lo que no se puede ver.",
          "Espacio  que  está  en  penumbras  y  genera  temor  en  las personas.",
          "Color  que  se  acerca  al  negro  o  que  tiene  muy  poca intensidad cromática.",
          "Confusa,  difícil  de  comprender  o  que  carece  de  claridad conceptual.",
          "Situación peligrosa o sospechosa que está al margen de la ley."
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Confusa,  difícil  de  comprender  o  que  carece  de  claridad conceptual..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-56",
      "categoryId": "amanecida-raz-verbal",
      "question": "La  paciencia  es  un  insumo  capital  si  se  desea  culminar con éxito una investigación científica de gran envergadura. ➢ El significado contextual de la palabra subrayada es:",
      "options": [
          "Población principal y cabeza de un Estado o provincia.",
          "Factor  de  producción  constituido  por  inmuebles, maquinaria o instalaciones.",
          "Conjunto  de  activos  y  bienes  económicos  destinados  a producir riqueza.",
          "Vital, principal, crucial o de máxima importancia para un fin.",
          "Error  grave  o  imperdonable  que  arruina  un  proceso determinado."
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Vital, principal, crucial o de máxima importancia para un fin..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-57",
      "categoryId": "amanecida-raz-verbal",
      "question": "El  veterano  profesor  sabía  cómo  sazonar  sus  clases  de historia  con  anécdotas  curiosas  para  mantener  despierto  el interés de los jóvenes. ➢ El significado contextual de la palabra subrayada es:",
      "options": [
          "Agregar sal, especias u otros condimentos a los alimentos para darles sabor.",
          "Madurar las frutas o las plantas por la acción del sol y el tiempo.",
          "Hacer  algo  más  atractivo,  ameno,  vivo  o  interesante mediante ciertos elementos.",
          "Modificar el tono de la voz para que suene más autoritario y severo.",
          "Introducir datos falsos en un discurso con el fin de engañar a la audiencia."
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Hacer  algo  más  atractivo,  ameno,  vivo  o  interesante mediante ciertos elementos..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-58",
      "categoryId": "amanecida-raz-verbal",
      "question": "Al estudiante de letras le costó mucho digerir las densas teorías filosóficas de los autores existencialistas del siglo XX. ➢ El significado contextual de la palabra subrayada es:",
      "options": [
          "Convertir  en  el  aparato  digestivo  los  alimentos  en sustancias asimilables.",
          "Distribuir  o  repartir  de  manera  ordenada  un  conjunto  de tareas complejas.",
          "Soportar con paciencia un insulto, una desgracia o un revés de la fortuna.",
          "Comprender,  asimilar  o  procesar  intelectualmente conceptos de gran complejidad.",
          "Memorizar de forma mecánica y repetitiva un texto para un examen. detengas\""
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Comprender,  asimilar  o  procesar  intelectualmente conceptos de gran complejidad..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-59",
      "categoryId": "amanecida-raz-verbal",
      "question": "En la actualidad, se hace evidente el divorcio que existe entre los discursos de los políticos y las necesidades reales de los ciudadanos de a pie. ➢ El significado contextual de la palabra subrayada es:",
      "options": [
          "Disolución legal de un matrimonio que deja a los cónyuges libres para casarse de nuevo.",
          "Separación,  distanciamiento  o  falta  de  sintonía  entre  dos ideas, posturas o realidades.",
          "Conflicto violento que surge entre dos grupos que compiten por el poder.",
          "Proceso judicial mediante el cual se divide la propiedad de un terreno.",
          "Acuerdo mutuo para finalizar un contrato laboral sin pagar indemnización."
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Separación,  distanciamiento  o  falta  de  sintonía  entre  dos ideas, posturas o realidades..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-60",
      "categoryId": "amanecida-raz-verbal",
      "question": "Tras las rejas, el nerviosismo del sospechoso era patente; le temblaban las manos cada vez que la policía le formulaba una pregunta sobre el crimen. ➢ El significado contextual de la palabra subrayada es:",
      "options": [
          "Cédula  o  documento  oficial  que  garantiza  los  derechos exclusivos sobre un invento.",
          "Título  que  autoriza  a  un  barco  para  navegar  de  manera legal por aguas internacionales.",
          "Claro,  evidente,  visible  o  que  se  puede  percibir  con  total claridad.",
          "Oculto, disimulado o que se mantiene en secreto para no ser descubierto.",
          "Estado  de  alteración  mental  provocado  por  el  encierro prolongado. CONECTORES LÓGICOS"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Claro,  evidente,  visible  o  que  se  puede  percibir  con  total claridad..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-61",
      "categoryId": "amanecida-raz-verbal",
      "question": "La Gioconda o Mona Lisa, es una célebre obra pictórica al óleo de Leonardo da Vinci, creada en su natal Florencia entre los  años  1503  y  1506,  posiblemente  continuando  hasta aproximadamente 1515 o 1517, ________________________  esta  fecha  de  conclusión  tan imprecisa es objeto de debate. ➢ El conector lógico correcto es:",
      "options": [
          "porque",
          "es decir",
          "además",
          "aunque",
          "después"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: aunque.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-62",
      "categoryId": "amanecida-raz-verbal",
      "question": "Una  paráfrasis,  coloquialmente  parafraseo,  puede  dar como resultado un mensaje completamente nuevo ___________________  diferente  al  original  en  lo  que respecta  a  la  forma,  ___________________  es  importante que el sentido sea conservado y transmitido correctamente. ➢ El conector lógico correcto es:",
      "options": [
          "mientras - o",
          "y-pero",
          "naturalmente - también",
          "entonces - ya que",
          "por lo tanto - finalmente"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: y-pero.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-63",
      "categoryId": "amanecida-raz-verbal",
      "question": "La  pirámide  de  Snefru  se  ubica  a  40  kilómetros  de  la ciudad de El Cairo. Se distingue por tener un cambio abrupto de  inclinación  en  la  mitad  superior  de  su  cuerpo. ___________________________  que  es  llamada  también \"pirámide acodada\". ➢ El conector lógico correcto es:",
      "options": [
          "En otras palabras",
          "No obstante",
          "Asimismo",
          "Por esa razón",
          "Incluso"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: Por esa razón.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-64",
      "categoryId": "amanecida-raz-verbal",
      "question": "La  palabra  \"magia\"  es  usada  para  traducir  el  término egipcio heka, que quiere decir, como James P. Allen lo pone, \"la  habilidad  para  hacer  que  sucedan  cosas  por  medios indirectos\", __________________, la magia estaba estrechamente asociada con el sacerdocio, __________________________  las  bibliotecas  contenían numerosos textos mágicos. _________________  el  gran  conocimiento  mágico  estaba adscrito  a  los  sacerdotes  lectores  que  estudiaban  estos textos. ➢ El conector lógico correcto es: – y - Mientras",
      "options": [
          "pues",
          "es decir - antes- Por ejemplo",
          "además debido a que- Por lo tanto",
          "entonces - sin embargo - En otras palabras",
          "no obstante - o - Además"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: además debido a que- Por lo tanto.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-65",
      "categoryId": "amanecida-raz-verbal",
      "question": "La fuerza de gravedad mantiene la atmósfera adherida a la tierra, gracias a lo cual podemos respirar ______________ puede también traer muerte y destrucción: ______________ puede precipitar a tierra un avión averiado. ➢ Los conectores lógicos correctos son: – y",
      "options": [
          "tampoco",
          "no obstante - es decir",
          "sin embargo - por ejemplo",
          "pero - por lo cual",
          "además - porque"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: sin embargo - por ejemplo.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-66",
      "categoryId": "amanecida-raz-verbal",
      "question": "Mientras vivió aquel poeta, nunca dejó que publicaran sus obras  _______________  creía  que  su  época  no  lograría entenderlo.  _________________  su  gran  esfuerzo  no  sería valorizado. ➢ Los conectores lógicos correctos son:",
      "options": [
          "ya que - sin embargo",
          "porque - en consecuencia",
          "puesto que - aunque – y por consiguiente",
          "pero",
          "además - no obstante"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: porque - en consecuencia.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-67",
      "categoryId": "amanecida-raz-verbal",
      "question": "El  sistema  de  las  Naciones  Unidas,  dijo  el  orador,  debe ser desarrollado y revisado _________________ es difícil de superar  _____________  por  el  momento,  este  es  el  único sistema del que disponemos. ➢ Los conectores lógicos correctos son: – pero",
      "options": [
          "no obstante",
          "en tanto - y",
          "en cambio - porque",
          "a pesar de que - sin embargo – mas",
          "porque detengas\""
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: a pesar de que - sin embargo – mas.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-68",
      "categoryId": "amanecida-raz-verbal",
      "question": "Le gusta leer ____________ escribir _____________ no lo  hace  con  mucha  frecuencia  _______________  si  con mucha calidad. ➢ Los conectores lógicos correctos son: – pero - aunque",
      "options": [
          "y",
          "o - no obstante - debido a que – empero - pese a que",
          "ni",
          "porque - ergo - mientras",
          "y - por eso - en consecuencia"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: y.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-69",
      "categoryId": "amanecida-raz-verbal",
      "question": "En los Andes solo algunos ríos alcanzan a llegar al mar, ________________  la  mayoría  terminan  siendo  sólo quebradas secas _________________ las aguas se pierden a medio camino. ➢ Los conectores lógicos correctos son:",
      "options": [
          "no obstante - por lo cual",
          "pues - debido a que – pero",
          "y",
          "entonces - si",
          "es decir - sin embargo"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: pues - debido a que – pero.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-70",
      "categoryId": "amanecida-raz-verbal",
      "question": "Es  cierto  que  no  vine  a  clases  ______________  estaba enfermo  ____________________,  _______________  es cierto que estoy listo para el examen ➢ Los conectores lógicos correctos son:",
      "options": [
          "puesto que - pero - también",
          "ya que - por lo tanto - luego",
          "aunque - sin embargo - además",
          "a pesar de que - y - por eso",
          "dado que - no obstante - incluso PLAN DE REDACCIÓN"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: puesto que - pero - también.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-76",
      "categoryId": "amanecida-raz-verbal",
      "question": "Amor a mi patria (1) Algún día, también, mi prole lo hará con mis restos, es que amo a mi patria por la cual estoy dispuesto a ofrendar la vida. (2) Bajo su superficie he inhumado los restos de mi padre a quien prometí seguir sus consejos y alcanzar mis sueños. (3) Entonces,  aunque  ya  no  mi  corazón,  mi  alma  seguirá sintiendo  esta  pasión  inmensa  que  consiste  en  ser orgullosamente  peruano.  (4)  También  en  él  se  han desarrollado  los  eventos  sociales  que  condicionaron  la  vida de  mis  abuelos  y  la  de  mis  padres.  (5)  He  nacido  sobre  un suelo cuya superficie está regada por la sangre de héroes y el sudor de mis ancestros. ➢ El orden correcto de los enunciados es:",
      "options": [
          "1-4-2-5-3",
          "5-3-4-1-2",
          "5-4-2-3-1",
          "5-4-2-1-3",
          "1-4-2-3-5 detengas\""
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 5-4-2-1-3.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-77",
      "categoryId": "amanecida-raz-verbal",
      "question": "Los océanos (1) La agitación de sus aguas se debe a la influencia de los rayos  lunares  (2)  También  las  tormentas  influyen  sobre  las mismas,  produciendo  grandes  olas  que  pueden  provocar desastres.  (3)  Pues  las  dos  terceras  partes  del  globo  le pertenecen, siendo grandes fuentes de recursos alimenticios y  minerales  aún  no  explotados  por  el  hombre.  (4)  Por  ello, Ilamar  Tierra  a  nuestro  planeta  es  un  decir,  pues  sólo  la tercera  parte  no  es  líquida.  (5)  Los  océanos  son  grandes masas  de  agua  que  constituyen  la  última  esperanza  de  la supervivencia para la especie humana. ➢ El orden correcto de los enunciados es:",
      "options": [
          "5-3-2-1-4",
          "2-1-3-4-5",
          "5-3-4-1-2",
          "2-1-3-5-4",
          "1-2-3-5-4"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 5-3-4-1-2.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-78",
      "categoryId": "amanecida-raz-verbal",
      "question": "El fin de los valores (1) Todo hecho que resulte contrario al bien social obstruye a los valores y detiene al perfeccionamiento. (2) La perfección para  la  ciudad  son  los  valores  de  sus  habitantes.  (3)  La sabiduría  lo  es  para  el  alma  y  la  virtud  es  el  valor  para  la acción. (4) Por lo tanto, es preciso honrar con alabanzas todo lo bueno, por permitirnos evolucionar. (5) Así, es fácil percibir que  los  valores  son  fuerzas  Inherentes  a  nuestra  evolución cultural. ➢ El orden correcto de los enunciados es:",
      "options": [
          "2-3-1-5-4",
          "3-5-2-4-1",
          "2-3-5-1-4",
          "1-2-4-3-5",
          "1-2-5-4-3"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 2-3-1-5-4.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-79",
      "categoryId": "amanecida-raz-verbal",
      "question": "La hipocresía (1) En definitiva, se puede afirmar que es falta de virtud y de coraje  para  asumir  la  responsabilidad,  o  aceptar  las circunstancias. (2) Hace, también, enmudecer los escrúpulos en los hombres incapaces de resistir la tentación del mal (3) Los  hipócritas  viven  sin  sueños,  ocultando  sus  intenciones, enmascarando  sus  sentimientos,  ignorando  la  virtud.  (4)  De allí  que  experimentamos  rabia  ante  su  presencia  y  nauseas ante su proximidad. (5) La hipocresía es el arte de amordazar la dignidad y de arrastrarla a lo más bajo. ➢ El orden correcto de los enunciados es:",
      "options": [
          "5-2-1-3-4",
          "3-5-1-4-2",
          "3-5-2-4-1",
          "4-5-1-3-2",
          "5-2-1-4-3 COMPLEMETAMIENTO DE TEXTOS"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: 5-2-1-3-4.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-80",
      "categoryId": "amanecida-raz-verbal",
      "question": "El  dengue  es  una  enfermedad  transmitida  mediante  la ______________________ de un mosquito infectado. El tipo de  mosquito  que  comúnmente  ______________________ esta enfermedad es el Aedes aegypti. – enlaza",
      "options": [
          "Mordedura – envía",
          "pinchazo – trasmite",
          "picadura – instruye",
          "aguijonazo – une",
          "mordisco"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: picadura – instruye.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-81",
      "categoryId": "amanecida-raz-verbal",
      "question": "La calabaza es un alimento bajo en calorías, alto en fibra, agua  y  vitaminas,  por  lo  que  se  usa  en  dietas  para __________________ y para mantener un peso _____________________ – saludable – estable",
      "options": [
          "adelgazar",
          "ajustar – ceñido – fuerte",
          "bajar",
          "moldear – ajustado",
          "debilitar"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: adelgazar.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-82",
      "categoryId": "amanecida-raz-verbal",
      "question": "Las semillas de sésamo ________________ una elevada cantidad de proteínas, además de ser ________________ en metionina, un aminoácido esencial. – excelentes",
      "options": [
          "tienen – exquisitas",
          "necesitan – altas",
          "empiezan – ricas",
          "poseen – bajas",
          "inician"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: poseen – bajas.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-83",
      "categoryId": "amanecida-raz-verbal",
      "question": "No  estamos  haciendo  nada  _________________,  ni cometiendo  ningún  crimen,  así  que  no  hay  razón  para _________________. – callamos",
      "options": [
          "a veces",
          "menos - científicos – datos – números",
          "siempre",
          "más – demás",
          "frecuentemente"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: siempre.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-85",
      "categoryId": "amanecida-raz-verbal",
      "question": "Había  un  paseo  en  coche  de  caballos  y  el __________________  de  seguridad  de  Fidel  esperaba  un atentado. Fidel me llamó  y me dijo, si tu vienes conmigo no nos __________________. Y yo subí. – asesinarán",
      "options": [
          "aparato – ultimarán",
          "comando – dispararán",
          "equipo – acabarán",
          "grupo – matarán",
          "conjunto"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: equipo – acabarán.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-86",
      "categoryId": "amanecida-raz-verbal",
      "question": "Muchas personas no se dan cuenta del ________________  que  hacen  cuando  ________________ la apariencia de los demás. – juzgan",
      "options": [
          "efecto – sospechan",
          "perjuicio – miran",
          "desprecio – critican",
          "daño – comentan",
          "éxito"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: daño – comentan.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-87",
      "categoryId": "amanecida-raz-verbal",
      "question": "El silencio es _______________ más eficaz para no dar mayor  espacio  a  malos  entendidos  cuando  hay  mala ________________ – energía – envidia",
      "options": [
          "el remedio",
          "el trámite – sangre – voluntad",
          "la defensa",
          "el arma – rivalidad",
          "el recurso detengas\""
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: el arma – rivalidad.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-88",
      "categoryId": "amanecida-raz-verbal",
      "question": "Mi padre es una persona muy _________________, habla poco, pero cuando lo hace dice las cosas _____________________. – tranquilas – hermosas",
      "options": [
          "seria",
          "amable – obligadas – necesarias",
          "inteligente",
          "alegre – justas",
          "correcta"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: correcta.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-89",
      "categoryId": "amanecida-raz-verbal",
      "question": "De los ____________ puros nacen los ________________ limpios. – campesinos – consejos",
      "options": [
          "campos",
          "padres – santos – ríos",
          "creyentes",
          "manantiales – sacerdotes",
          "ideales"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: manantiales – sacerdotes.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-rv-90",
      "categoryId": "amanecida-raz-verbal",
      "question": "El  ________  es  una  ________  lingüística  que corresponde  al  texto  escrito;  presenta  un  conjunto  de características ________.",
      "options": [
          "texto - forma - invariables",
          "fragmento - parte - gramaticales",
          "prólogo - introducción - informales",
          "código - morfología - específicas",
          "párrafo - unidad - formales ¡Última Amanecida! No Olvides Por qué Empezaste,Ese Sueño que Llevas Dentro Vale cada Desvelo.Cada Lágrima Y Cada Esfuerzo. Estás más cerca De Lo que Crees.Vamos que ingresamos!."
      ],
      "correctIndex": 4,
      "explanation": "Respuesta clave oficial de Razonamiento Verbal: párrafo - unidad - formales ¡Última Amanecida! No Olvides Por qué Empezaste,Ese Sueño que Llevas Dentro Vale cada Desvelo.Cada Lágrima Y Cada Esfuerzo. Estás más cerca De Lo que Crees.Vamos que ingresamos!..",
      "difficulty": "medio"
  },

  // ===================== ULTIMA AMANECIDA FUL FIJAS - 2. GEOGRAFÍA (GOOGLE DRIVE) =====================
  {
      "id": "amanecida-geo-1",
      "categoryId": "amanecida-geografia",
      "question": "Realizó un cálculo de distancia entre tierra y sol:",
      "options": [
          "Aristarco de Samos",
          "Karl Ritter",
          "Galileo Galilei",
          "Hecateo de Mileto",
          "Nicolás Copérnico"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Aristarco de Samos.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-2",
      "categoryId": "amanecida-geografia",
      "question": "Localizar consiste en ubicar el lugar exacto donde se produjo  el  fenómeno  geográfico,  para  ello  debe relacionar aspectos espaciales como:",
      "options": [
          "Latitud, longitud, altitud",
          "Longitud, cenit, latitud",
          "Altitud, latitud, límites",
          "Paisaje, longitud, latitud",
          "Límites, superficie, radio"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Latitud, longitud, altitud.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-3",
      "categoryId": "amanecida-geografia",
      "question": "Es un hecho geográfico de origen biológico:",
      "options": [
          "El paso de Porculla",
          "El bosque de Cerro Negro en Ayabaca",
          "La playa de Yacila",
          "El parque Kurt Beer",
          "El desierto de Sechura"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: El bosque de Cerro Negro en Ayabaca.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-4",
      "categoryId": "amanecida-geografia",
      "question": "Estudio  del  suelo  en  sí  mismo  y  en  sus  relaciones con el entorno:",
      "options": [
          "Geomorfología",
          "Meteorología",
          "Potamología",
          "Climatología",
          "Edafología"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Edafología.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-5",
      "categoryId": "amanecida-geografia",
      "question": "Constituyen aquellas áreas en las que los elementos naturales y sus relaciones caracterizan y determinan el  espacio,  por  encima  de  los  elementos  humanos que  son  escasos  y  en  algunas  ocasiones inexistentes:",
      "options": [
          "Espacio Cultural",
          "Espacio Biológico",
          "Espacio Natural",
          "Espacio Rural",
          "Espacio Ecológico"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Espacio Natural.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-6",
      "categoryId": "amanecida-geografia",
      "question": "Geógrafo que calculó la circunferencia de la Tierra y con esto sentó las bases de la Geodesia:",
      "options": [
          "Pitágoras",
          "Eratóstenes de Cirene",
          "Ptolomeo",
          "Homero",
          "Aristóteles"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Eratóstenes de Cirene.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-7",
      "categoryId": "amanecida-geografia",
      "question": "La siguiente medición de 6,378 Km.  Corresponde a:",
      "options": [
          "El Radio ecuatorial",
          "La circunferencia de la Tierra",
          "El Radio polar",
          "El Eje terrestre",
          "El diámetro de la Tierra"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: El Radio ecuatorial.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-8",
      "categoryId": "amanecida-geografia",
      "question": "Cada Huso horario en el planeta Tierra es de: 23º 27’",
      "options": [
          "",
          "90º",
          "15º 66º 33’",
          "",
          "180º"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: 15º 66º 33’.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-9",
      "categoryId": "amanecida-geografia",
      "question": "Los  meridianos  señalan  valores  de  longitud  y poseen:",
      "options": [
          "Tamaños diferentes",
          "Cenit",
          "Nadir",
          "El mismo tamaño",
          "Perieco"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: El mismo tamaño.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-10",
      "categoryId": "amanecida-geografia",
      "question": "El  Meridiano  Base  o  Greenwich  está  ubicado  en  el punto de grado:",
      "options": [
          "90°",
          "0°",
          "180°",
          "360°",
          "45°"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: 0°.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-11",
      "categoryId": "amanecida-geografia",
      "question": "La Tierra tiene una circunferencia ecuatorial de:",
      "options": [
          "6, 356 km",
          "6, 378 km",
          "40,076 km",
          "12, 756 km",
          "12, 800 km"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: 40,076 km.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-12",
      "categoryId": "amanecida-geografia",
      "question": "Los  meridianos  Greenwich  y  180º  recorren imaginariamente  la  Tierra  de  arriba  abajo.  El meridiano de Greenwich recorre  tres Océano, el que recorre en su parte media es el:",
      "options": [
          "Atlántico",
          "Índico",
          "Antártico",
          "Ártico",
          "Pacífico"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Atlántico.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-13",
      "categoryId": "amanecida-geografia",
      "question": "Para determinar la posición de un punto cualquiera sobre la superficie terrestre se requiere conocer:",
      "options": [
          "Latitud y longitud",
          "El continente, país y región",
          "Las Coordenadas Geográficas",
          "Continente y región natural",
          "Continente, país, región y localidad"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Las Coordenadas Geográficas.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-14",
      "categoryId": "amanecida-geografia",
      "question": "Este  paralelo  delimita  los  puntos  más  meridionales en los que el Sol puede ocupar a mediodía:",
      "options": [
          "Trópico de Capricornio",
          "Círculo Polar Ártico",
          "Trópico de Cáncer",
          "Círculo Polar Antártico",
          "Meridiano base"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Trópico de Capricornio.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-15",
      "categoryId": "amanecida-geografia",
      "question": "Es  la  posición  geográfica  que  tienen  las  mismas estaciones pero horas opuestas:",
      "options": [
          "Antípodas",
          "Antecos",
          "Polos",
          "Periecos",
          "Latitudes"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Periecos.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-16",
      "categoryId": "amanecida-geografia",
      "question": "Es  el  máximo  valor  que  puede  tomar  la  longitud dentro de las coordenadas geográficas:",
      "options": [
          "90°",
          "120°",
          "0°",
          "180°",
          "60°"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: 180°.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-17",
      "categoryId": "amanecida-geografia",
      "question": "País  de  Sudamérica  por  donde  no  pasa  la  Línea Ecuatorial:",
      "options": [
          "Ecuador",
          "Brasil",
          "Venezuela",
          "Colombia",
          "Panamá"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Venezuela.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-18",
      "categoryId": "amanecida-geografia",
      "question": "Son los momentos del año en los que el Sol alcanza su  mayor  o  menor  altura  aparente  en  el  cielo,  y  la duración del día o de la noche son las máximas del año:",
      "options": [
          "Equinoccios",
          "Los solsticios",
          "Verano",
          "Otoño",
          "Inviernos"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Los solsticios.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-19",
      "categoryId": "amanecida-geografia",
      "question": "Es  el  espacio  en  el  que  gravitan  los  astros, organizados  en  sistemas  conservando  armonía, formado  por  la  totalidad  de  cosas  físicas relevantes:",
      "options": [
          "Satélites",
          "Planetas",
          "Estrellas",
          "Galaxias",
          "Universo"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Universo.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-20",
      "categoryId": "amanecida-geografia",
      "question": "Estudia  los  objetos  que  pueblan  el  universo,  sus propiedades  y  las  leyes  que  gobiernan  sus movimientos:",
      "options": [
          "Astronáutica",
          "Astronomía",
          "Astrología",
          "Astrobiología",
          "Astroquímica"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Astronomía.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-21",
      "categoryId": "amanecida-geografia",
      "question": "Estudia la composición, evolución y propiedades del universo con el fin de entender su origen y evolución:",
      "options": [
          "Astrología",
          "Astronomía",
          "Astronáutica",
          "Cosmología",
          "Cosmogonía"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Cosmología.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-22",
      "categoryId": "amanecida-geografia",
      "question": "Según  esta  teoría  toda  la  materia  y  la  energía  que constituyen el universo formaban, en el pasado, una esfera enormemente densa (Ylem):",
      "options": [
          "Big Crunch",
          "Big Splash",
          "Big Rip",
          "Big Bang",
          "Universo Estacionario"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Big Bang.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-23",
      "categoryId": "amanecida-geografia",
      "question": "Partieron  de  la  premisa  de  que  el  Universo  era similar a un cajón rectangular:",
      "options": [
          "Egipcios",
          "Chinos",
          "Caldeos",
          "Griegos",
          "Hindúes"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Egipcios.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-24",
      "categoryId": "amanecida-geografia",
      "question": "Astrónomo  que  formuló  la  teoría  heliocéntrica  del sistema  solar,  concebida  en  primera  instancia  por Aristarco de Samos:",
      "options": [
          "Edwin Hubble",
          "Nicolás Copérnico",
          "Von Humboldt",
          "Galileo Galilei",
          "Ptolomeo"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Nicolás Copérnico.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-25",
      "categoryId": "amanecida-geografia",
      "question": "Astrónomo pionero del método científico experimental  y  el  primero  en  utilizar  un  telescopio refractor con el que hizo importantes descubrimientos astronómicos:",
      "options": [
          "Eratóstenes",
          "Johanes Kepler",
          "Nicolás Copérnico",
          "Ptolomeo",
          "Galile Galilei."
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Galile Galilei..",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-26",
      "categoryId": "amanecida-geografia",
      "question": "La Teoría del Universo Estacionario plantea que:",
      "options": [
          "El Universo se encuentra en indefinida contracción",
          "El Universo es eternamente igual",
          "El Universo no tiene punto de origen",
          "El Universo ha existido y existirá siempre",
          "El Universo surgió de una gran explosión"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: El Universo ha existido y existirá siempre.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-27",
      "categoryId": "amanecida-geografia",
      "question": "La  Vía  Láctea  es  una  galaxia  espiral  que pertenece  a  un  grupo  local  conformado  por  un promedio de 21 galaxias, dentro del grupo la galaxia más lejana es:",
      "options": [
          "Triángulo",
          "Andrómeda",
          "Markarian 348",
          "Nube Mayor de Magallanes",
          "Nube Menor de Magallanes"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Triángulo.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-28",
      "categoryId": "amanecida-geografia",
      "question": "Son  los  diferentes  fragmentos  en  qué  se encuentra dividida la litosfera:",
      "options": [
          "Plegamiento",
          "Falla",
          "Placas tectónicas",
          "Diaclasa",
          "Erosión"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Placas tectónicas.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-29",
      "categoryId": "amanecida-geografia",
      "question": "Es  un  proceso  que  plantea  el  Equilibrio Hidrostático de la tierra:",
      "options": [
          "Intemperismo",
          "Meteorización",
          "Isostasia",
          "Erosión",
          "Vulcanismo detengas\""
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Isostasia.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-30",
      "categoryId": "amanecida-geografia",
      "question": "Son rocas que se han formado como consecuencia de  la  transformación  de  otras  rocas,  debido  a cambios  de  presión  y  de  temperatura  o  a  las variaciones químicas de su contexto:",
      "options": [
          "Plutónicas",
          "Magmáticas",
          "Volcánicas",
          "Metamórficas",
          "Sedimentarias"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Metamórficas.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-31",
      "categoryId": "amanecida-geografia",
      "question": "Es la suma de los procesos geológicos que afectan a la Tierra y determinan su constante evolución:",
      "options": [
          "Intemperismo",
          "Desintegración",
          "Geodinámica",
          "Eolición",
          "Denudación"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Geodinámica.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-32",
      "categoryId": "amanecida-geografia",
      "question": "A la superficie irregular de la corteza de la Tierra se le conoce como:",
      "options": [
          "Relieve submarino",
          "Petrología",
          "Meteorología",
          "Vulcanismo",
          "Relieve terrestre"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Relieve terrestre.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-33",
      "categoryId": "amanecida-geografia",
      "question": "Hay dos procesos diastróficos creadores del relieve:",
      "options": [
          "La epirogénesis y la orogénesis",
          "Vulcanismo y la meteorización",
          "Intemperismo y diastrofismo",
          "Las fallas y las diaclasas",
          "Las diaclasas y vulcanismo"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: La epirogénesis y la orogénesis.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-34",
      "categoryId": "amanecida-geografia",
      "question": "Es considerado como el volcán más alto del Perú:",
      "options": [
          "Ampato",
          "Chachani",
          "Coropuna",
          "Sara Sara",
          "Yucamani"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Coropuna.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-35",
      "categoryId": "amanecida-geografia",
      "question": "Es la desintegración y descomposición de una roca en  la  superficie  terrestre  o  próxima  a  ella  como consecuencia  de  su  exposición  a  los  agentes atmosféricos,  con  la  participación  de  agentes biológicos:",
      "options": [
          "Diastrofismo",
          "Sinclinal",
          "Vegetación",
          "Vulcanismo",
          "Meteorización"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Meteorización.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-36",
      "categoryId": "amanecida-geografia",
      "question": "El nevado más bello del mundo se localiza en Perú y se llama:",
      "options": [
          "Olas en el puerto",
          "Olas de pie",
          "Olas de marea",
          "Olas de acción",
          "Olas niponas"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Olas en el puerto.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-38",
      "categoryId": "amanecida-geografia",
      "question": "El Mar Peruano, por el norte, se extiende desde:",
      "options": [
          "Península de Illescas",
          "Punta Aguja",
          "Hito Nº 1 de la Concordia",
          "Talweg del río Putumayo",
          "Boca de Capones"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Boca de Capones.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-39",
      "categoryId": "amanecida-geografia",
      "question": "Organismo  creado  en  1970  en  el  Perú,  para  las acciones  de  prevención  ante  la  ocurrencia  de tsunami:",
      "options": [
          "COI",
          "SNAT",
          "INDECI",
          "IGP",
          "CORPAC"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: SNAT.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-40",
      "categoryId": "amanecida-geografia",
      "question": "Es el río que nace a 3,600 m.s.n.m., en la divisoria de la cuenca del río Huancabamba, su cauce es de 280 km. tiene una dirección de Sur a Norte:",
      "options": [
          "Tumbes",
          "Chira",
          "Piura",
          "Santa",
          "Rímac"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Piura.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-41",
      "categoryId": "amanecida-geografia",
      "question": "Suches, Ramis, Coata, Ilave, Desaguadero, son ríos de la Vertiente del:",
      "options": [
          "Amazonas",
          "Atlántico",
          "Titicaca",
          "Grau",
          "Pacífico"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Titicaca.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-42",
      "categoryId": "amanecida-geografia",
      "question": "Uno  de  los  Tsunamis  más  importantes  en  el  Perú, fue  el  del  28  de  octubre  de  ………,  debido  a  su magnitud y destrucción.",
      "options": [
          "1868",
          "1960",
          "1996",
          "1746",
          "1806"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: 1746.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-43",
      "categoryId": "amanecida-geografia",
      "question": "Es  el  río  más  septentrional  de  la  vertiente hidrográfica del Pacífico:",
      "options": [
          "Zarumilla",
          "Coata",
          "Suches",
          "Ilave",
          "Desaguadero"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Zarumilla.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-44",
      "categoryId": "amanecida-geografia",
      "question": "Disciplina  que  se  encarga  del  estudio  de  glaciares, capas de hielo, nieve estacional, suelo congelado y cualquier  otro  evento  natural  que  involucre  hielo  y sus efectos sobre el medio ambiente:",
      "options": [
          "Hidrósfera",
          "Hidrografía",
          "Océanos",
          "Glaciología",
          "Oceanografía"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Glaciología.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-45",
      "categoryId": "amanecida-geografia",
      "question": "Es  el  estudio  de  las  profundidades  del  mar,  lechos de  los  ríos,  humedales,  lagos,  embalses,  etc.  para cartografiar el relieve del fondo acuático.:",
      "options": [
          "Estuario de Virrilá",
          "Médano Blanco",
          "Cabo Blanco",
          "Ceja de selva",
          "Delta del río Tumbes detengas\""
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Estuario de Virrilá.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-48",
      "categoryId": "amanecida-geografia",
      "question": "Tiene como propósito generar y proveer información y conocimiento meteorológico, hidrológico y climático de manera confiable, oportuna y accesible en beneficio de la sociedad peruana:",
      "options": [
          "SENAMHI",
          "PCM",
          "MIGRARI",
          "MINCU",
          "MEF"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: SENAMHI.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-49",
      "categoryId": "amanecida-geografia",
      "question": "En la atmosfera, es un componente fundamental en las  precipitaciones,  absorbe  energía  térmica  de  la superficie  y  es  el  gas  más  abundante  del  efecto invernadero:",
      "options": [
          "Dióxido de Carbono",
          "Ozono Estratosférico",
          "Ozono Troposférico",
          "Aerosol atmosférico",
          "Vapor de agua"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Vapor de agua.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-50",
      "categoryId": "amanecida-geografia",
      "question": "Los  meteoros,  fenómenos  que  ocurren  en  la Atmósfera, se clasifican según la OMM en: ………. y Fotometeoros.",
      "options": [
          "El Ozono",
          "La Magnetósfera",
          "La Tropopausa",
          "Tropopausa",
          "Nube de Oort"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: El Ozono.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-52",
      "categoryId": "amanecida-geografia",
      "question": "Capa que contiene el 80% de la masa atmosférica y la mayor parte del Vapor Agua, dióxido de carbono y partículas en suspensión:",
      "options": [
          "Sodiósfera",
          "Mesósfera",
          "Termósfera",
          "Ionósfera",
          "Tropósfera"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Tropósfera.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-53",
      "categoryId": "amanecida-geografia",
      "question": "Es el límite superior de cada capa de la Atmósfera es una zona donde el gradiente de temperatura cambia de signo y la temperatura es constante, dándosele el sufijo:",
      "options": [
          "Tropo",
          "Graphien",
          "Grafos",
          "Lítico",
          "Pausa"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Pausa.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-54",
      "categoryId": "amanecida-geografia",
      "question": "La temperatura en la Tropósfera, disminuye a razón de 6,5 °C por cada:",
      "options": [
          "4 000 metros de ascenso",
          "2 500 metros de descenso",
          "1 000 metros de descenso",
          "1 000 metros de ascenso",
          "10 000 metros de ascenso"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: 1 000 metros de ascenso.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-55",
      "categoryId": "amanecida-geografia",
      "question": "En esta capa se produce la formación y destrucción de  ozono,  reteniéndose  gran  parte  de  la  radiación ultravioleta, dando lugar a un aumento progresivo de la temperatura a medida que se gana altura:",
      "options": [
          "Mesósfera",
          "Termósfera",
          "Ionósfera",
          "Tropósfera",
          "Estratósfera"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Estratósfera.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-56",
      "categoryId": "amanecida-geografia",
      "question": "Según la altitud se diferencian tres secciones de la Tropopausa, donde la Tropopausa polar alcanza:",
      "options": [
          "Entre 38 a 39 kilómetros de altitud",
          "Entre 28 a 29 kilómetros de altitud",
          "Entre 18 a 19 kilómetros de altitud",
          "Entre 8 a 9 kilómetros de altitud",
          "Entre 5 a 6 kilómetros de altitud"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Entre 8 a 9 kilómetros de altitud.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-57",
      "categoryId": "amanecida-geografia",
      "question": "Se  le  conoce  como  el  padre  de  la  meteorología peruana, debido a que su trabajo fue comentado, por el \"Memorial Literario\" de Madrid de 1808:",
      "options": [
          "Jorge Chávez Dartnell",
          "José Francisco de San Martín y Matorras",
          "Hiparco de Nicea",
          "José Domingo de La Mar",
          "Hipólito Unánue y Pavón"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Hipólito Unánue y Pavón.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-58",
      "categoryId": "amanecida-geografia",
      "question": "El término lluvia ácida fue utilizado por primera vez por:",
      "options": [
          "Luke Howard",
          "Francis Beaufort",
          "Robert Angus Smith",
          "Helisinki",
          "Christian Friedrich Schönbein"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Robert Angus Smith.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-59",
      "categoryId": "amanecida-geografia",
      "question": "Esta  capa  comprende  un  0,1  %  de  la  masa atmosférica, su temperatura disminuye con la altura, lo que origina unos movimientos de aire en sentido vertical:",
      "options": [
          "Howard - Luke Howard",
          "Beaufort - Francis Beaufort",
          "Angus - Robert Angus Smith",
          "Diacónica - Helisinki",
          "Schönbei - Christian Friedrich Schönbei"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Beaufort - Francis Beaufort.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-61",
      "categoryId": "amanecida-geografia",
      "question": "La línea de choque entre dos grandes masas de aire con temperaturas distintas y uniformes se llama:",
      "options": [
          "Frente",
          "Monzón",
          "Ciclón",
          "Anticiclón",
          "Vientos"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Frente.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-62",
      "categoryId": "amanecida-geografia",
      "question": "Constituido por fuertes vientos giratorios en forma de cono invertido, se extiende desde las nubes hasta la superficie terrestre, con una velocidad de 400 Km./h:",
      "options": [
          "Tornado",
          "Huracán",
          "Ciclón",
          "Tifón",
          "Monzón"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Tornado.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-63",
      "categoryId": "amanecida-geografia",
      "question": "Según la Organización Meteorológica Mundial, en la conferencia de Varsovia en 1935, definió como clima las condiciones meteorológicas medias para el mes y el año, calculadas sobre un período de:",
      "options": [
          "40 años",
          "30 años",
          "50 años",
          "20 años",
          "60 años detengas\""
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: 30 años.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-64",
      "categoryId": "amanecida-geografia",
      "question": "Instrumento que proporciona un registro continuo de la temperatura del aire:",
      "options": [
          "Termógrafo",
          "Pluviómetro",
          "Higrógrafo",
          "Veleta",
          "Termohigrógrafo"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Termógrafo.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-65",
      "categoryId": "amanecida-geografia",
      "question": "Según  el  método  de  clasificación  climática  de Warren  Thornthwaite,  el  Perú  tiene  ….  tipos  de climas:",
      "options": [
          "35",
          "36",
          "37",
          "38",
          "39"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: 38.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-66",
      "categoryId": "amanecida-geografia",
      "question": "Según  SENAMHI,  los  controladores  climáticos  del Perú  se  pueden  agrupar  en  meteorológicos, oceánicos y:",
      "options": [
          "Continentales",
          "Insulares",
          "Andinos",
          "De Humboldt",
          "Amazónicos"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Continentales.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-67",
      "categoryId": "amanecida-geografia",
      "question": "Al porcentaje de energía incidente reflejada por una superficie se llama:",
      "options": [
          "Refracción",
          "Reflexión",
          "Dispersión",
          "Absorción",
          "Albedo"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Albedo.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-68",
      "categoryId": "amanecida-geografia",
      "question": "A medida que la latitud es mayor, la insolación será:",
      "options": [
          "Mayor",
          "Elevada",
          "Menor",
          "Promedio",
          "Media"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Menor.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-69",
      "categoryId": "amanecida-geografia",
      "question": "El primer censo peruano moderno se dio en el año de ………, considerado como el más importante del siglo XIX, en el gobierno civilista de Manuel Pardo y Lavalle,",
      "options": [
          "1824",
          "1850",
          "1862",
          "1876",
          "2025"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: 1876.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-70",
      "categoryId": "amanecida-geografia",
      "question": "La  población  masculina,  en  el  Perú,  en  el  último censo fue de 16 865 689, la cual representa el:",
      "options": [
          "48,6%",
          "49,4%",
          "50,6%",
          "62,5%",
          "22,7%"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: 49,4%.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-71",
      "categoryId": "amanecida-geografia",
      "question": "Históricamente, la metodología empleada en el Perú, para el empadronamiento poblacional, ha sido:",
      "options": [
          "Censo de Derecho",
          "Censo de Población",
          "Censo de Vivienda",
          "Censo de Lugar",
          "Censos de Hecho o Facto"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Censos de Hecho o Facto.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-72",
      "categoryId": "amanecida-geografia",
      "question": "La  Organización  de  Naciones  Unidas  ha  declarado “Decenio Internacional el período 2015-2024 como el de los:",
      "options": [
          "Indígenas",
          "Naturales",
          "Afrodescendientes",
          "LGTBI",
          "Ashaninkas"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Afrodescendientes.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-73",
      "categoryId": "amanecida-geografia",
      "question": "Son viviendas colectivas institucionales:",
      "options": [
          "Hospitales, hotel, casa de pensión",
          "Casa de huéspedes, hostal, cárcel",
          "Hospitales, Asilo, Aldea infantil",
          "Asilo, hotel, casa de pensión",
          "Aldea infantil, hostal, hospedaje"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Hospitales, Asilo, Aldea infantil.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-74",
      "categoryId": "amanecida-geografia",
      "question": "La densidad poblacional en este último censo es de: 2",
      "options": [
          "23,7 hab/km 2",
          "35,3 hab/km 2",
          "26,6 hab/km 2",
          "28,6 hab/km 2",
          "24,6 hab/km"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: 26,6 hab/km 2.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-75",
      "categoryId": "amanecida-geografia",
      "question": "Es la ciencia que tiene como objeto el estudio de las poblaciones  humanas  en  su  dimensión,  estructura, evolución y características generales:",
      "options": [
          "Demografía",
          "Ciencias sociales",
          "Censos",
          "Antropogeografía",
          "Cultura"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Demografía.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-76",
      "categoryId": "amanecida-geografia",
      "question": "Representan  el  grupo  indígena  u  originario amazónico  demográficamente  más  numeroso  del Perú: – Konibo",
      "options": [
          "Shipibo",
          "Shiwilu",
          "Iñapari",
          "Bora",
          "Los Ashaninkas"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Los Ashaninkas.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-77",
      "categoryId": "amanecida-geografia",
      "question": "La  población  entre  los  15  a  59  años  en  el  Perú, representa un …. de la población total.",
      "options": [
          "62,5 %",
          "22,7%",
          "14,8%",
          "50,6%",
          "49,4%"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: 62,5 %.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-78",
      "categoryId": "amanecida-geografia",
      "question": "Es  el  conjunto  de  operaciones  destinadas  a recopilar,  analizar  y  difundir  los  datos  relacionados con los locales destinados a habitación humana:",
      "options": [
          "Censo de Saneamiento y Desagües",
          "Censo de Comunidades Indígenas",
          "Censo Nacional Agropecuario",
          "Censo de Vivienda",
          "Censo Nacional Económico"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Censo de Vivienda.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-79",
      "categoryId": "amanecida-geografia",
      "question": "Conjunto  de  operaciones  que  recopilan,  procesan, evalúan y publican datos demográficos, económicos y  sociales  de  todas  las  unidades  dentro  de  un territorio y en un momento específico:",
      "options": [
          "Migración",
          "Censo",
          "Inmigración",
          "Emigración",
          "Amalgación detengas\""
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Censo.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-80",
      "categoryId": "amanecida-geografia",
      "question": "En el Perú, el Índice de Envejecimiento ha tenido una tendencia de:",
      "options": [
          "El Caserío",
          "El Pueblo",
          "La Villa",
          "La Ciudad",
          "La Metrópoli"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: El Pueblo.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-82",
      "categoryId": "amanecida-geografia",
      "question": "Los  tres  departamentos  con  mayor  Índice  de Envejecimiento en este último censo son:",
      "options": [
          "Lima, Moquegua y Puno",
          "Ucayali, Loreto y Amazonas",
          "Tacna, Arequipa y Puno",
          "Loreto, Madre de Dios y Puno",
          "Loreto, Cajamarca y San Martín"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Lima, Moquegua y Puno.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-83",
      "categoryId": "amanecida-geografia",
      "question": "Históricamente la aparición de la Geografía humana como rama autónoma de la Geografía se produce en los finales dos decenios finales del siglo:",
      "options": [
          "XIX",
          "XVIII",
          "XVII",
          "XVI",
          "XV"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: XIX.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-84",
      "categoryId": "amanecida-geografia",
      "question": "Consiste  en  en  censar  a  las  personas  en  el  lugar donde  residen  habitualmente  en  los  últimos  seis meses en adelante:",
      "options": [
          "Innovación de Derecho",
          "Índice de Derecho",
          "Censo de Derecho",
          "Censo de Hecho o de Facto",
          "Índice de Hecho"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Censo de Derecho.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-85",
      "categoryId": "amanecida-geografia",
      "question": "La  antropogeografía,  tiene  por  objeto  de  estudio  al ……. como elemento activo del medio geográfico, el cual lo modifica, así como su distribución en el globo terrestre.",
      "options": [
          "Hombre",
          "Hechos históricos",
          "Líneas imaginarias",
          "Espacio",
          "La tierra"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Hombre.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-86",
      "categoryId": "amanecida-geografia",
      "question": "Mide la cantidad de adultos mayores de 60 años por cada 100 personas de 0 a 14 años:",
      "options": [
          "Constitución de 1823",
          "Constitución de 1828",
          "Constitución de 1860",
          "Constitución de 1826",
          "Constitución de 1933"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Constitución de 1860.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-88",
      "categoryId": "amanecida-geografia",
      "question": "Los departamentos son instancias de creación más reciente,  estos  nacieron  en  la  etapa  inicial  de  la República, en 1821, reemplazando a las:",
      "options": [
          "Corregimientos",
          "Guamaníes",
          "Marcas",
          "Intendencias",
          "Suyos"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Intendencias.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-89",
      "categoryId": "amanecida-geografia",
      "question": "Punto de menor altitud de la Cordillera de los Andes, se ubica en ………a ………",
      "options": [
          "Cima del Nevado Huascarán - 6 768 m.s.n.m. – 2 145 m.s.n.m.",
          "Paso de Porculla",
          "Depresión de Sechura a -34m. – 5 036 m.s.n.m.",
          "Vinicunca – 1 400 m.s.n.m.",
          "Puma Ringri"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Paso de Porculla.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-90",
      "categoryId": "amanecida-geografia",
      "question": "Capacidad  de  la  nación  para  expresar  su  voluntad libremente  y  organizarse  con  miras  a  lograr  una estructura eficiente:",
      "options": [
          "Estado",
          "Poder",
          "Unión",
          "Desarrollo",
          "Potencial Nacional"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Poder.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-91",
      "categoryId": "amanecida-geografia",
      "question": "El  Protocolo  de  Paz,  Amistad  y  Límites  de  Río  de Janeiro, se firmó con …… en el gobierno de ……….",
      "options": [
          "Brasil - Augusto",
          "Leguía.",
          "Colombia – Miguel Iglesias",
          "Chile",
          "Ecuador - Manuel Prado Ugarteche"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Ecuador - Manuel Prado Ugarteche.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-92",
      "categoryId": "amanecida-geografia",
      "question": "El Tratado de Límites, Comercio y Navegación de la n ………… en el Cuenca del Amazonas, se firmó co gobierno de: …………",
      "options": [
          "Brasil - Augusto",
          "Leguía",
          "Colombia – Miguel Iglesias",
          "Chile",
          "Ecuador - Manuel Prado Ugarteche"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Brasil - Augusto.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-93",
      "categoryId": "amanecida-geografia",
      "question": "Países con mayor extensión territorial en Sudamérica:",
      "options": [
          "Brasil, Argentina y Perú",
          "Venezuela, Bolivia y Colombia",
          "Colombia, Perú y Argentina",
          "Brasil, Colombia y Perú",
          "Brasil, Perú, y Colombia"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Brasil, Argentina y Perú.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-94",
      "categoryId": "amanecida-geografia",
      "question": "Es  una  forma  de  organización  democrática  y constituye  una  política  permanente  del  Estado Peruano para el desarrollo integral del país:",
      "options": [
          "Centralización",
          "Democratización",
          "Multiculturalidad",
          "Pluriculturalidad",
          "Descentralización"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Descentralización.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-95",
      "categoryId": "amanecida-geografia",
      "question": "El Perú selló el mayor número de sus fronteras en el gobierno de:",
      "options": [
          "Andrés de Santa Cruz",
          "Leguía",
          "Augusto",
          "Remigio Morales Bermúdez",
          "Fernando Belaúnde detengas\""
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Leguía.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-96",
      "categoryId": "amanecida-geografia",
      "question": "Según  Rudolf  Kjellen,  el  espacio  puede  crecer mediante tres acciones:",
      "options": [
          "Jacques Turgot",
          "Friedrich Ratzel",
          "Halford Mackinder",
          "Rudolf Kjellén",
          "Otto Maull"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Friedrich Ratzel.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-98",
      "categoryId": "amanecida-geografia",
      "question": "Es la actividad que regula y coordinar la vida social por  medio  del  orden,  defensa  y  justicia  para mantener  la  superación  y  la  cohesión  de  un  grupo social determinado:",
      "options": [
          "Política geográfica",
          "Geopolítica",
          "Geografía política",
          "Política",
          "Geografía Social"
      ],
      "correctIndex": 3,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Política.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-99",
      "categoryId": "amanecida-geografia",
      "question": "La  Constitución  de  1933  fue  promulgada  en  el gobierno del presidente:",
      "options": [
          "Augusto",
          "Oscar Benavides",
          "Víctor Raúl Haya de la Torre",
          "Alberto Fujimori",
          "Luis Sánchez Cerro"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Luis Sánchez Cerro.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-100",
      "categoryId": "amanecida-geografia",
      "question": "En  la  refinería  de  Cajamarquilla  se  realiza  el tratamiento de:",
      "options": [
          "Zinc",
          "Oro",
          "Cobre",
          "Bronce",
          "Plata"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Zinc.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-101",
      "categoryId": "amanecida-geografia",
      "question": "La fabricación de harina y aceite de pescado para la exportación utiliza como materia prima:",
      "options": [
          "La caballa",
          "El jurel",
          "La anchoveta",
          "La pota",
          "La merluza"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: La anchoveta.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-102",
      "categoryId": "amanecida-geografia",
      "question": "El  departamento  de  mayor  producción  de  caña  de azúcar en el Perú es:",
      "options": [
          "Arequipa",
          "La Libertad",
          "Iquitos",
          "Lima",
          "Huancayo"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: La Libertad.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-103",
      "categoryId": "amanecida-geografia",
      "question": "La  principal  industria  siderúrgica  del  Perú  es Siderperú que se encuentra en la provincia de:",
      "options": [
          "Chimbote",
          "Junín",
          "Casma",
          "Talara",
          "Otuzco"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Chimbote.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-104",
      "categoryId": "amanecida-geografia",
      "question": "Región de mayor producción de oro:",
      "options": [
          "Piura",
          "La Libertad",
          "Cajamarca",
          "Madre de Dios",
          "Loreto"
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Cajamarca.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-105",
      "categoryId": "amanecida-geografia",
      "question": "cuál es la mina que es la principal extractora de oro en  Perú,  representando  el  9,5%  de  la  producción total del país.",
      "options": [
          "Yanacocha",
          "Antapacay",
          "Apumayo",
          "Buenaventura",
          "Casapalca"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Yanacocha.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-106",
      "categoryId": "amanecida-geografia",
      "question": "Es la región con mayor producción avícola:",
      "options": [
          "Cajamarca",
          "Lima",
          "La Libertad",
          "Piura",
          "Loreto"
      ],
      "correctIndex": 1,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Lima.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-107",
      "categoryId": "amanecida-geografia",
      "question": "Recursos  que  se  han  explotado  a  través  de  los proyectos de Camisea y el Oleoducto Nor peruano: – petróleo",
      "options": [
          "Gas – oro",
          "Cobre – plata",
          "Oro – Zinc",
          "Magnesio – hierro",
          "Plomo"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Gas – oro.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-108",
      "categoryId": "amanecida-geografia",
      "question": "En el Perú el mineral que genera el mayor ingreso de divisas es:",
      "options": [
          "Cobre",
          "Bronce",
          "Oro",
          "Plata",
          "Zinc"
      ],
      "correctIndex": 0,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Cobre.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-109",
      "categoryId": "amanecida-geografia",
      "question": "La Compañía Minera Antamina S.A. es un complejo minero  polimetálico  que  contiene  uno  de  los yacimientos  de  cobre  más  importantes  del  mundo, está ubicada en:",
      "options": [
          "Ica",
          "Lima",
          "Loreto",
          "Madre de Dios",
          "Ancash"
      ],
      "correctIndex": 4,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Ancash.",
      "difficulty": "medio"
  },
  {
      "id": "amanecida-geo-110",
      "categoryId": "amanecida-geografia",
      "question": "El  proyecto  Río  Blanco  se  localiza  en  el  cerro ́s Hill, perteneciente al distrito de El Carmen Henry de  la  Frontera,  provincia  de  Huancabamba, departamento de:",
      "options": [
          "Junín",
          "Pasco",
          "Piura",
          "Lambayeque",
          "Loreto ¡Última Amanecida! No Olvides Por qué Empezaste,Ese Sueño que Llevas Dentro Vale cada Desvelo.Cada Lágrima Y Cada Esfuerzo. Estás más cerca De Lo que Crees.Vamos que ingresamos!. detengas\""
      ],
      "correctIndex": 2,
      "explanation": "Respuesta confirmada en la clave oficial de la Amanecida Fijas: Piura.",
      "difficulty": "medio"
  },

  // ===================== ULTIMA AMANECIDA FUL FIJAS - 3. LENGUAJE Y LITERATURA =====================
  {
    id: 'ama-ll-1',
    categoryId: 'amanecida-lenguaje-literatura',
    question: '[Amanecida Fijas - Ortografía]: ¿En cuál de las siguientes oraciones la palabra "dé" y "té" están correctamente tildadas?',
    options: [
      'Dile que te de una taza de te caliente.',
      'Ojalá me dé una infusión de té con canela.',
      'El te de jazmín no me de sueño.',
      'De usted las gracias por el te servido.',
    ],
    correctIndex: 1,
    explanation: '"Dé" lleva tilde diacrítica cuando procede del verbo dar. "Té" lleva tilde diacrítica cuando se refiere a la planta o bebida aromática (sustantivo).',
    curiosityFact: 'El pronombre átono "te" y la preposición "de" no llevan tilde diacrítica.',
  },
  {
    id: 'ama-ll-2',
    categoryId: 'amanecida-lenguaje-literatura',
    question: '[Amanecida Fijas - Concurrencia Vocálica]: En las palabras "reina" y "búho", encontramos respectivamente:',
    options: [
      'Diptongo decreciente e hiato acentual',
      'Diptongo creciente y diptongo homogéneo',
      'Hiato simple y triptongo',
      'Hiato acentual y diptongo decreciente',
    ],
    correctIndex: 0,
    explanation: 'En "rei-na" se une una vocal abierta (e) y una cerrada átona (i), formando diptongo decreciente. En "bú-ho" la vocal cerrada (ú) lleva la mayor fuerza de voz y se tilda, rompiendo el diptongo en hiato acentual.',
    curiosityFact: 'La presencia de la letra "h" intermedia no impide la formación de diptongos ni de hiatos.',
  },
  {
    id: 'ama-ll-3',
    categoryId: 'amanecida-lenguaje-literatura',
    question: '[Amanecida Fijas - Sintaxis]: Señale el sujeto en la siguiente oración: "Por la mañana, a los postulantes más destacados premió el rector de la universidad."',
    options: [
      'Por la mañana',
      'Los postulantes más destacados',
      'El rector de la universidad',
      'Tácito (ellos)',
    ],
    correctIndex: 2,
    explanation: 'El sujeto es quien realiza la acción verbal: ¿Quién premió a los postulantes? "El rector de la universidad". "A los postulantes" funciona como objeto directo precedido de preposición.',
    curiosityFact: 'El sujeto en español puede ubicarse al inicio, al medio o al final de la oración.',
  },
  {
    id: 'ama-ll-4',
    categoryId: 'amanecida-lenguaje-literatura',
    question: '[Amanecida Fijas - Literatura Peruana]: Obra cumbre de José María Arguedas que recrea el enfrentamiento cultural entre indios y terratenientes durante la corrida de toros andina (Turupukllay):',
    options: ['Los ríos profundos', 'Yawar Fiesta', 'Todas las sangres', 'El zorro de arriba y el zorro de abajo'],
    correctIndex: 1,
    explanation: '"Yawar Fiesta" (1941) es la primera novela de Arguedas, ambientada en Puquio (Ayacucho), que plasma el choque cultural y el rito taurino indígena con el cóndor atado al lomo del toro.',
    curiosityFact: 'Arguedas aprendió quechua antes que español y dedicó su vida como antropólogo y escritor a revalorar la cultura andina.',
  },
  {
    id: 'ama-ll-5',
    categoryId: 'amanecida-lenguaje-literatura',
    question: '[Amanecida Fijas - Literatura Universal]: ¿Quién es el autor de la célebre tragedia "Edipo Rey", cumbre del teatro clásico griego?',
    options: ['Esquilo', 'Sófocles', 'Eurípides', 'Aristófanes'],
    correctIndex: 1,
    explanation: 'Sófocles es el autor de "Edipo Rey", obra maestra de la tragedia griega que explora la fatalidad del destino, la verdad y la ceguera simbólica del rey de Tebas.',
    curiosityFact: 'Aristóteles consideró en su "Poética" a Edipo Rey como el modelo perfecto de tragedia por su anagnórisis y peripecia.',
  },
  {
    id: 'ama-ll-6',
    categoryId: 'amanecida-lenguaje-literatura',
    question: '[Amanecida Fijas - Generación del 50]: Cuento urbano de Julio Ramón Ribeyro cuyos protagonistas son los niños Efraín y Enrique, explotados por su abuelo don Santos para alimentar al cerdo Pascual:',
    options: [
      'Los gallinazos sin plumas',
      'Alienación',
      'Al pie del acantilado',
      'Silvio en el Rosedal',
    ],
    correctIndex: 0,
    explanation: '"Los gallinazos sin plumas" (1955) retrata la cruda marginalidad urbana limeña y la lucha por la supervivencia de la infancia marginada en los basurales.',
    curiosityFact: 'Ribeyro reunió la totalidad de sus relatos bajo el emblemático título de "La palabra del mudo".',
  },

  // ===================== ULTIMA AMANECIDA FUL FIJAS - 4. RAZ. LÓGICO =====================
  {
    id: 'ama-rl-1',
    categoryId: 'amanecida-raz-logico',
    question: '[Amanecida Fijas - Formalización]: La proposición "Es falso que, si no estudio, apruebo el examen" se formaliza correctamente como:',
    options: [
      '~(~p → q)',
      '~p → ~q',
      '~(~p ∧ q)',
      'p ↔ ~q',
    ],
    correctIndex: 0,
    explanation: 'Definiendo p: "estudio" y q: "apruebo el examen". "No estudio" es ~p. El condicional es (~p → q). El negador externo "Es falso que" niega todo el bloque: ~(~p → q).',
    curiosityFact: 'El condicional (→) sólo es falso cuando el antecedente es verdadero y el consecuente falso.',
  },
  {
    id: 'ama-rl-2',
    categoryId: 'amanecida-raz-logico',
    question: '[Amanecida Fijas - Leyes de De Morgan]: La negación de la conjunción ~(p ∧ q) equivale lógicamente a:',
    options: ['~p ∨ ~q', '~p ∧ ~q', 'p ∨ q', 'p → ~q'],
    correctIndex: 0,
    explanation: 'Por la primera Ley de De Morgan, negar que ocurran simultáneamente dos proposiciones equivale a afirmar que al menos una de ellas no ocurre: ~(p ∧ q) ≡ (~p ∨ ~q).',
    curiosityFact: 'Augustus De Morgan introdujo formalmente estas leyes de dualidad lógica en el siglo XIX.',
  },
  {
    id: 'ama-rl-3',
    categoryId: 'amanecida-raz-logico',
    question: '[Amanecida Fijas - Implicación Material]: La proposición condicional (p → q) es lógicamente equivalente a:',
    options: ['~p ∨ q', 'p ∧ ~q', '~p ∧ ~q', 'q → p'],
    correctIndex: 0,
    explanation: 'La ley de la implicación material establece que afirmar que p implica q equivale a que no se dé p o bien que se dé q: (p → q) ≡ (~p ∨ q).',
    curiosityFact: 'Esta equivalencia es la más utilizada para simplificar circuitos lógicos con compuertas OR y NOT.',
  },
  {
    id: 'ama-rl-4',
    categoryId: 'amanecida-raz-logico',
    question: '[Amanecida Fijas - Tablas de Verdad]: Una proposición compuesta cuya columna principal en la matriz de verdad contiene únicamente valores de VERDADERO (V) se clasifica como:',
    options: ['Contradicción', 'Contingencia', 'Tautología', 'Inconsistencia'],
    correctIndex: 2,
    explanation: 'Una tautología o ley lógica es una fórmula que resulta verdadera bajo cualquier asignación de verdad de sus variables proposicionales (ej. p ∨ ~p).',
    curiosityFact: 'Si todos los valores fuesen falsos se llamaría contradicción; si combina V y F, contingencia.',
  },
  {
    id: 'ama-rl-5',
    categoryId: 'amanecida-raz-logico',
    question: '[Amanecida Fijas - Equivalencias]: ¿Cuál es la contrapositiva de la proposición "Si amanezco estudiando, domino las fijas"?',
    options: [
      'Si no domino las fijas, no amanecí estudiando',
      'Si domino las fijas, amanezco estudiando',
      'Si no amanezco estudiando, no domino las fijas',
      'Amanezco estudiando y no domino las fijas',
    ],
    correctIndex: 0,
    explanation: 'La ley de transposición o contraposición establece que (p → q) ≡ (~q → ~p). Se invierte el orden y se niegan ambos términos.',
    curiosityFact: 'La demostración por contrarecíproco es una de las técnicas de prueba más sólidas en matemáticas.',
  },
  {
    id: 'ama-rl-6',
    categoryId: 'amanecida-raz-logico',
    question: '[Amanecida Fijas - Circuitos Lógicos]: Dos interruptores p y q conectados en SERIE representan en el álgebra booleana a la operación:',
    options: ['Conjunción (p ∧ q)', 'Disyunción inclusiva (p ∨ q)', 'Condicional (p → q)', 'Bicondicional (p ↔ q)'],
    correctIndex: 0,
    explanation: 'En conexión en serie, la corriente pasa únicamente si ambos interruptores están cerrados (activos), lo que corresponde exactamente a la conjunción lógica (AND).',
    curiosityFact: 'Si estuviesen en paralelo representarían a la disyunción inclusiva (OR).',
  },

  // ===================== ULTIMA AMANECIDA FUL FIJAS - 5. RAZ. MATEMÁTICO =====================
  {
    id: 'ama-rm-1',
    categoryId: 'amanecida-raz-matematico',
    question: '[Amanecida Fijas - Certezas]: En una caja opaca hay 8 esferas rojas, 10 esferas azules y 6 esferas blancas. ¿Cuántas esferas se deben extraer al azar como mínimo para tener la certeza de haber obtenido al menos una de cada color?',
    options: ['3', '15', '19', '21'],
    correctIndex: 2,
    explanation: 'Principio del peor de los casos: Extraemos primero todos los colores de mayor cantidad antes de tocar el último. Sacamos las 10 azules + las 8 rojas = 18 esferas. La siguiente esfera que saquemos será con total seguridad de color blanca: 10 + 8 + 1 = 19 esferas.',
    curiosityFact: 'El método del "peor de los casos" asume que la suerte está en contra nuestra hasta garantizar el 100% de certeza.',
  },
  {
    id: 'ama-rm-2',
    categoryId: 'amanecida-raz-matematico',
    question: '[Amanecida Fijas - Método del Cangrejo]: A la edad de Lucía se le multiplica por 2, al resultado se le suma 8, luego se divide entre 3 y finalmente se le resta 4 obteniendo 6. ¿Cuántos años tiene Lucía?',
    options: ['9 años', '11 años', '13 años', '15 años'],
    correctIndex: 1,
    explanation: 'Operaciones inversas de fin a inicio: Partimos de 6 → sumamos 4 = 10 → multiplicamos por 3 = 30 → restamos 8 = 22 → dividimos entre 2 = 11 años.',
    curiosityFact: 'Este método matemático era conocido en la antigüedad por los escribas egipcios en el papiro de Rhind.',
  },
  {
    id: 'ama-rm-3',
    categoryId: 'amanecida-raz-matematico',
    question: '[Amanecida Fijas - Edades]: Hace 5 años la edad de Manuel era el triple de la edad de su hijo. Si hoy la suma de sus edades es 50 años, ¿cuántos años tiene Manuel hoy?',
    options: ['30 años', '35 años', '38 años', '40 años'],
    correctIndex: 1,
    explanation: 'Hace 5 años: hijo = x, Manuel = 3x. Hoy: hijo = x + 5, Manuel = 3x + 5. Suma hoy: (x + 5) + (3x + 5) = 50 → 4x + 10 = 50 → 4x = 40 → x = 10. Por tanto, Manuel tiene 3(10) + 5 = 35 años.',
    curiosityFact: 'La diferencia de edades entre dos personas permanece siempre constante a lo largo del tiempo.',
  },
  {
    id: 'ama-rm-4',
    categoryId: 'amanecida-raz-matematico',
    question: '[Amanecida Fijas - Sucesiones]: Determine el número que continúa en la siguiente secuencia: 3, 7, 14, 24, 37, ...',
    options: ['48', '51', '53', '55'],
    correctIndex: 2,
    explanation: 'Primer nivel de diferencias: 7-3 = 4, 14-7 = 7, 24-14 = 10, 37-24 = 13. Segundo nivel: 7-4 = 3, 10-7 = 3, 13-10 = 3 (razón constante +3). La siguiente diferencia es 13 + 3 = 16. El número que sigue es 37 + 16 = 53.',
    curiosityFact: 'Es una progresión aritmética de segundo orden, modelable con una ecuación cuadrática an² + bn + c.',
  },
  {
    id: 'ama-rm-5',
    categoryId: 'amanecida-raz-matematico',
    question: '[Amanecida Fijas - Cronometría]: ¿Qué ángulo forman el horario y el minutero de un reloj a las 3:40?',
    options: ['120°', '130°', '140°', '115°'],
    correctIndex: 1,
    explanation: 'Fórmula angular para cuando el minutero adelanta al horario: θ = (11/2)M - 30H. Con H=3 y M=40: θ = (11/2)(40) - 30(3) = 11(20) - 90 = 220° - 90° = 130°.',
    curiosityFact: 'El minutero avanza a razón de 6° por minuto, mientras que el horario avanza solo 0.5° por minuto.',
  },
  {
    id: 'ama-rm-6',
    categoryId: 'amanecida-raz-matematico',
    question: '[Amanecida Fijas - Porcentajes]: En una tienda universitaria, un libro cuesta S/ 100. Se le aplica primero un aumento del 20% y luego un descuento del 20%. ¿Cuál es el precio final del libro?',
    options: ['S/ 100', 'S/ 96', 'S/ 98', 'S/ 94'],
    correctIndex: 1,
    explanation: 'Con el aumento del 20%: S/ 100 × 1.20 = S/ 120. Con el descuento sucesivo del 20%: S/ 120 × 0.80 = S/ 96. El precio disminuyó en un 4%.',
    curiosityFact: 'Aumentos y descuentos sucesivos de igual porcentaje "x" siempre generan una pérdida neta equivalente a (x²/100)%.',
  },
];