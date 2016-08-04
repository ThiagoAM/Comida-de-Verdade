function inicia_jogo() {
	/*  
			Ultima modificacao: 04/11/15
			Escrito por: Thiago Anderson Martins (thiago_andersonmm@hotmail.com / thianmaru@icloud.com)
			Código Fonte: https://github.com/ThiagoAM/portfolio
			
			Programa de código livre, sob a liçenca pública geral GNU (Versão 3);
			Para mais detalhes, acesse: http://www.gnu.org/licenses/ 						
	*/

	// Constantes
	const QUANTIDADE_OPCOES = 10; 	
	const QUANTIDADE_NIVEIS = 20; 
	const MAX_CARACTERES = 12;
	const MAX_JOGADORES = 5; 

	// Variáveis de Som
	var somMusica = document.getElementById("musica"); 
	var somMusicaJogo = document.getElementById("musica_jogo");
	var somAcerto = document.getElementById("somAcerto");
	var somErro = document.getElementById("somErro");

	// Vetores
	var perguntas = [
		/* 01 */"Qual é um exemplo de comida de verdade?",
		/* 02 */"Onde encontrar comida de verdade?",
		/* 03 */"Qual produz alimentos agroecológicos e sem agrotóxicos?",
		/* 04 */"Seu uso pode contaminar alimentos, o meio ambiente e pode causar doenças.",
		/* 05 */"Qual desses locais promove a cultura alimentar?",
		/* 06 */"Qual dessas opções que, além de não ser saudável, afeta ainda a cultura local e a vida social?",
		/* 07 */"Qual das opções é alimento rico em sal, açúcar, gorduras, aditivos e substâncias de uso industrial?",
		/* 08 */"Qual dessas opções é a melhor fonte de vitaminas e minerais?",
		/* 09 */"Qual o melhor tempero no preparo da comida de verdade?",
		/* 10 */"Qual opção seria a melhor escolha pra hora do almoço?",
		/* 11 */"Uma boa opção de sobremesa é...",
		/* 12 */"Escolha o alimento que faz bem para a saúde e não tem adição de açúcar",
		/* 13 */"Qual combinação é um forte representante da cultura alimentar brasileira?",
		/* 14 */"Seu consumo favorece o desenvolvimento de diabetes, obesidade, hipertensão, osteoporose, cárie, dente outras:",
		/* 15 */"Qual a melhor opção para se hidratar?",
		/* 16 */"Qual opção representa preparações tradicionais do patrimônio alimentar brasileiro?",
		/* 17 */"Qual o melhor jeito de realizar suas refeições?",
		/* 18 */"A publicidade destes alimentos é bem comum, mas eles não são opções saudáveis.",
		/* 19 */"Qual das opções é o melhor jeito de comer comida de verdade?",
		/* 20 */"Então, o que é melhor para você, para a sociedade e para o planeta?"
	]; 

	var dicas = [
		/* 01 */"Comida de Verdade é aquela que respeita as tradições, o meio ambiente...",
		/* 02 */"Abastecimento local e circuitos curtos? Circuito curto é a modalidade...",
		/* 03 */"Você sabe o que é a agroecologia? A Agroecologia se caracteriza pelo...",
		/* 04 */"Desde 2008 o Brasil é considerado o maior mercado mundial de agrotóxicos...",
		/* 05 */"O que é Soberania Alimentar? É o direito dos povos de decidir seu...",
		/* 06 */"A cultura alimentar e as tradições definem a identidade de um povo...",
		/* 07 */"Alimentos ultraprocessados, você sabe o que são? Alimentos...",
		/* 08 */"A primeira coisa a se considerar é que uma dieta saudável e variada...",
		/* 09 */"Por que evitar temperos prontos? Os temperos prontos são largamente...",
		/* 10 */"Substituir as principais refeições do dia por lanches rápidos quase...",
		/* 11 */"O consumo de sobremesas é um habito de muitas pessoas e, por isso...",
		/* 12 */"O açúcar é um vilão? O açúcar é a forma mais rápida de fornecer...",
		/* 13 */"Arroz e feijão, combinação perfeita!! Além de constituir a base da...",
		/* 14 */"Refrigerantes e bebidas açucaradas fazem mal a saúde? Os níveis...",
		/* 15 */"O consumo de líquidos é essencial para manter nosso corpo hidratado...",
		/* 16 */"Como dito anteriormente, o consumo de alimentos e preparações regionais...",
		/* 17 */"Qual o melhor jeito de realizar suas refeições? O modo que você...",
		/* 18 */"A publicidade de alimentos industrializados é muito frequente e quase...",
		/* 19 */"Se alimentar bem parte não somente das escolhas dos alimentos, mas...",
		/* 20 */"A Regra de Ouro: “Prefira sempre alimentos in natura ou minimamente..."
	]; 

	var dicas_completas = [
		/* 01 */"Comida de Verdade é aquela que respeita as tradições, o meio ambiente e valoriza a agricultura familiar agroecológica.",
		/* 02 */"Abastecimento local e circuitos curtos? Circuito curto é a modalidade na qual existe, no máximo, um intermediário entre o produtor e o consumidor. Esse tipo de modalidade promove o fortalecimento da agricultura familiar local, valoriza o produto local, movimenta a economia e estreita laços entre o produtor e o consumidor. Dê preferência ao produto local, visite as feiras de sua região e busque sempre comida de verdade.",
		/* 03 */"Você sabe o que é a agroecologia? A Agroecologia se caracteriza pelo manejo ecológico dos recursos naturais com propostas de desenvolvimento participativo. Ela leva em consideração todas as interações entre a produção e o consumo e o papel relevante das variáveis sociais. Esse tipo de manejo surgiu como uma alternativa aos problemas gerados pela agricultura convencional.",
		/* 04 */"Desde 2008 o Brasil é considerado o maior mercado mundial de agrotóxicos e isso impacta diretamente no alimento que os consumidores recebem na suas mesas. Em 2015 a Organização Mundial da Saúde publicou um documento onde classificava uma série de agrotóxicos como possíveis causadores de câncer. Outros estudos já associam o uso de agrotóxicos com doenças como o autismo. Nesse sentido é importante diminuir nosso consumo de agrotóxicos, dando preferência a alimentos orgânicos, de produção local, que valorizem a cultura e os hábitos alimentares.",
		/* 05 */"O que é Soberania Alimentar? É o direito dos povos de decidir seu próprio sistema alimentar e produtivo, definir alimentos saudáveis e culturalmente adequados, produzidos de forma sustentável e ecológica, colocar aqueles que produzem, distribuem e consomem alimentos no centro dos sistemas e políticas alimentares, acima das exigências do mercado e das empresas.",
		/* 06 */"A cultura alimentar e as tradições definem a identidade de um povo e são essenciais para a construção da história do mesmo. Contudo, as coisas vem mudando de uns tempos pra cá. O surgimento e desenvolvimento da indústria alimentar, o aumento de consumos processados e ultraprocessados e o grande sucesso dos fast food tem afetado as tradições locais. Daqui a um tempo corremos o risco de não consumir mais alimentos tão tradicionais, que remontam a nossa história, devido a essas influencias. Valorizar a cultura alimentar local é a garantia de que a comida brasileira vai continuar sendo nosso patrimônio.",
		/* 07 */"Alimentos ultraprocessados, você sabe o que são? Alimentos ultraprocessados são formulações industriais feitas inteiramente ou majoritariamente de substâncias extraídas de alimentos (óleos, gorduras, açúcar, amido, proteínas), derivadas de constituintes de alimentos (gorduras hidrogenadas, amido modificado) ou sintetizadas em laboratório com base em matérias orgânicas como petróleo e carvão (corantes, aromatizantes, realçadores de sabor e vários tipos de aditivos usados para dotar os produtos de propriedades sensoriais atraentes). Técnicas de manufatura incluem extrusão, moldagem, e pré-processamento por fritura ou cozimento. (Guia Alimentar para a População Brasileira, 2014)",
		/* 08 */"A primeira coisa a se considerar é que uma dieta saudável e variada, com o consumo de frutas e hortaliças, consegue nos fornecer a quantidade necessária de vitaminas e minerais para manutenção da saúde, e essa é sempre a melhor opção. Portanto, a necessidade do uso de suplementos para esses fins não se justifica. Eles só devem ser usados com orientação de um profissional, em casos específicos onde somente a alimentação não seria capaz de suprir as necessidades do indivíduo.",
		/* 09 */"Por que evitar temperos prontos? Os temperos prontos são largamente utilizados, contudo eles devem ser evitados sempre que possível. Os temperos industrializados possuem alto teor de sódio, além de conservantes e outros produtos industriais. Para se ter uma ideia 1/2 tablete de caldo de galinha, porção descrita no rótulo, possui cerca de 43% da recomendação diária de ingestão de sódio. Um consumo excessivo de sódio pode causar uma série de problemas como a hipertensão, por exemplo. Por isso é importante dar preferência aos temperos naturais, que conferem muito sabor e saúde a sua alimentação. Outro fator relevante vem no sabor. Temperos prontos tem a tendência a deixar as preparações com sabores muito semelhantes, enquanto que os temperos naturais, se bem explorados, podem trazer sabores variados as preparações, tornando sua alimentação mais saborosa e atrativa.",
		/* 10 */"Substituir as principais refeições do dia por lanches rápidos quase nunca são a melhor opção. Grande parte das pessoas que realiza essa substituição caba por consumir alimentos industrializados, que são ricos em sal, gorduras e açúcares e não fazem bem a saúde. Evitar essa substituição e consumir alimentos regionais são boas dicas para se ter hábitos saudáveis.",
		/* 11 */"O consumo de sobremesas é um habito de muitas pessoas e, por isso, fazer boas escolhas é muito importante. Consumir frutas como sobremesas, além de ser muito gostoso, é uma escolha saudável e consciente. O consumo diário de frutas já foi correlacionado com a diminuição do risco de diabetes e obesidade.  Existem também algumas alternativas de doces que podem ser consumidos ocasionalmente, com moderação. Os chocolates amargos são opções mais saudáveis, por exemplo. Existem também as frutas secas, que são mais doces, receitas simples ( como assar maçãs, peras e bananas adicionadas de canela) e compotas de frutas( se feitas com menos açúcar)",
		/* 12 */"O açúcar é um vilão? O açúcar é a forma mais rápida de fornecer energia ao corpo, através da glicose. Contudo, o consumo excessivo de açúcares pode acarretar uma série de problemas porque o corpo terá que fazer um esforço maior para metabolizar a grande quantidade de glicose no sangue. Com o tempo doenças podem surgir, como a diabetes por exemplo. Por isso é importante que o consumo de açúcar seja consciente.",
		/* 13 */"Arroz e feijão, combinação perfeita!! Além de constituir a base da alimentação brasileira, a mistura arroz com feijão é nutricionalmente completa e muito saudável. O arroz possui certas proteínas e o feijão outras. Dessa forma, o consumo dos dois nos fornece uma combinação perfeita de proteínas essenciais. Além disso ambos são ricos em fibras, ferro e vitaminas do complexo B.",
		/* 14 */"Refrigerantes e bebidas açucaradas fazem mal a saúde? Os níveis elevados de açúcar e de ácido nos refrigerantes prejudicam a saúde dos dentes e correm o esmalte. Além disso, há risco de desenvolvimento de doenças da gengiva, como a gengivite. A quantidade elevada de açúcar também é responsável pelo aumento da glicose no sangue e pela resistência à insulina. Esses fatores combinados elevam o risco de desenvolvimento de diabetes do tipo 2. Além disso, o consumo excessivo de açúcar leva a outros problemas como obesidade e aumento de triglicérides no sangue. Outro fator importante, os refrigerantes de cola possuem ácido fosfórico, um composto químico que aumenta a acidez do sangue. Para neutralizar esse aumento, o organismo utiliza o cálcio dos ossos, propiciando a osteoporose. Um estudo feito com mulheres que bebia apenas 3 refrigerantes de cola por semana revelou que elas perderam, em média, 4% de massa óssea de regiões do quadril.",
		/* 15 */"O consumo de líquidos é essencial para manter nosso corpo hidratado e bem mais saudável.  Beber pelo menos 2 litros de líquidos por dia é importante para manter os níveis de hidratação corporal. A agua é a principal fonte de hidratação e deve ser a nossa preferência, contudo existem outras formas de manter a saúde. Pode-se ingerir sucos, chás e outros, sempre prestando atenção nas quantidades de açúcares presentes nesses alimentos. Outra dica muito importante é com relação a adição de açúcar. O ideal é que essa prática seja evitada. Uma boa saída é consumir os sucos de frutas da época, que costumam ser mais doces. Caso não seja possível, a adição do açúcar deve ser mínima.",
		/* 16 */"Como dito anteriormente, o consumo de alimentos e preparações regionais respeita cultura e as tradições locais, além de promover a saúde e o desenvolvimento local. Por isso, procure fazer suas compras em feiras agroecologias ou feiras locais, consumir as frutas da estação e usar receitas tradicionais. Dessa forma você estará valorizando a cultura e promovendo o desenvolvimento local.",
		/* 17 */"Qual o melhor jeito de realizar suas refeições? O modo que você realiza suas refeições é muito importante. Comer em locais tranquilos, sem distrações e com companhias agradáveis são boas dicas para que a refeição possa ser aproveitada integralmente e para que exageros não ocorram.",
		/* 18 */"A publicidade de alimentos industrializados é muito frequente e quase sempre é voltada para o público infantil. A publicidade se usa de personagens, slogans, brinquedos e jingles para vender seu produto, que quase sempre não fazem bem a saúde. É importante ter entendimento quanto ao que é comida de verdade e priorizar esse tipo de habito alimentar, visando sua saúde e de sua família, que nem sempre tem como se defender da publicidade excessiva.",
		/* 19 */"Se alimentar bem parte não somente das escolhas dos alimentos, mas também do modo de preparo, do conhecimento da origem dos alimentos consumidos e afins. Tendo em vista essa linha de pensamento é importante preparar as suas refeições e de sua família, priorizar a comida caseira, regional e que traz inúmeros benefícios a sua saúde. Se a pessoa trabalha fora existem ainda as opções de marmitas, que facilitam o dia-a-dia e permitem o consumo de alimentos saudáveis.",
		/* 20 */"A Regra de Ouro – “Prefira sempre alimentos in natura ou minimamente processados e preparações culinárias a alimentos ultraprocessados. Opte por água, leite e frutas no lugar de refrigerantes, bebidas lácteas e biscoitos recheados; não troque a “comida feita na hora” (caldos, sopas, saladas, molhos, arroz e feijão, macarronada, refogados de legumes e verduras, farofas, tortas) por produtos que dispensam preparação culinária (“sopas de pacote”, “macarrão instantâneo”, pratos congelados prontos para aquecer, sanduíches, frios e embutidos, maioneses e molhos industrializados, misturas prontas para tortas) e fique com sobremesas caseiras, dispensando as industrializadas” (Guia Alimentar da População Brasileira, 2014)"
	]

	var comentario_pontuacao = [
		/* 00 */"Você precisa mudar urgentemente seus hábitos alimentares! Tente novamente.",
		/* 01 */"Mude seus hábitos alimentares e tente novamente.",
		/* 02 */"Mude seus hábitos alimentares e tente novamente.",
		/* 03 */"Pelo visto, você já sabe o que é comida de verdade. Mas ainda precisa saber diferenciar o que não é... Persista, que o sucesso está ao seu alcance ;)",
		/* 04 */"Para obter a máxima pontuação, você precisa acertar tudo em menos tempo. Que tal bater o seu recorde hoje?",
		/* 05*/"Sucesso! Você é especialista em comida de verdade! Que tal publicar fotos do seu prato nas redes sociais?​"
	];

	var descricao_nivel_1 = [
		"Hambúrguer", // 1
		"Mortadela", // 2
		"Frango frito", // 3
		"Hambúrguer", // 4
		"Cereja", // 5
		"Carne de sol com mandioca", // 6
		"Biscoito recheado", // 7
		"Cenoura", // 8
		"Guloseimas", // 9
		"Batatinha chips", // 10

		"Linguiça", // 1
		"Tomate", // 2
		"Donuts", // 3
		"Embutidos", // 4
		"Cereal", // 5
		"Rabanete", // 6
		"Laranja", // 7
		"Embutidos", // 8
		"Macarrão instantâneo", // 9
		"Abacate", // 10

		"Pamonha", // 1
		"Pizza", // 2
		"Feijoada", // 3
		"Melancia", // 4
		"Embutidos", // 5
		"Salame", // 6
		"Salgadinho", // 7
		"Salsicha", // 8
		"Ovo", // 9
		"Frango Frito" // 10
	];

	var descricao_nivel_2 = [
		"Feira agroecologica", // 1
		"Feira organica", // 2
		"Fast food", // 3
		"Food truck", // 4
		"Drive thru", // 5
		"Feira", // 6
		"Feira", // 7
		"Food truck", // 8
		"Sorveteria", // 9
		"Feira", // 10

		"Food truck", // 1
		"Fast food", // 2
		"Supermercado", // 3
		"Food truck", // 4
		"Mercadinho", // 5
		"Food Truck", // 6
		"Food truck", // 7
		"Supermercado", // 8
		"Mercearia", // 9
		"Food truck", // 10

		"drive thru", // 1
		"food truck", // 2
		"Feira organica", // 3
		"feira orgânica", // 4
		"food truck", // 5
		"Drive thru", // 6
		"Fast food", // 7
		"Feira", // 8
		"Fast food", // 9
		"Fast food" // 10
	];

	var descricao_nivel_3 = [
		"Monocultura", // 1
		"Agricultura orgânica", // 2
		"Transgênicos", // 3
		"Manipulação genética", // 4
		"Transgênicos", // 5
		"Transgênicos", // 6
		"Agricultura orgânica", // 7
		"Monocultura", // 8
		"Agricultura orgânica", // 9
		"Monocultura", // 10

		"Transgênicos", // 1
		"Monocultura", // 2
		"Monocultura", // 3
		"Monocultura", // 4
		"Agroecologia", // 5
		"Monocultura", // 6
		"Uso extensivo de agrotóxicos", // 7
		"Monocultura", // 8
		"Monocultura", // 9
		"Monocultura", // 10

		"Agroecologia", // 1
		"Monocultura", // 2
		"Agricultura familiar", // 3
		"Agricultura familiar", // 4
		"Monocultura", // 5
		"Agricultura familiar", // 6
		"Agricultura familiar", // 7
		"Transgênicos", // 8
		"Transgênicos", // 9
		"Agroecologica" // 10
	];

	var descricao_nivel_4 = [
		"Produção orgânica", // 1
		"Agrotóxico", // 2
		"Agricultura familiar", // 3
		"Agrotóxico", // 4
		"Produção orgânica", // 5
		"Produção orgânica", // 6
		"Produção orgânica", // 7
		"Produção orgânica", // 8
		"Produção orgânica", // 9
		"Agroecologia", // 10

		"Agroecologia", // 1
		"Produção orgânica", // 2
		"Produção orgânica", // 3
		"Produção orgânica", // 4
		"Produção orgânica", // 5
		"Produção orgânica", // 6
		"Agrotóxicos", // 7
		"Agrotóxicos", // 8
		"Agrotóxico", // 9
		"agrotóxico", 	// 10

		"Agrotóxico", // 1
		"produção orgânica", // 2
		"Uso de agrotóxicos", // 3
		"Produção organica", // 4
		"agrotóxicos", // 5
		"agrotóxicos", // 6
		"Produção orgânica", // 7
		"Produção orgânica", // 8
		"Produção orgânica", // 9
		"Produção orgânica" // 10
	];

	var descricao_nivel_5 = [
		"Fast food", // 1
		"Fast food", // 2
		"Fast food", // 3
		"Feira", // 4
		"Feira", // 5
		"Feira", // 6
		"Supermercado", // 7
		"Fast food", // 8
		"Fast food", // 9
		"Feira", // 10

		"Feira", // 1
		"Feira", // 2
		"Feira", // 3
		"Mercado", // 4
		"Mercadinho", // 5
		"Fast food", // 6
		"Supermercado", // 7
		"Feira", // 8
		"Fast food", // 9
		"Fast food", // 10

		"Supermercado", // 1
		"Supermercado", // 2
		"Fast food", // 3
		"Supermercado", // 4
		"Fast food", // 5
		"Supermercado", // 6
		"Feira", // 7
		"Fast food", // 8
		"Feira", // 9
		"Supermercado" // 10
	];

	var descricao_nivel_6 = [
		"Laranja", // 1
		"Fast food", // 2
		"Hambúrguer", // 3
		"Melancia", // 4
		"Frutas", // 5
		"Fast food", // 6
		"Cebola empanada", // 7
		"Batata frita", // 8
		"Frutas", // 9
		"Frutas", // 10

		"Feijoada", // 1
		"Banana", // 2
		"Laranja", // 3
		"Fast food", // 4
		"Maçã", // 5
		"Tangerina", // 6
		"Frutas", // 7
		"Bobó de camarão", // 8
		"Frutas", // 9
		"Feijoada", // 10

		"Fast food", // 1
		"Frutas", // 2
		"Framboesa", // 3
		"Banana", // 4
		"Fast food", // 5
		"Laranja", // 6
		"Frutas", // 7
		"Frutas", // 8
		"Donuts", // 9
		"Fast food" // 10
	];

	var descricao_nivel_7 = [
		"Alface", // 1
		"Melancia", // 2
		"Feijão", // 3
		"Rabanete", // 4
		"Caponata", // 5
		"Queijo caseiro", // 6
		"Embutidos", // 7
		"Salada", // 8
		"Pasta de amendoim caseira", // 9
		"Tomate", // 10

		"Lasanha congelada", // 1
		"Chester", // 2
		"Cereja", // 3
		"Presunto", // 4
		"Lasanha congelada", // 5
		"Mortadela", // 6
		"Pasta de alho caseira", // 7
		"Frutas com iogurte", // 8
		"Caponata", // 9
		"Industrializados", // 10

		"Cebola", // 1
		"Tomate", // 2
		"Yakisoba congelado", // 3
		"Laranja", // 4
		"Pasta de alho caseira", // 5
		"Hommus", // 6
		"Queijo minas", // 7
		"Embutidos", // 8
		"Embutidos", // 9
		"Cebola" // 10
	];

	var descricao_nivel_8 = [
		"Beterraba", // 1
		"Bacon", // 2
		"Sorvete", // 3
		"Carambola", // 4
		"Caqui", // 5
		"Limão", // 6
		"Abóbora", // 7
		"Jatobá", // 8
		"Embutido", // 9
		"Hambúrguer", // 10

		"Donuts", // 1
		"Jabuticaba", // 2
		"Sapoti", // 3
		"Iogurte de chocolate", // 4
		"Biscoito recheado", // 5
		"Pizza", // 6
		"Chocolate", // 7
		"Cachorro-quente", // 8
		"Esfirra árabe", // 9
		"Tangerina", // 10

		"Fast food", // 1
		"Cachorro-quente", // 2
		"Pizza", // 3
		"Embutidos", // 4
		"Biscoito recheado", // 5
		"Pizza", // 6
		"Hamburguer", // 7
		"Hamburguer", // 8
		"Amora", // 9
		"Sorvete" // 10
	];

	var descricao_nivel_9 = [
		"Tempero pronto", // 1
		"Molho pronto", // 2
		"Tempero pronto", // 3
		"Molho shoyo", // 4
		"Tempero pronto", // 5
		"Tempero pronto", // 6
		"Molho para massas industrializado", // 7
		"Temperos naturais", // 8
		"Caldos industrializados", // 9
		"Molho industrializado", // 10

		"Molho de pimenta", // 1
		"Especiarias naturais", // 2
		"Especiarias naturais", // 3
		"Tempero pronto", // 4
		"Molho de tomate industrializado", // 5
		"Especiarias naturais", // 6
		"Temperos naturais", // 7
		"Temperos prontos", // 8
		"Temperos prontos", // 9
		"Temperos naturais", // 10

		"Especiarias", // 1
		"Tempero pronto", // 2
		"Tempero pronto", // 3
		"Temperos naturais", // 4
		"Temperos naturais", // 5
		"Molho de tomate industrializado", // 6
		"Temperos industrializados", // 7
		"Molhos industrializados", // 8
		"Temperos naturais", // 9
		"Molhos prontos" // 10
	];

	var descricao_nivel_10 = [
		"Prato tradicional", // 1
		"Salada", // 2
		"Lasanha", // 3
		"Salada", // 4
		"Frango frito", // 5
		"Fast food", // 6
		"Marmita", // 7
		"Batata frita", // 8
		"Kibe", // 9
		"Pizza", // 10

		"Hamburguer", // 1
		"Tacos", // 2
		"Hambúrguer", // 3
		"Cachorro-quente", // 4
		"Pastel", // 5
		"Salada de grão de bico", // 6
		"Hambúrguer", // 7
		"Quinoa", // 8
		"Prato tradicional", // 9
		"Prato tradicional", // 10

		"Cachorro-quente", // 1
		"Comida congelada", // 2
		"Quibe vegetariano", // 3
		"Batata frita", // 4
		"Prato tradicional", // 5
		"Hambúrguer", // 6
		"Pastel", // 7
		"Tacos", // 8
		"Pizza", // 9
		"Frango frito" // 10
	];

	var descricao_nivel_11 = [
		"Tangerina", // 1
		"Torta", // 2
		"Doces", // 3
		"Bombons", // 4
		"Docinhos", // 5
		"Maçã", // 6
		"Jujubas", // 7
		"Melancia", // 8
		"Cestinha de chocolate", // 9
		"Pettit gateau", // 10

		"Bolo", // 1
		"Frutas", // 2
		"Macaron", // 3
		"Cerejas", // 4
		"Laranja", // 5
		"Doces", // 6
		"Bombons", // 7
		"Bolo", // 8
		"Uvas", // 9
		"Pudim", // 10

		"Cupkake", // 1
		"Gotas de chocolate", // 2
		"Bananas", // 3
		"Doces", // 4
		"Brigadeiros", // 5
		"Brigadeiros", // 6
		"Laranja", // 7
		"Mousse", // 8
		"Pettit gateau", // 9
		"Banana" // 10
	];

	var descricao_nivel_12 = [
		"Bacuri", // 1
		"Donut", // 2
		"Pettit suisse", // 3
		"Biscoito recheado", // 4
		"Bebida achocolatada", // 5
		"Bebica achocolatada", // 6
		"Achocolatado em pó", // 7
		"Bebida láctea achocolatada", // 8
		"Bebida láctea achocolatada", // 9
		"Aveia", // 10

		"Cacau em pó", // 1
		"Iogurte", // 2
		"Suco de laranja", // 3
		"Bebida achocolatada", // 4
		"Sorvete", // 5
		"Cajuzinho do cerrado", // 6
		"Bebida láctea achocolatada", // 7
		"Cacau em pó", // 8
		"Bebida láctea achocolatada", // 9
		"Bebida láctea achocolatada", // 10

		"Sorvete", // 1
		"Aveia", // 2
		"Biscoito recheado", // 3
		"Graviola", // 4
		"Maracujá", // 5
		"Bolinho industrializado", // 6
		"Cagaita", // 7
		"Iogurte de chocolate", // 8
		"Cacau em pó", // 9
		"Bebida láctea achocolatada" // 10
	];

	var descricao_nivel_13 = [
		"Arroz com feijão", // 1
		"Pão", // 2
		"Arroz com feijão", // 3
		"Arroz com frango", // 4
		"Arroz com feijão", // 5
		"Milho assado", // 6
		"Massa recheada", // 7
		"Batata sauté", // 8
		"Pão francês", // 9
		"Batata rústica", // 10

		"Abóbora", // 1
		"Salmão com bróculis", // 2
		"Doritos", // 3
		"Batata chips", // 4
		"Espaguete ao posto", // 5
		"Salada com frango", // 6
		"Abobrinha", // 7
		"Muffin", // 8
		"Bolo de fubá", // 9
		"Quinoa", // 10

		"Arroz doce", // 1
		"Arroz à primavera", // 2
		"Tomate", // 3
		"Purê de batatas", // 4
		"Pão", // 5
		"Miojo", // 6
		"Peito de frango empanado com arroz e bróculis", // 7
		"Moqueca de peixe e camarão", // 8
		"Arroz com salada e carne", // 9
		"Aveia" // 10
	];

	var descricao_nivel_14 = [
		"Suco natural", // 1
		"Água de coco", // 2
		"Água", // 3
		"Água", // 4
		"Água", // 5
		"Suco industrializado", // 6
		"Suco natural", // 7
		"Suco natural", // 8
		"Refrigerante", // 9
		"Suco natural", // 10

		"Água", // 1
		"Suco industrializado", // 2
		"Suco natural", // 3
		"Refrigerante", // 4
		"Suco industrializado", // 5
		"Água de coco", // 6
		"Suco natural", // 7
		"Refrigerante", // 8
		"Suco natural", // 9
		"Refrigerante", // 10

		"Suco industrializado", // 1
		"Água", // 2
		"Refrigerante", // 3
		"Água de coco", // 4
		"Suco natural", // 5
		"Água", // 6
		"Suco concentrado industrializado", // 7
		"Água", // 8
		"Suco natural", // 9
		"Suco natural" // 10
	];

	var descricao_nivel_15 = [
		"Refrigerante", // 1
		"Suco natural", // 2
		"Suco industrializado", // 3
		"Repositor hidroeletreolitico", // 4
		"Chimarrão", // 5
		"Refrigerante", // 6
		"Chá", // 7
		"Tereré", // 8
		"Refrigerante", // 9
		"Energético", // 10

		"Refrigerante", // 1
		"Suco industrializado", // 2
		"Suco natural", // 3
		"Suco natural", // 4
		"Suco industrializado", // 5
		"Suco natural", // 6
		"Suco natural", // 7
		"Suco concentrado industrializado", // 8
		"Água", // 9
		"Suco natural", // 10

		"Tereré", // 1
		"Energético", // 2
		"Refrigerante", // 3
		"Suco industrializado", // 4
		"Repositor hidroeletrolitico", // 5
		"Refrigerante", // 6
		"Refrigerante", // 7
		"Suco industrializado", // 8
		"Suco industrializado", // 9
		"Refrigerante" // 10
	];

	var descricao_nivel_16 = [
		"Acarajé", // 1
		"Macaron", // 2
		"Hambúrguer", // 3
		"Chili", // 4
		"Massa", // 5
		"Rolinho privamera", // 6
		"Hambúrguer", // 7
		"Hambúrguer", // 8
		"Caldo verde", // 9
		"Batata frita com bacon", // 10

		"Frango empanado", // 1
		"Sanduiche", // 2
		"Feijoada", // 3
		"Quesadinhas", // 4
		"Arroz com pequi", // 5
		"Carne assada com batatas", // 6
		"Moqueca", // 7
		"Pão de queijo", // 8
		"Chocolate", // 9
		"Frango ao molho pardo", // 10

		"Sorvete", // 1
		"Frango com quiabo", // 2
		"Hambúrguer", // 3
		"Barreado", // 4
		"Frango frito", // 5
		"Hambúrguer", // 6
		"Pizza", // 7
		"Pizza", // 8
		"Pães", // 9
		"Linguiça" // 10
	];

	var descricao_nivel_17 = [
		"Entre amigos", // 1
		"Em família", // 2
		"Trabalhando", // 3
		"Em frente à TV", // 4
		"Em família", // 5
		"Em família", // 6
		"Em frente à TV", // 7
		"Em frente ao computador", // 8
		"Entre amigos", // 9
		"No sofá", // 10

		"Em frente ao computador", // 1
		"Em frente à TV", // 2
		"Trabalhando", // 3
		"Em família", // 4
		"Em frente à TV", // 5
		"No sofá", // 6
		"Entre amigos", // 7
		"Em frente à TV", // 8
		"Em frente à TV", // 9
		"No sofá", // 10

		"Trabalhando", // 1
		"Em frente ao computador", // 2
		"Entre amigos", // 3
		"Em frente ao computador", // 4
		"Dirigindo", // 5
		"Em frente à TV", // 6
		"Em frente ao computador", // 7
		"Em família", // 8
		"Em frente ao computador", // 9
		"Em família" // 10
	];

	var descricao_nivel_18 = [
		"Pão de queijo", // 1
		"Açaí", // 2
		"Biscoito recheado", // 3
		"Pitanga", // 4
		"Melancia", // 5
		"Manga", // 6
		"Picolé", // 7
		"Goiaba", // 8
		"Sanduíche natural", // 9
		"Caju", // 10

		"Salada de alface", // 1
		"Pizza pronta", // 2
		"Uvas", // 3
		"Abacaxi", // 4
		"Lasanha pronta", // 5
		"Bolo de milho verde", // 6
		"Cereja", // 7
		"Comida pronta congelada", // 8
		"Salada de folhas", // 9
		"Manga", // 10

		"Refrigerante", // 1
		"Jaboticaba", // 2
		"Banana", // 3
		"Iogurte industrializado", // 4
		"Morango", // 5
		"Hamburguer", // 6
		"Graviola", // 7
		"Doces", // 8
		"Achocolatado", // 9
		"Lanche pronto industrializado" // 10
	];

	var descricao_nivel_19 = [
		"Lanchonete", // 1
		"Prato feito (PF)", // 2
		"Lanche industrializado", // 3
		"Lanche industrializado", // 4
		"Lanchonete", // 5
		"Lanche pronto", // 6
		"Lanche pronto", // 7
		"Prato a la carte", // 8
		"Sanduíche industrializado", // 9
		"Cozinhar", // 10

		"Comida industrializada", // 1
		"Tomar preparado industrializado", // 2
		"Cozinhar", // 3
		"Lanche pronto", // 4
		"Cozinhar", // 5
		"Lanche rico em gordura e açúcar", // 6
		"Sanduíche pronto", // 7
		"Marmita", // 8
		"Sanduíche de rua", // 9
		"Sanduíche industrializado", // 10

		"Cozinhar", // 1
		"Cozinhar", // 2
		"Lanche pronto", // 3
		"Cozinhar", // 4
		"Self service", // 5
		"Cozinhar", // 6
		"Cozinhar", // 7
		"Cozinhar", // 8
		"Cozinhar", // 9
		"Prato feito (PF)" // 10
	];

	var descricao_nivel_20 = [
		"Sanduíche", // 1
		"Pizza", // 2
		"Pizza", // 3
		"Hamburguer", // 4
		"Cachorro-quente", // 5
		"Arroz com pequi", // 6
		"Romã", // 7
		"Batata chips", // 8
		"Hamburguer", // 9
		"Hamburguer", // 10

		"Refrigerante", // 1
		"Macarrão instantâneo", // 2
		"Bacuri", // 3
		"Frango frito", // 4
		"Cenouras", // 5
		"Hamburguer", // 6
		"Macarrão instantâneo", // 7
		"Arroz com feijão", // 8
		"Moqueca de camarão", // 9
		"Tamarindo", // 10

		"Salada", // 1
		"Arroz carreteiro", // 2
		"Biscoito recheado", // 3
		"Acarajé", // 4
		"Jujubas", // 5
		"Lanche industrializado", // 6
		"Lanche industrializado", // 7
		"Gotas de chocolate", // 8
		"Salgadinhos", // 9
		"Nuggets" // 10
	];

 	var tempo_jogador_por_nivel;
 	var todos_os_pontos;
 	var todos_os_pontos_tempo;
 	var somLigado; 
 	var todos_os_pontos_total; 
 	var aux_tempo_jogador_por_nivel;
 	var aux_todos_os_pontos;
 	var aux_todos_os_pontos_tempo;
 	var aux_somLigado;
 	var aux_todos_os_pontos_total;
 	var primeira_vez = false;

	// ARMAZENAMENTO POR LOGIN

	//localStorage.clear(); // Comando para apagar todo o armazenamento local;
	var jogadores = [null, null, null, null, null]; 
	var aux_jogadores;
	var jogador_atual = 0; // Jogador de 0 a 3, definido pelo input do nome 

 	if (localStorage.getItem("jogadores") === null) {
 		cria_jogadores_padrao(); 
 		armazena_pontos(); 
 	} else {
 		carrega_jogadores(); 
 	}

 	// Variáveis temporárias: 

 	// Lógicas
 	var relogio_comecou = false;
 	var desistiu = false; 
 	var tempo_acabou = false; 
 	var estaNoMenu = false;

 	// Númericas
 	var pontuacao_total = 0; 
 	var pontuacao_tempo_atual = 0; 
 	var nivel_atual = 0;
 	var contador_opcoes = 0;

 	// Vetores
 	var tempo_niveis = [59, 59, 49, 49, 39, 39, 29, 29, 29, 29, 19, 19, 19, 19, 19, 13, 13, 13, 13, 10];
 	//var tempo_niveis = [59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59]; // Para testes! todos os níveis vão ter 59 segundos de duração.
 	var marcador_resposta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 0 = branco, 1 = verde, 2 = vermelho 	
 	var resposta_jogador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

 	// Sem valores iniciais
 	var qtd_estrelas_atual; 
 	var intervalo_relogio;
 	var tempo_inicio_milisegundos;
 	var tempo_fim_milisegundos; 
 	var tempo_milisegundos; 
	
 	// Cria as Respostas dos Níveis:
	var resposta_pergunta = new Array(QUANTIDADE_NIVEIS);
	for (var contador = 0; contador < QUANTIDADE_OPCOES; contador++) {
		resposta_pergunta[contador] = new Array(QUANTIDADE_OPCOES);
	}
	for (var contador = 0; contador < QUANTIDADE_NIVEIS; contador++) {
		if (contador === 0) { 
			resposta_pergunta[contador] = [3, 2, 3, 3, 1, 2, 2, 1, 3, 2];
		} else if (contador === 1) {
			resposta_pergunta[contador] = [1, 1, 3, 3, 2, 1, 1, 3, 2, 1];
		} else if (contador === 2) {
			resposta_pergunta[contador] = [3, 1, 3, 3, 2, 3, 1, 3, 1, 3];
		} else if (contador === 3) {
			resposta_pergunta[contador] = [3, 1, 3, 1, 3, 3, 2, 2, 2, 2];
		} else if (contador === 4) {
			resposta_pergunta[contador] = [2, 2, 2, 1, 1, 1, 3, 2, 3, 1];
		} else if (contador === 5) {
			resposta_pergunta[contador] = [3, 1, 1, 2, 3, 1, 1, 1, 3, 3];
		} else if (contador === 6) {
			resposta_pergunta[contador] = [2, 2, 3, 2, 2, 2, 1, 3, 3, 2];
		} else if (contador === 7) {
			resposta_pergunta[contador] = [1, 2, 2, 1, 1, 1, 1, 1, 3, 2];
		} else if (contador === 8) {
			resposta_pergunta[contador] = [3, 2, 2, 3, 3, 2, 2, 1, 3, 2];
		} else if (contador === 9) {
			resposta_pergunta[contador] = [1, 1, 3, 1, 3, 2, 1, 2, 2, 2];
		} else if (contador === 10) {
			resposta_pergunta[contador] = [1, 2, 3, 2, 2, 1, 3, 1, 2, 3];
		} else if (contador === 11) {
			resposta_pergunta[contador] = [2, 3, 2, 3, 3, 2, 3, 2, 3, 1];
		} else if (contador === 12) {
			resposta_pergunta[contador] = [1, 2, 1, 1, 1, 2, 2, 3, 3, 2];
		} else if (contador === 13) {
			resposta_pergunta[contador] = [3, 2, 3, 2, 2, 1, 3, 2, 1, 2];
		} else if (contador === 14) {
			resposta_pergunta[contador] = [3, 1, 2, 2, 1, 2, 1, 2, 2, 2];
		} else if (contador === 15) {
			resposta_pergunta[contador] = [1, 3, 2, 3, 2, 2, 2, 2, 1, 2];
		} else if (contador === 16) {
			resposta_pergunta[contador] = [1, 1, 3, 2, 1, 1, 2, 3, 1, 3];
		} else if (contador === 17) {
			resposta_pergunta[contador] = [3, 2, 1, 3, 2, 3, 1, 2, 3, 3];
		} else if (contador === 18) {
			resposta_pergunta[contador] = [1, 3, 2, 3, 2, 3, 3, 3, 3, 1];
		} else if (contador === 19) {
			resposta_pergunta[contador] = [3, 3, 2, 3, 2, 1, 1, 2, 2, 2];
		}

		/*if (contador === 0) { // para testes! (totas as alternativas corretas será a primeira)
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 1) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 2) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 3) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 4) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 5) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 6) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 7) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 8) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 9) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 10) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 11) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 12) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 13) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 14) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 15) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 16) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 17) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 18) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		} else if (contador === 19) {
			resposta_pergunta[contador] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		}*/

	}

	window.onbeforeunload = function() { return "Seu progresso atual será perdido!"; }; // Alerta o usuário caso ele tente sair do jogo fechando o browser.
	
	// Inicio:
	mostra_tela_de_carregamento();
	
	// FUNÇÕES:

	//
	// Função: Iniciar uma música de fundo
	// Funcionalidade: Caso um jogador tenha em suas configurações a opção "música de fundo" ativada, 
	//				   esta função inicia o loop do arquivo mp3. Jogadores novos por padrão começam com 
	//				   essa configuração ativada. 
	//
	function toca_musica_de_fundo(audio) {
		if (verifica_statusSom_jogador(jogador_atual) === true) {
			tocar_musicaLoop(audio);
		} else {
			parar_musica(audio);
		}	
	}

	//
	// Função: Verificar o status da configuração de áudio de um jogador.
	// Funcionalidade: Retorna se o áudio de um jogador está ligado ou desligado.
	//
	function verifica_statusSom_jogador(numero_jogador) { 
		if (jogadores[numero_jogador].somLigado === true) {
			return true;
		} else {
			return false;
		}
	}

	//
	// Função: Pausar uma música.
	// Funcionalidade: Para uma música qualquer, além de voltar o tempo no início.
	//
	function parar_musica(audio) {
		audio.pause();
		audio.currentTime = 0;
	}

	//
	// Função: Tocar uma música em loop.
	// Funcionalidade: Toca qualquer arquivo de áudio em loop.
	//
	function tocar_musicaLoop(audio) {
		audio.addEventListener("ended", function() { audio.currentTime = 0; audio.play(); }, false );
		audio.play();	
	}

	//
	// Função: Mostra a tela de carregamento inicial.
	// Funcionalidade: Ao clicar em qualquer parte da tela, a função chama_telaLogin_adequada() será chamada.
	//
	function mostra_tela_de_carregamento() {
		$("#container").append("<div id='tela_de_carregamento'></div>");
		$("#tela_de_carregamento").append("Toque ou clique para jogar!<br>");
		$("#tela_de_carregamento").append("<img src='imagens/outros/logo_carregamento.png' class='logo_carregamento'>");

		$('#tela_de_carregamento').click(function(){	
			$("#tela_de_carregamento").remove();
			chama_telaLogin_adequada();
		});
	}

	//
	// Função: Chamar a função de login adequada de acordo com uma condição lógica
	// Funcionalidade: Caso existam jogadores, o menu de escolha será chamado, 
	// 				   caso contrário, a função de criar jogadores será ativada.
	//
	function chama_telaLogin_adequada() {
		if (tem_jogador() == true) {
			coloca_tela_escolha_apelido();				
		} else {
			criar_novo_perfil();	
		}
	}

	//
	// Função: Verificar se existem contas de jogadores.
	// Funcionalidade: Retorna um valor lógico a respeito da existência de um jogador na base de dados local. 
	//
	function tem_jogador() {
		var tem_jogador = false;
		for (var contador = 0; contador < MAX_JOGADORES; contador++) {
			if (jogadores[contador].nome != null) {
				tem_jogador = true;
			}
		}
		return tem_jogador; 
	}

	//
	// Função: Verificar qual "slot" de jogadores está disponível no momento.
	// Funcionalidade: Retorna o valor do jogador disponível (do slot vazio) em ordem crescente. 
	//
	function verifica_jogador_disponivel() {
		var jogador_disponivel = -1;
		for (var contador = 0; contador < MAX_JOGADORES; contador++) {
			if (jogadores[contador].nome == null) {
				jogador_disponivel = contador; 
				break;
			}
		}
		return jogador_disponivel;
	}

	//
	// Função: Dá funcionalidade ao botão logout. 
	// Funcionalidade: Ao clicar no botão logout, a função pausa a música e
	//				   retorna o usuário para a tela inicial (escolha de apelido).
	//	
	function coloca_funcao_botao_logout() {
		$("#holder_botao_logout").click(function() {
			$("#menu_de_opcoes").remove();
			// Para a música.
			parar_musica(musica);
			// Volta para a tela inicial.
			coloca_tela_escolha_apelido();
		});
	}	

	//
	// Função: Cria o menu de opções e dá funcionalidade aos seus botões.
	// Funcionalidade: Guiar o usuário através dos principais menus do jogo,
	//				   que são: Jogar, Recordes, Configurações e Créditos. 
	//	
	function mostra_menu_de_opcoes() {
		remove_divs_para_opcoes();
		parar_musica(musica_jogo);
		toca_musica_de_fundo(musica);
		$("#container").append("<div id='menu_de_opcoes'></div>");	
		coloca_cabecalho($("#menu_de_opcoes"), "Bem vindo(a) "+jogadores[jogador_atual].nome+"!", "#56231b");		
		coloca_botao_logOut();
		coloca_botao_audio("menuEscolhas"); 
		$("#menu_de_opcoes").append("<div id='holder_botoes_menu_opcoes'></div>");
		$("#holder_botoes_menu_opcoes").append("<div class='botao corAzul5' id='botao_de_niveis'> <img src='imagens/botoes/botao_play.png' class='imagem_botao_play'></div>");	
		$("#holder_botoes_menu_opcoes").append("<div class='botao corAzul5' id='botao_de_recordes'> <img src='imagens/botoes/botao_recordes.png' class='imagem_botao_recordes'></div>");
		$("#holder_botoes_menu_opcoes").append("<div class='botao corAzul5' id='botao_configuracoes'> <img src='imagens/botoes/botao_configuracoes.png' class='imagem_botao_configuracoes'> </div>");	
		$("#holder_botoes_menu_opcoes").append("<div class='botao corAzul5' id='botao_de_creditos'> <img src='imagens/botoes/botao_creditos.png' class='imagem_botao_credito'> </div>");		
		
		$('#botao_de_niveis').click(function(){
			$("#menu_de_opcoes").remove();
   			mostra_menu_de_niveis();
		});

		$('#botao_de_creditos').click(function(){
			$("#menu_de_opcoes").remove();
   			mostra_menu_de_creditos();
		});

		$('#botao_configuracoes').click(function(){
			$("#menu_de_opcoes").remove();
			mostra_menu_configuracoes();
		});

		$('#botao_de_recordes').click(function(){
			$("#menu_de_opcoes").remove();
			mostra_menu_recordes();
		});
	}

	//
	// Função: Cria o menu de configurações e dá funcionalidade ao seus respectivos botões.
	// Funcionalidade: Guia o usuário através das 3 oções de configuração: Excluir jogador, Desligar música e Efeitos sonoros. 
	//	
	function mostra_menu_configuracoes() {
		$("#container").append("<div id='tela_de_configuracoes'></div>");
		coloca_cabecalho_com_icone($("#tela_de_configuracoes"), "Configurações", "#56231b","<img src='imagens/icones/engrenagem.png' class='icone'>");
		coloca_botao_voltar($("#tela_de_configuracoes"), mostra_menu_de_opcoes);
		$("#tela_de_configuracoes").append("<div id='holder_botoes_configuracoes'></div>");		
		coloca_botoes_menuConfiguracoes();

		//
		// Função: Colocar o botão "Excluir jogador" na tela do menu de configurações.
		// Funcionalidade: Adiciona o botão "Excluir jogador" e sua funcionalidade na tela.
		//	
		function coloca_botao_excluirJogadores() {
			$("#holder_botoes_configuracoes").append("<div class='botao_configuracao' id='excluir_jogador'> <img src='imagens/botoes/botao_excluirJogador.png' class='botao_config_excluirJogador'> </div>");
		
			$("#excluir_jogador").click(function() {
				coloca_menu_excluirJogador();
			});
		}

		//
		// Função: Colocar o botão "Ligar/Desligar efeitos sonoros" na tela do menu de configurações.
		// Funcionalidade: Adiciona o botão "Ligar/Desligar efeitos sonoros" e sua funcionalidade da tela.
		//	
		function coloca_botao_ligaOuDesliga_efeitos() {
			if (jogadores[jogador_atual].efeitosLigado === true) {
				$("#holder_botoes_configuracoes").append("<div class='botao_configuracao' id='botao_desliga_efeitos'> <img src='imagens/botoes/botao_desligarEfeitosSonoros.png' class='botao_config_desligarEfeitosSonoros'> </div>");		
			} else {
				$("#holder_botoes_configuracoes").append("<div class='botao_configuracao' id='botao_desliga_efeitos'> <img src='imagens/botoes/botao_ligarEfeitosSonoros.png' class='botao_config_ligarEfeitosSonoros'> </div>");		
			}
			$("#botao_desliga_efeitos").click(function() {
				ligaOuDesliga_efeito_jogador(jogador_atual);
				$("#botao_desliga_efeitos").remove();
				coloca_botoes_menuConfiguracoes();
			});
		}

		//
		// Função: Colocar o botão "Ligar/Desligar música" na tela do menu de configurações.
		// Funcionalidade: Adiciona o botão "Ligar/Desligar música" e sua funcionalidade da tela.
		//	
		function coloca_botao_ligaOuDesliga_musica() {
			if (jogadores[jogador_atual].somLigado === true) {
				$("#holder_botoes_configuracoes").append("<div class='botao_configuracao' id='botao_ligaDesliga_musica'> <img src='imagens/botoes/botao_desligarMusica.png' class='botao_config_desligarMusica'> </div>");
			} else {
				$("#holder_botoes_configuracoes").append("<div class='botao_configuracao' id='botao_ligaDesliga_musica'> <img src='imagens/botoes/botao_ligarMusica.png' class='botao_config_ligarMusica'> </div>");
			}
			$("#botao_ligaDesliga_musica").click(function() { 
				ligaOuDesliga_musica_jogador(jogador_atual);
				$("#botao_ligaDesliga_musica").remove();
				coloca_botoes_menuConfiguracoes();
			});
		}

		//
		// Função: Colocar todos os botões na tela de configuração.
		// Funcionalidade: Chama todas as funções em ordem para a inserção dos botões na tela de configurações.
		//	
		function coloca_botoes_menuConfiguracoes() {
			remove_todos_osBotoes();
			coloca_botao_excluirJogadores();
			coloca_botao_ligaOuDesliga_musica();
			coloca_botao_ligaOuDesliga_efeitos();
		}

		//
		// Função: Remover todos os botões da tela de configurações.
		// Funcionalidade: Remove os botões e suas respectivas funções do menu de configurações. 
		//	
		function remove_todos_osBotoes() {
			$("#excluir_jogador").remove();
			$("#botao_desliga_efeitos").remove();
			$("#botao_ligaDesliga_musica").remove();
		}
	}

	//
	// Função: Ligar ou desligar a música de fundo.
	// Funcionalidade: Alterna as configurações do usuário de música de fundo entre
	//				   ligado ou desligado, salvando a configuração ao final. 
	//
	function ligaOuDesliga_musica_jogador(numero_jogador) {
		jogadores[numero_jogador].somLigado = !jogadores[numero_jogador].somLigado;
		toca_musica_de_fundo(musica);	
		armazena_pontos();
	}

	//
	// Função: Definir se o jogador quer ou não efeitos sonoros.
	// Funcionalidade: Altera a configuração do jogador de efeitos sonoros, salvando
	//				   ela ao final da função.
	//	
	function ligaOuDesliga_efeito_jogador(numero_jogador) {
		if (jogadores[numero_jogador].efeitosLigado === true) {
			jogadores[numero_jogador].efeitosLigado = false;
		} else {
			jogadores[numero_jogador].efeitosLigado = true;
		}
		armazena_pontos();
	}

	//
	// Função: Apresentar a tela inicial do menu de recordes. 
	// Funcionalidade: Cria uma tela que mostra o total de estrelas do jogador atual, além
	// 				   de mostrar as opções de compartilhamento nas redes sociais.
	//	
	function mostra_menu_recordes() { 
		$("#container").append("<div id='menu_de_recordes'></div>");
		recarrega_holder($("#holder_recordes"), $("#menu_de_recordes"), "<div id='holder_recordes'></div>");
		coloca_cabecalho_com_icone($("#menu_de_recordes"), "Recordes de "+(jogadores[jogador_atual].nome), "#56231b","<img src='imagens/icones/trofeu.png' class='icone'>");
		coloca_botao_voltar($("#menu_de_recordes"), mostra_menu_de_opcoes);
		coloca_tela_totalEstrelas($("#holder_recordes"));
		if (calcula_pontuacao_total_jogador(jogador_atual) > 0) {
			$("#holder_recordes").append("<img src='imagens/botoes/botao_ver_detalhes.png' id='botao_detalhes_recordes' class='botao_ver_detalhes'>");	
		}
		
		$("#botao_detalhes_recordes").click(function() {
			recarrega_holder($("#holder_recordes"), $("#menu_de_recordes"), "<div id='holder_recordes'></div>");
			coloca_botao_voltar($("#menu_de_recordes"), mostra_menu_recordes);
			coloca_cabecalhoInfoRecordes();
			coloca_recordes();
		});	
	}

	//
	// Função: Recarregar um holder qualquer.
	// Funcionalidade: Remove um holder filho para em seguida ser novamente criado.
	//	
	function recarrega_holder(holder_filho, holder_pai, cria_div_filho) {
		holder_filho.remove();
		holder_pai.append(cria_div_filho);
	}

	//
	// Função: Apresentar o total de estrelas de um determinado jogador.
	// Funcionalidade: Apresenta a quantidade de estrelas total com uma mensagem.
	//	
	function coloca_tela_totalEstrelas(holder_estrelas) {
		var total_estrelas = calcula_total_de_estrelas(jogador_atual);
		holder_estrelas.append("Total de estrelas: "+total_estrelas);
	}

	//
	// Função: Calcular o total de estrelas.
	// Funcionalidade: Calcula o total de estrelas de todos os níveis jogados por um jogador.
	//	
	function calcula_total_de_estrelas(numero_jogador) { 
		var total_de_estrelas = 0;
		for (var contador = 0; contador < QUANTIDADE_NIVEIS; contador++) {
			if (jogadores[numero_jogador].todos_os_pontos_total[contador] > 0) {
				total_de_estrelas += calcula_qtd_estrelas(jogadores[numero_jogador].todos_os_pontos_total[contador]);
			}
		}
		return total_de_estrelas; 
	}

	//
	// Função: Apresentar informações gerais sobre cada cada nível jogado.
	// Funcionalidade: Mostra a pontuação, tempo e quantidade de acertos de cada nível.
	//	
	function coloca_recordes() {
		for (var contador = 0; contador < QUANTIDADE_NIVEIS; contador++) { 
			if (jogadores[jogador_atual].todos_os_pontos_total[contador] >= 40) { 
				coloca_info_pontuacaoRecorde();
			} 
		}


		//
		// Função: Colocar as informações de cada nível de um determinado jogador em forma de lista.
		// Funcionalidade: Faz a montagem da lista com todos os dados de recordes de um determinado jogador.
		//	
		function coloca_info_pontuacaoRecorde() {
			var quantidade_estrelas = calcula_qtd_estrelas(jogadores[jogador_atual].todos_os_pontos_total[contador]);
			var tempo_jogador = jogadores[jogador_atual].tempo_jogador_por_nivel[contador];			
			var texto_qtdEstrelas;
			if (quantidade_estrelas === 1) {
				texto_qtdEstrelas = " estrela";
			} else {
				texto_qtdEstrelas = " estrelas";
			}
			$("#holder_recordes").append("<div id='holder_info_recordes' class='linha_recorde'></div>");
			$("#holder_info_recordes").append("<div class='holder_info_pontuacaoRecorde'>"+(contador+1)+"</div>");
			$("#holder_info_recordes").append("<div class='holder_info_pontuacaoRecorde'>"+quantidade_estrelas+texto_qtdEstrelas);
			if (tempo_jogador === 61) {
				$("#holder_info_recordes").append("<div class='holder_info_pontuacaoRecorde'>---");
			} else {
				$("#holder_info_recordes").append("<div class='holder_info_pontuacaoRecorde'>"+tempo_jogador+" segundos");	
			}
			$("#holder_info_recordes").append("<div class='holder_info_pontuacaoRecorde'>"+(jogadores[jogador_atual].todos_os_pontos[contador]/10)+"</div>");
		}
	}

	//
	// Função: Coloca um cabeçalho acima dos recordes de cada jogador.
	// Funcionalidade: Cria um cabeçalho indicando as respectivas informações apresentadas
	//				   nos recordes (Nível, Pontuação, Tempo e Acertos). 
	//	
	function coloca_cabecalhoInfoRecordes() {
		$("#menu_de_recordes").append("<div id='cabecalho_info_recordes'></div>");
		$("#cabecalho_info_recordes").append("<div id='holder_infoNivelCabecalho' class='holder_info_cabecalhoRecordes'>Nível</div>");
		$("#cabecalho_info_recordes").append("<div id='holder_infoPontuacaoCabecalho' class='holder_info_cabecalhoRecordes'>Pontuação</div>");
		$("#cabecalho_info_recordes").append("<div id='holder_infoTempoCabecalho' class='holder_info_cabecalhoRecordes'>Tempo</div>");
		$("#cabecalho_info_recordes").append("<div id='holder_infoAcertosCabecalho' class='holder_info_cabecalhoRecordes'>Acertos</div>");
	}	

	//
	// Função: Colocar a tela de exclusão de jogadores.
	// Funcionalidade: Apresenta uma interface que permite a um jogador 
	//				   deleter ele mesmo ou outros jogadores.
	//	
	function coloca_menu_excluirJogador() {
		$("#tela_de_configuracoes").remove(); 
		$("#container").append("<div id='menu_excluir_jogador'></div>");
		coloca_cabecalho($("#menu_excluir_jogador"), "Selecione o jogador a ser excluído!", "#56231b");
		coloca_botao_voltar($("#menu_excluir_jogador"), mostra_menu_configuracoes);
		$("#menu_excluir_jogador").append("<div id='holder_apelidos' class='holder_geral'></div>");
		coloca_apelidos($("#holder_apelidos")); 

		$("#apelido_jogador_0").click(function() {
			coloca_tela_invisivel($("#menu_excluir_jogador"));
			confirma_excluir_jogador(0); 
		});

		$("#apelido_jogador_1").click(function() {
			coloca_tela_invisivel($("#menu_excluir_jogador"));
			confirma_excluir_jogador(1); 
		});

		$("#apelido_jogador_2").click(function() {
			coloca_tela_invisivel($("#menu_excluir_jogador"));
			confirma_excluir_jogador(2); 
		});

		$("#apelido_jogador_3").click(function() {
			coloca_tela_invisivel($("#menu_excluir_jogador"));
			confirma_excluir_jogador(3); 
		});

		$("#apelido_jogador_4").click(function() {
			coloca_tela_invisivel($("#menu_excluir_jogador"));
			confirma_excluir_jogador(4); 
		});
	}

	//
	// Função: Colocar uma tela para confirmar a exclusão de um determinado jogador.
	// Funcionalidade: Apresenta um pequeno display que confirma a exclusão de um jogador,
	//				   com as opções "sim" ou "não".
	//	
	function confirma_excluir_jogador(numero_jogador) { 
		$("#menu_excluir_jogador").append("<div id='tela_confirma_excluirJogador'></div>");
		coloca_botao_simOuNao($("#tela_confirma_excluirJogador"), numero_jogador);
		$("#tela_confirma_excluirJogador").append("Tem certeza que deseja excluir o seguinte jogador?");
		$("#tela_confirma_excluirJogador").append("<br><br>"); 
		$("#tela_confirma_excluirJogador").append(jogadores[numero_jogador].nome+"<br>(Total de estrelas: "+(calcula_total_de_estrelas(numero_jogador))+")"); 
	}

	//
	// Função: Calcular o total de pontos que um determinado jogador possúi.
	// Funcionalidade: Calcula e retorna a quantidade total de pontos de um certo jogador.
	//	
	function calcula_pontuacao_total_jogador(jogador_numero) {
		var pontuacao_total = 0;
		for (var contador = 0; contador < MAX_JOGADORES; contador++) {
			pontuacao_total += jogadores[jogador_numero].todos_os_pontos_total[contador]; 
		}
		return pontuacao_total; 
	}

	//
	// Função: Colocar os botões "sim" e "não" na tela de confirmação de exclusão de jogador.
	// Funcionalidade: Coloca os dois botões na tela de confirmação e adiciona funcionalidade a eles.
	//	
	function coloca_botao_simOuNao(holder_botao, numero_jogador) { 
		holder_botao.append("<div id='holder_botao_simOuNao'></div>");
		$("#holder_botao_simOuNao").append("<img id='botao_sim' src='imagens/botoes/botao_sim.png' class='botao_sim'>");
		$("#holder_botao_simOuNao").append("<img id='botao_nao' src='imagens/botoes/botao_nao.png' class='botao_nao'>");
		define_clique_botoesSimOuNao(retorna_func_removeJogador, remove_confirma_excluirJogador);
		function retorna_func_removeJogador() {
			return removeJogador(numero_jogador)
		}
	}

	//
	// Função: Deletar um determinado jogador.
	// Funcionalidade: Redefine um determinado jogador, zerando seus pontos e
	//				   deixando seu apelido como null. Caso um jogador exclua 
	//				   ele mesmo, o usuário será redirecionado para a tela de
	//				   login. Caso ele delete outro jogador, voltará ao menu
	//				   de exclusão de jogadores.
	//	
	function removeJogador(numero_jogador) {
		redefine_jogador(numero_jogador);
		if (numero_jogador === jogador_atual) {
			$("#menu_excluir_jogador").remove();
			parar_musica(musica);
			chama_telaLogin_adequada(); 
		} else {
			$("#menu_excluir_jogador").remove();
			coloca_menu_excluirJogador();
		}
	}

	//
	// Função: Definir a funcionalidade dos botões "sim" e "não".
	// Funcionalidade: Adiciona uma função para qualquer botão "sim" e "não". 
	//	
	function define_clique_botoesSimOuNao(funcao_sim, funcao_nao) { 
		$("#botao_sim").click(function() {
			funcao_sim();
		});
		$("#botao_nao").click(function() {
			funcao_nao();
		});

		$("#tela_invisivel").click(function() {
			funcao_nao();
		}); 
	}

	//
	// Função: Remover a tela de confirmação de exclusão.
	// Funcionalidade: Retira a interface de confirmação de exclusão.
	//	
	function remove_confirma_excluirJogador() {
		$("#tela_invisivel").remove();
		$("#tela_confirma_excluirJogador").remove(); 
	}

	//
	// Função: Colocar uma tela invisivel em qualquer holder.
	// Funcionalidade: Coloca um holder invisivel em qualquer lugar, sua função pode ser
	// 				   a de evitar cliques indesejáveis enquanto uma interface menor é 
	//				   apresentada por cima de outra.
	//	
	function coloca_tela_invisivel(holder_tela_invisivel) {
		holder_tela_invisivel.append("<div id='tela_invisivel'></div>");
	}

	//
	// Função: Colocar um botão de voltar.
	// Funcionalidade: Cria um botão que tem a função de retornar à um estado ou menu anterior.
	//	
	function coloca_botao_voltar(holder_botao_voltar, funcao_destino) {
		$("#voltar").remove();
		holder_botao_voltar.append("<div class='botao_voltar' id='voltar'><img src='imagens/botoes/botao_voltar.png' class='imagem_escalavel_y'></div>");
		$('#voltar').click(function() {
			holder_botao_voltar.remove();
   			funcao_destino();
		});
	}

	function coloca_botao_desistir(holder_botao_desistir, funcao_destino) {
		holder_botao_desistir.append("<div class='botao_desistir' id='voltar'><img src='imagens/botoes/desistir.png' class='imagem_escalavel_y'></div>");
		$('#voltar').click(function() {
   			funcao_destino();
		});
	}

	//
	// Função: Colocar um cabeçalho na parte superior da tela.
	// Funcionalidade: Cria um cabeçalho na parte superior de um holder. 
	//	
	function coloca_cabecalho(holder_cabecalho, texto_central, cor) {
		holder_cabecalho.append("<div id='cabecalho_geral'></div>");
		$("#cabecalho_geral").css("background-color", cor);
		$("#cabecalho_geral").append(texto_central); 
	}

	//
	// Função: Colocar um cabeçalho na parte superior da tela (com ícone).
	// Funcionalidade: Cria um cabeçalho na parte superior de um holder. 
	//	
	function coloca_cabecalho_com_icone(holder_cabecalho, texto_central, cor, imagem) {
		holder_cabecalho.append("<div id='cabecalho_geral'></div>");
		$("#cabecalho_geral").css("background-color", cor);
		$("#cabecalho_geral").append(imagem+texto_central); 
	}

	//
	// Função: Apresentar o menu de escolha de níveis.
	// Funcionalidade: Cria e prepara as funções necessárias para a apresentação do
	//				   menu de níveis.  
	//	
	function mostra_menu_de_niveis() {
		remove_divs_para_niveis();
		$("#tela_de_pergunta").remove();
		$("#tela_invisivel").remove();
		$("#container").append("<div id='menu_de_niveis'></div>");
		coloca_cabecalho_com_icone($("#menu_de_niveis"),"Escolha um nível!", "#56231b","<img src='imagens/icones/play.png' class='icone'>");
		coloca_botao_voltar($("#menu_de_niveis"), mostra_menu_de_opcoes);
		coloca_botao_audio("menuEscolhas");
		coloca_niveis();
	}

	//
	// Função: Apresentar o menu de créditos.
	// Funcionalidade: Cria e prepara as funções necessárias para a apresentação do
	//				   menu de créditos. 
	//	
	function mostra_menu_de_creditos() {
		remove_divs_para_creditos();
		$("#container").append("<div id='menu_de_creditos'></div>");	
		coloca_cabecalho_com_icone($("#menu_de_creditos"), "Créditos", "#56231b","<img src='imagens/icones/creditos.png' class='icone'>");
		coloca_botao_voltar($("#menu_de_creditos"), mostra_menu_de_opcoes);
		coloca_creditos();
	}

	//
	// Função: Escrever os créditos.
	// Funcionalidade: Escreve os créditos na tela de créditos.
	//	
	function coloca_creditos() {
		$("#menu_de_creditos").append("<div id='caixa_dos_creditos'></div>");
		escreve_creditos();
	}

	//
	// Função: Apresentar uma tela com as opções de login
	// Funcionalidade: Mostra todos os jogadores disponíveis, ao clicar em um deles, o respectivo login
	//			       será efetuado. 
	//
	function coloca_tela_escolha_apelido() {
		$("#container").append("<div id='tela_escolha_apelido'></div>");
		coloca_cabecalho($("#tela_escolha_apelido"), "Escolha o seu perfil!", "#56231b");
		$("#tela_escolha_apelido").append("<div id='holder_botoes_escolha_apelidos'></div>");
		coloca_botoes_escolha_apelido($("#holder_botoes_escolha_apelidos"));
		$("#botao_criar_apelido").click(function() {
			$("#tela_escolha_apelido").remove();
			jogador_atual = verifica_jogador_disponivel(); 
			criar_novo_perfil(); 
		});
		define_jogador_atual();
	}

	//
	// Função: Chamar o menu de opções após o usuário escolher seu jogador.
	// Funcionalidade: Ao clicar em um jogador, o número do jogador atual é salvo e o 
	//				   menu de opções é chamado.
	//	
	function define_jogador_atual() { 
		$("#apelido_jogador_0").click(function() {
			jogador_atual = 0;
			$("#tela_escolha_apelido").remove();
			mostra_menu_de_opcoes();
		});
		$("#apelido_jogador_1").click(function() {
			jogador_atual = 1;
			$("#tela_escolha_apelido").remove();
			mostra_menu_de_opcoes();
		});
		$("#apelido_jogador_2").click(function() {
			jogador_atual = 2;
			$("#tela_escolha_apelido").remove();
			mostra_menu_de_opcoes();
		});
		$("#apelido_jogador_3").click(function() {
			jogador_atual = 3;
			$("#tela_escolha_apelido").remove();
			mostra_menu_de_opcoes();
		});
		$("#apelido_jogador_4").click(function() {
			jogador_atual = 4;
			$("#tela_escolha_apelido").remove();
			mostra_menu_de_opcoes();
		});
	}

	//
	// Função: Colocar os botões dos apelidos na tela de login.
	// Funcionalidade: Coloca os apelidos na tela de login e verifica a quantidade máxima de jogadores
	//				   esta sendo apresentada. Caso negativo, o botão de adicionar um novo jogador é 
	//				   apresentado. 
	//	
	function coloca_botoes_escolha_apelido(holder_botoes) { 
		coloca_apelidos(holder_botoes); 
		if (verifica_jogador_disponivel() != -1) {
			holder_botoes.append("<div id='botao_criar_apelido' class='botao_escolha_apelido'>+ Novo perfil </div>");	
		}
	}

	//
	// Função: Apresentar os jogadores já criados como opções de login.
	// Funcionalidade: Apresenta todos os jogadores já criados pelo usuário.
	//	
	function coloca_apelidos(holder_apelidos) {
		for (var contador = 0; contador < MAX_JOGADORES; contador++) {
			if (jogadores[contador].nome != null) {
				holder_apelidos.append("<div id='apelido_jogador_"+(contador)+"' class='botao_escolha_apelido'>"+(jogadores[contador].nome)+"</div>");
			}
		}
	}

	//
	// Função: Apresentar ao usuário a opção de criar um novo perfil 
	// Funcionalidade: Permite a criação de um novo perfil através de uma entrada
	//				   de texto, caso existam outros apelidos, o botão de voltar
	//				   estará disponível.
	//
	function criar_novo_perfil() { 
		$("#container").append("<div id='tela_digita_apelido'></div>");
		coloca_cabecalho($("#tela_digita_apelido"), "Crie seu perfil!", "#56231b");
		if (tem_jogador() == true) {
			coloca_botao_voltar($("#tela_digita_apelido"), coloca_tela_escolha_apelido);	
		}
		$("#tela_digita_apelido").append("<div id='holder_digite_apelido'>Digite o seu apelido</div>");
		$("#tela_digita_apelido").append("<input type='text' class='entrada_apelido' id='apelido' required maxlength='"+(MAX_CARACTERES)+"' autofocus>");
		coloca_botao_pronto($("#tela_digita_apelido"));
		detector_apelido();
	}

	//
	// Função: Verificar se o apelido digitado pelo usuário é válido.
	// Funcionalidade: Analisa se o campo de apelido está vazio, caso esteja, a função
	//				   criar_novo_perfil() é chamada novamente. Caso haja algo no campo,
	//				   o jogador é finalmente criado.
	//	
	function verificaSeApelidoEValido() {
		var nome = document.getElementById("apelido").value;
		$("#tela_digita_apelido").remove();
		if (nome === "") {
			criar_novo_perfil();
		} else {
			jogadores[jogador_atual].nome = nome;
			armazena_pontos();
			mostra_menu_de_opcoes();	
		}
	}

	//
	// Função: Detectar a entrada de um apelido.
	// Funcionalidade: Detecta se o usuário clicou no botão "pronto" para criar 
	//				   um novo jogador, também dá  a funcionalidade de um clique 
	//				   para a tecla ENTER. 
	//	
	function detector_apelido() {
		$("#botao_pronto").click(function(){
			verificaSeApelidoEValido();
		});
		$('#apelido').on('keyup', function(e) {
    		if (e.keyCode === 13) {
        		$('#botao_pronto').click();
    		}
		});
	}

	//
	// Função: Colocar o botão "pronto" na tela.
	// Funcionalidade: Cria o botão pronto através de uma imagem com ID e Classe.
	//				   Pode ser colocado em qualquer holder através do parâmetro. 
	//	
	function coloca_botao_pronto(holder) {
		holder.append("<div id='holder_botao_pronto'></div>");
		$("#holder_botao_pronto").append("<img src='imagens/botoes/botao_ok.png' class='imagem' id='botao_pronto'>");
	}

	//
	// Função: Bloquear os níveis marcados com cadeados.
	// Funcionalidade: Caso o usuário clique em um cadeado, o menu de níveis será rapidamente
	//				   removido e a função mostra_menu_de_niveis() será novamente chamada.
	//	
	function bloqueia_cadeados_niveis() {
		for (var contador = 1; contador < QUANTIDADE_NIVEIS; contador++) {
			$("#cadeado_"+(contador+1)).click(function() {
				$("#menu_de_niveis").remove();
				mostra_menu_de_niveis();
			});
		}
	}
	
	//
	// Função: Colocar todos os 20 níveis no menu de níveis.
	// Funcionalidade: Adiciona todos os níveis na tela de níveis, caso ele esteja bloqueado,
	//				   essa fução adiciona um cadeado que impede o usuário de jogar. Esta função
	//				   também adiciona funcionalidade aos níveis, chamando a função "mostra_pergunta(x)"
	//				   onde x é o número do nível.
	//	
	function coloca_niveis() { 
		
		for (var contador = 0; contador < QUANTIDADE_NIVEIS; contador++) {
			if (contador > 0) { 
				if (calcula_qtd_estrelas(jogadores[jogador_atual].todos_os_pontos_total[contador - 1]) < 3) { // Coloca um cadeado nos níveis bloqueados
					$("#menu_de_niveis").append("<div class='div_nivel' id='nivel_"+ (contador + 1) +"'>  <img src='imagens/outros/circulo.png' class='circulo_niveis'>   <div class='holder_numero_nivel_bloqueado'><b>"+ (retorna_numero_niveis(contador)) +"</b></div></div>");
					$("#nivel_"+(contador + 1)).append("<div class='bloqueio_de_nivel holder_cadeado' id='cadeado_"+(contador+1)+"'></div>");
				} else {
					$("#menu_de_niveis").append("<div class='div_nivel' id='nivel_"+ (contador + 1) +"'>  <img src='imagens/outros/circulo.png' class='circulo_niveis'>   <div class='holder_numero_nivel'><b>"+ (retorna_numero_niveis(contador)) +"</b></div></div>");
				}
			} else {
				$("#menu_de_niveis").append("<div class='div_nivel' id='nivel_"+ (contador + 1) +"'>  <img src='imagens/outros/circulo.png' class='circulo_niveis'>   <div class='holder_numero_nivel'><b>"+ (retorna_numero_niveis(contador)) +"</b></div></div>");
			}
			if (jogadores[jogador_atual].todos_os_pontos_total[contador] > 0) {
				coloca_pontuacao_tela_niveis($("#nivel_"+(contador+1)), contador);
			}
		}
		bloqueia_cadeados_niveis();

		$('#nivel_1').click(function(){
			nivel_atual = 0;
			mostra_pergunta(0);  
		});
		$('#nivel_2').click(function(){
			nivel_atual = 1;
			mostra_pergunta(1);  
		});
		$('#nivel_3').click(function(){
			nivel_atual = 2;
			mostra_pergunta(2);  
		});
		$('#nivel_4').click(function(){
			nivel_atual = 3;
			mostra_pergunta(3);  
		});
		$('#nivel_5').click(function(){
			nivel_atual = 4;
			mostra_pergunta(4);  
		});
		$('#nivel_6').click(function(){
			nivel_atual = 5;
			mostra_pergunta(5);  
		});
		$('#nivel_7').click(function(){
			nivel_atual = 6; 
			mostra_pergunta(6); 
		});
		$('#nivel_8').click(function(){
			nivel_atual = 7;
			mostra_pergunta(7);  
		});
		$('#nivel_9').click(function(){
			nivel_atual = 8;
			mostra_pergunta(8);  
		});
		$('#nivel_10').click(function(){
			nivel_atual = 9;
			mostra_pergunta(9);  
		});
		$('#nivel_11').click(function(){
			nivel_atual = 10;
			mostra_pergunta(10);  
		});
		$('#nivel_12').click(function(){
			nivel_atual = 11;
			mostra_pergunta(11);  
		});
		$('#nivel_13').click(function(){
			nivel_atual = 12; 
			mostra_pergunta(12); 
		});
		$('#nivel_14').click(function(){
			nivel_atual = 13;
			mostra_pergunta(13);  
		});
		$('#nivel_15').click(function(){
			nivel_atual = 14;
			mostra_pergunta(14);  
		});
		$('#nivel_16').click(function(){
			nivel_atual = 15;
			mostra_pergunta(15);  
		});
		$('#nivel_17').click(function(){
			nivel_atual = 16;
			mostra_pergunta(16);  
		});
		$('#nivel_18').click(function(){
			nivel_atual = 17;
			mostra_pergunta(17);  
		});
		$('#nivel_19').click(function(){
			nivel_atual = 18;
			mostra_pergunta(18);  
		});
		$('#nivel_20').click(function(){
			nivel_atual = 19;
			mostra_pergunta(19);  
		});

		//
		// Função: Colocar um número zero em frente a alguns números.
		// Funcionalidade: Caso o número do nível serja menor que 9, um zero é colocado em sua frente.
		//	
		function retorna_numero_niveis(contador) {
			if (contador < 9) {
				return "0" + (contador+1);
			} else {
				return "" + (contador+1);
			}
		}
	}

	//
	// Função: Colocar a pontuação em estrelas em cada nível que já foi jogado. 
	// Funcionalidade: Calcula e coloca a pontuação em estrelas em cada nível no menu de níveis.
	//	
	function coloca_pontuacao_tela_niveis(holder_nivel, numero_nivel) { 
		var qtd_estrelas = calcula_qtd_estrelas(jogadores[jogador_atual].todos_os_pontos_total[numero_nivel]);
		holder_nivel.append("<div class='holder_estrelas_telaNivel' id='holder_estrelas_telaNivel_"+(numero_nivel)+"'></div>");
		mostra_estrelas(jogadores[jogador_atual].todos_os_pontos_total[numero_nivel], $("#holder_estrelas_telaNivel_"+numero_nivel+""), $("#holder_estrelas_telaNivel_"+numero_nivel+""), "");
	}

	//
	// Função: Mostrar a pergunta no início de um nível para o usuário.
	// Funcionalidade: Apresenta a pergunta de acordo com o nível.
	//	
	function mostra_pergunta(numero_pergunta) { 
		coloca_tela_invisivel($("#container"));
		$("#container").append("<div id='tela_de_pergunta'></div>");
		$("#tela_de_pergunta").css("background-color",muda_cor_pergunta(numero_pergunta + 1));
		$("#tela_de_pergunta").append("<img src ='imagens/personagens/"+(retorna_nome_personagem(numero_pergunta))+".png' class='personagem_inicial'>");
		$("#tela_de_pergunta").append("<div id='caixa_pergunta' class='pergunta'></div>");
		$("#caixa_pergunta").append(perguntas[numero_pergunta]);
		$("#tela_de_pergunta").append("<br><img src='imagens/botoes/botao_jogar.png' id='botao_jogar_partida' class='botao_iniciar'>");

		$('#botao_jogar_partida').click(function(){
			remove_divs_para_pergunta();
			parar_musica(musica); // Para a primeira música.
			toca_musica_de_fundo(musica_jogo); // Inicia a segunda música.
   			mostra_tela_de_jogo(contador_opcoes);
		});

		$("#tela_invisivel").click(function() {
			$("#tela_de_pergunta").remove();
			$("#tela_invisivel").remove();
		});

		$("#tela_de_pergunta").append("<div class='botao_fechar' id='desistir'><img src='imagens/botoes/botao_fechar.png' class='imagem_escalavel_y'></div>");
		$('#desistir').click(function() {
   			$("#tela_de_pergunta").remove();
			$("#tela_invisivel").remove();
		});
	}

	//
	// Função: Retornar o nome de um personagem
	// Funcionalidade: Retorna o nome de um personagem de acordo com o nível (Número da pergunta)
	//	
	function retorna_nome_personagem(numero_pergunta) {
		switch (numero_pergunta) {
			case 0:
				return "consumidora";
				break;
			case 1:
				return "cozinheiro";
				break;
			case 2:
				return "fazendeira";
				break;
			case 3:
				return "feirante";
				break;
			case 4:
				return "indio";
				break;
			case 5:
				return "nutricionista";
				break;
			case 6:
				return "pescador";
				break;
			case 7:
				return "quilombola";
				break;
			case 8:
				return "consumidora";
				break;
			case 9:
				return "cozinheiro";
				break;
			case 10:
				return "fazendeira";
				break;
			case 11:
				return "feirante";
				break;
			case 12:
				return "indio";
				break;
			case 13:
				return "nutricionista";
				break;
			case 14:
				return "pescador";
				break;
			case 15:
				return "quilombola";
				break;
			case 16:
				return "consumidora";
				break;
			case 17:
				return "cozinheiro";
				break;
			case 18:
				return "fazendeira";
				break;
			case 19:
				return "feirante";	
				break;				
			default:
				return "indio";
		}
	}

	//
	// Função: Colocar os principais divs na tela de jogo.
	// Funcionalidade: Coloca no container uma div chamada "tela_de_jogo" e chama uma função para
	///				   alterar sua cor de acordo com o número do nível escolhido. 
	//	
	function coloca_divs_tela_jogo() {
		$("#container").append("<div id='tela_de_jogo'></div>");
		coloca_cabecalho($("#tela_de_jogo"), "Escolha a alternativa correta!", muda_cor_pergunta(nivel_atual + 1));
		coloca_botao_desistir($("#tela_de_jogo"), deseja_desistir);
		coloca_botao_audio("telaJogo");
		$("#tela_de_jogo").css("background-color",muda_cor_pergunta(nivel_atual + 1));
	}

	//
	// Função: Colocar o botão de áudio on/off no div de parâmetro.
	// Funcionalidade: coloca o botão de áudio on/off e lê as configurações de áudio do usuário, aplicando
	//				   o botão adequado (ON ou OFF).
	//
	function coloca_botao_audio(tela_botao) {
		if ((jogadores[jogador_atual].somLigado === true) || (jogadores[jogador_atual].efeitosLigado === true)) {
			$("#cabecalho_geral").append("<img src ='imagens/botoes/audio_on.png' class='botao_audio imagem' id='botao_audio'>");
		} else if ((jogadores[jogador_atual].somLigado === false) || (jogadores[jogador_atual].efeitosLigado === false)) {
			$("#cabecalho_geral").append("<img src ='imagens/botoes/audio_off.png' class='botao_audio imagem' id='botao_audio'>");
		}

		$("#botao_audio").click(function() {
			ligaOuDesliga_audio_completamente(tela_botao);
			$("#botao_audio").remove();
			coloca_botao_audio(tela_botao);
		});
	}


	//
	// Função: Colocar o botão de logout no cabeçalho.
	// Funcionalidade: Aplica o botão de logout e suas funções no cabeçalho geral (#cabecalho_geral).
	//
	function coloca_botao_logOut() {
		$("#cabecalho_geral").append("<div id='holder_botao_logout'><img src='imagens/botoes/botao_logout.png' class='imagem'></div>");
		coloca_funcao_botao_logout();
	}

	//
	// Função: Alterar o statu de áudio do usuário.
	// Funcionalidade: Muda o status de áudio completamente, onde todos os sons são ligados ou desligados. 
	//
	function ligaOuDesliga_audio_completamente(menu_atual) {
		if ((jogadores[jogador_atual].somLigado === true) || (jogadores[jogador_atual].efeitosLigado === true)) {
			parar_musica(musica);
			parar_musica(musica_jogo);
			jogadores[jogador_atual].somLigado = false;
			jogadores[jogador_atual].efeitosLigado = false;
		} else if ((jogadores[jogador_atual].somLigado === false) || (jogadores[jogador_atual].efeitosLigado === false)) {
			if (menu_atual === "telaJogo") {
				tocar_musicaLoop(musica_jogo);
			} else if (menu_atual === "menuEscolhas") {
				tocar_musicaLoop(musica);
			}
			jogadores[jogador_atual].somLigado = true;
			jogadores[jogador_atual].efeitosLigado = true;
		}
		armazena_pontos();
	}

	//
	// Função: Coloca o botão desistir e o marcador de tempo na tela de jogo.
	// Funcionalidade: Cria o botão "desistir" e o marcador de tempo, além de iniciar o relógio.
	//	
	function coloca_botoes_jogo() { 
		$("#tela_de_jogo").append("<div id='botoes_partida'></div>");
		$("#botoes_partida").append("<div id='marcador_de_tempo' class='botao_partida'></div>");
		relogio_comecou = true;
		inicia_timer(tempo_niveis[nivel_atual] - 1, $("#marcador_de_tempo"));
	}

	//
	// Função: Remover os principais holders da tela de jogo.
	// Funcionalidade: Tira os holders necessários para sair da função "mostra_tela_de_jogo".
	//	
	function remove_divs_para_jogo() {
		$("#tela_de_pergunta").remove();
		$("#caixa_imagens_jogo").remove();
		$("#marcador_de_acertos").remove();
	}

	//
	// Função: Calcular a pontuação relacionada ao tempo.
	// Funcionalidade: Faz um cálculo de acordo com o tempo do usuário, onde
	//				   caso ele seja relativamente rápido, ganha 40 pontos,
	//				   se for médio ganha 20, lento 10, e muito lento 0 pontos.
	//		
	function calcula_pontuacao_tempo(tempo_jogador) {
		if (pontuacao_total >= 60) {
			if (tempo_jogador <= (tempo_niveis[nivel_atual]/2)) {
				return 40; 
			} else if (tempo_jogador <= (tempo_niveis[nivel_atual] * 0.7)) {
				return 20; 
			} else {
				return 10; 
			}			
		} else {
			return 0; 
		}
	}

	//
	// Função: Salvar a pontuação relativa ao tempo.
	// Funcionalidade: Salva a pontuação dp tempo de um determinado jogador.
	//	
	function salva_pontuacao_tempo() {
		if (desistiu == false) {
			var ponto_tempo_atual; 
			if (pontuacao_total >= 60) {
				ponto_tempo_atual = calcula_pontuacao_tempo(calcula_tempo_jogador()); 	
			} else {
				ponto_tempo_atual = 0; 
			}
			if (ponto_tempo_atual > jogadores[jogador_atual].todos_os_pontos_tempo[nivel_atual]) {
				jogadores[jogador_atual].todos_os_pontos_tempo[nivel_atual] = ponto_tempo_atual;
			}
		} 
	}

	//
	// Função: Iniciar o relógio.
	// Funcionalidade: Inicia o relógio reverso do jogo.
	//	
	function inicia_timer(duracao, display) { 
	    var timer = duracao, minutos, segundos;
	    if (relogio_comecou == true) {
	    	display.append("<div id='relogio_segundos' class='relogio'> "+(tempo_niveis[nivel_atual])+" </div>"); 
	    	relogio_comecou = false; 
	    }
	    intervalo_relogio = setInterval(function () {
	        minutos = parseInt(timer / 60, 10);
	        segundos = parseInt(timer % 60, 10);
	        minutos = minutos < 10 ? "0" + minutos : minutos;
	        segundos = segundos < 10 ? "0" + segundos : segundos;
	        $("#relogio_segundos").remove();
	        display.append("<div id='relogio_segundos' class='relogio'> "+(segundos)+" </div>"); 
	        --timer;
	    }, 1000);
	}

	//
	// Função: Contar o tempo restante do relógio. 
	// Funcionalidade: Recebe como parâmetro o tempo de um determinado nível, 
	//				   ele é convertido em milisegundos e então chama-se a função
	//				   set_timeout para fazer o count-down. O gatilho acionado quando
	//				   o tempo acaba é a função fim_de_tempo (primeiro parâmetro passado). 
	//	
	function conta_tempo_restante(tempo_nivel) {
		tempo_nivel *= 1000; 
		tempo = setTimeout(fim_de_tempo, tempo_nivel);
	}

	//
	// Função: Indicar que o tempo de uma partida acabou.
	// Funcionalidade: Quando o tempo de uma partida acabar, essa função é ativada.
	//				   O tempo exato é salvo, além de chamar a função que mostra uma tela
	//				   informando sobre o fim do tempo ao usuário. 
	//	
	function fim_de_tempo() {
		clearInterval(intervalo_relogio);
		grava_tempo_final();
		tempo_acabou = true; 
		mostra_tela_fim_do_tempo();
	}

	//
	// Função: Parar o relógio.
	// Funcionalidade: Para e zera o relógio sempre que essa função for chamada. 
	//	
	function parar_o_tempo() { 
		clearInterval(intervalo_relogio);
		clearTimeout(tempo); 
	}

	//
	// Função: Gravar a hora exata em que um jogador inicia a partida.
	// Funcionalidade: Armazena a hora exata em que a função foi ativada (inicio das partidas). 
	//	
	function grava_tempo_inicial() {
		tempo_milisegundos = new Date();
		tempo_inicio_milisegundos = tempo_milisegundos.getTime();
	}

	//
	// Função: Gravar a hora em que uma partida foi finalizada.
	// Funcionalidade: Armazena a hora exata em que a função foi ativada (final das partidas).
	//	
	function grava_tempo_final() {
		tempo_milisegundos = new Date();
		tempo_fim_milisegundos = tempo_milisegundos.getTime();
	}

	//
	// Função: Calcular o tempo total de uma partida.
	// Funcionalidade: Subtrai o tempo final pelo tempo inicial, resultando no tempo exato de uma partida.
	//	
	function calcula_tempo_jogador() {
		return (tempo_fim_milisegundos - tempo_inicio_milisegundos)/1000; 
	}

	//
	// Função: Apresentar as informações sobre o tempo de uma partida.
	// Funcionalidade: Ao final de uma partida, apresenta os recordes ou valores anteriores
	//				   do tempo de uma partida.
	//	
	function mostra_tempo() {
		var tempo_total = calcula_tempo_jogador();
		if (tempo_jogador_por_nivel[nivel_atual] != 61) {
			if (tempo_total > tempo_jogador_por_nivel[nivel_atual]) {
				$("#caixa_tempo").append("<h2>Seu tempo nessa partida:  "+ tempo_total +" segundos </h2>");
				$("#caixa_tempo").append("<h2>Tempo Recorde neste nível:  "+ tempo_jogador_por_nivel[nivel_atual] +" segundos </h2>");
			} else if (tempo_total < tempo_jogador_por_nivel[nivel_atual]) {
				$("#caixa_tempo").append("<h2>Novo Recorde de tempo! : "+ tempo_total +" segundos </h2>");	
				$("#caixa_tempo").append("<h2>Tempo anterior: "+ tempo_jogador_por_nivel[nivel_atual] +" segundos </h2>");	
			} else if (tempo_total == tempo_jogador_por_nivel[nivel_atual]) {
				$("#caixa_tempo").append("<h2>Tempo Recorde neste nível:  "+ tempo_total +" segundos </h2>");
			}
		} else {
			$("#caixa_tempo").append("<h2>Novo Recorde de tempo!! : "+ tempo_total +" segundos </h2>");	
		}
	}

	//
	// Função: Salvar o ultimo resultado de tempo de um jogador.
	// Funcionalidade: Caso a pontuação de um jogador seja maior que 60, seu tempo
	//				   é salvo. 
	//	
	function salva_ultimo_tempo() {
		if (pontuacao_total >= 60) {
			jogadores[jogador_atual].tempo_jogador_por_nivel[nivel_atual] = calcula_tempo_jogador(); 
		}
	}

	//
	// Função: Mostrar a tela de fim do tempo.
	// Funcionalidade: Apresenta uma tela informando ao jogador que seu tempo acabou.
	//	
	function mostra_tela_fim_do_tempo() {
		remove_tela_desistir();
		$("#tela_de_jogo").append("<div id='oculta_tela_de_jogo'></div>");
		$("#tela_de_jogo").append("<div id='tela_fim_do_tempo'></div>");
		$("#tela_fim_do_tempo").append("<img src='imagens/icones/relogio.png' class='holder_relogio'>");
		$("#tela_fim_do_tempo").append("<div class='holder_dica_tempo'>Você demorou "+(tempo_niveis[nivel_atual])+" segundos... <br>Seu tempo acabou! <br> Seja mais rápido da próxima vez! </div>");
		$("#tela_fim_do_tempo").css("background-color",muda_cor_pergunta(nivel_atual+1));
		coloca_botao_ok($("#tela_fim_do_tempo"));

		$("#oculta_tela_de_jogo").click(function(){
			$("#oculta_tela_de_jogo").remove();
			$("#tela_de_jogo").remove();
			finaliza_partida();
		});
		$("#botao_ok").click(function(){
			$("#oculta_tela_de_jogo").remove();
			$("#tela_de_jogo").remove();
			finaliza_partida();
		});
	}

	//
	// Função: Salvar a pontuação total do jogador.
	// Funcionalidade: Caso a pontuação total de um jogador seja maior que a anterior,
	//				   ela é salva na base de dados local.
	//	
	function salva_total_pontos() {
		if (desistiu == false) {
			pontuacao_tempo_atual = calcula_pontuacao_tempo(calcula_tempo_jogador()); 
			var total_de_pontos = pontuacao_total + pontuacao_tempo_atual;
		} else {
			var total_de_pontos = pontuacao_total;
		}	
		if (total_de_pontos > jogadores[jogador_atual].todos_os_pontos_total[nivel_atual]) {
			jogadores[jogador_atual].todos_os_pontos_total[nivel_atual] = total_de_pontos;
		}
	}

	//
	// Função: Calcular a pontuação relativa aos acertos de um jogador.
	// Funcionalidade: Para cada acerto, um jogador recebe 10 pontos, a função retorna
	//				   a pontuação total relativa aos acertos (máximo de 100 pontos).
	//	
	function calcula_pontuacao() {
		var pontuacao = 0;
		for (var contador = 0; contador < QUANTIDADE_OPCOES; contador++) {
			if (resposta_jogador[contador] == resposta_pergunta[nivel_atual][contador]) {
				pontuacao += 10;
			}
		}
		return pontuacao; 
	}

	//
	// Função: Salvar a pontuação recorde de um jogador.
	// Funcionalidade: Caso a pontuação atual seja maior que a anterior, ela é salva através
	//				   desta função.
	//	
	function salva_pontuacao_nivel() {
		pontuacao_total = calcula_pontuacao(); 
		if (pontuacao_total > jogadores[jogador_atual].todos_os_pontos[nivel_atual]) {
			jogadores[jogador_atual].todos_os_pontos[nivel_atual] =  pontuacao_total; 
		}
	}

	//
	// Função: Cria todos os jogadores utilizando os padrões iniciais.
	// Funcionalidade: Cria MAX_JOGADORES jogadores, todos com os parâmetros iniciais.
	//	
	function cria_jogadores_padrao() {
		for (var contador = 0; contador < MAX_JOGADORES; contador++) {
			cria_jogador(contador); 
 		}
	}

	//
	// Função: Criar um jogador padrão.
	// Funcionalidade: Cria um jogador padrão em uma determinada posição "numero_jogador".
	//
	function cria_jogador(numero_jogador) {
		jogadores[numero_jogador] = {
 				primeira_vez : true, 
		 		nome : null,
		 		tempo_jogador_por_nivel : [61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61],
		 		todos_os_pontos : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
		 		todos_os_pontos_tempo : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
		 		todos_os_pontos_total : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		 		somLigado : true,
		 		efeitosLigado : true,
 			};
	}

	//
	// Função: Redefinir um determinado jogador.
	// Funcionalidade: Redefine aos padrões iniciais um determinado jogador. 
	//	
	function redefine_jogador(numero_jogador) {
		cria_jogador(numero_jogador);
		armazena_pontos();
	}

	//
	// Função: Armazenar os dados dos jogadores.
	// Funcionalidade: Armazena todos as variáveis de todos os jogadores na base de dados local.
	//	
	function armazena_pontos() {
		localStorage.setItem("jogadores", JSON.stringify(jogadores));	
	}

	//
	// Função: Carregar os jogadores.
	// Funcionalidade: Caso haja dados armazenados, essa função carrega eles nas variáveis do jogo.
	//	
	function carrega_jogadores() {
		aux_jogadores = localStorage.getItem("jogadores");
 		jogadores = JSON.parse(aux_jogadores); 
	}

	//
	// Função: Tocar o som de acerto ou erro.
	// Funcionalidade: Caso o jogador acerte, o som de acerto é tocado, caso contrário
	//				   o som de erro é tocado.
	//	
	function som_acertoOuErro(numero_resposta, numero_opcao) { 
		if (jogadores[jogador_atual].efeitosLigado === true) {
			if (verifica_se_acertou(numero_resposta, numero_opcao) === true) {
				somAcerto.play();
			} else {
				somErro.play();
			}	
		} 
	}

	//
	// Função: Verificar se a escolha do usuário foi correta.
	// Funcionalidade: Verifica e retorna um valor booleano resultante da comparação
	//				   da alternativa correta com a resposta do usuário.
	//	
	function verifica_se_acertou(numero_resposta, numero_opcao) {
		if (numero_resposta === resposta_pergunta[nivel_atual][numero_opcao]) {
			return true;
		} else {
			return false;
		}
	}

	//
	// Função: Iniciar uma partida.
	// Funcionalidade: Aplica todas as funções necessárias durante uma partida.
	//	
	function mostra_tela_de_jogo(contador_opcoes) {
		remove_divs_para_jogo();
		if (contador_opcoes == 0) {
			conta_tempo_restante(tempo_niveis[nivel_atual]);
			grava_tempo_inicial();
			coloca_divs_tela_jogo(); 
			coloca_botoes_jogo(); 
		}
		if (contador_opcoes < QUANTIDADE_OPCOES) {	
			$("#tela_de_jogo").append("<div id='caixa_imagens_jogo'></div>");
			coloca_imagens_do_jogo(contador_opcoes);
			coloca_marcadores();	
			
			$('#opcao_1').click(function() {
				som_acertoOuErro(1, contador_opcoes);
				resposta_jogador[contador_opcoes] = 1;
				verifica_se_acertou_para_marcador(1, contador_opcoes); // numero_resposta, numero_opcao
				contador_opcoes++;
				mostra_tela_de_jogo(contador_opcoes); // Recursividade
			});

			$('#opcao_2').click(function() {
				som_acertoOuErro(2, contador_opcoes);
				resposta_jogador[contador_opcoes] = 2;
				verifica_se_acertou_para_marcador(2, contador_opcoes); // numero_resposta, numero_opcao
				contador_opcoes++;
				mostra_tela_de_jogo(contador_opcoes); // Recursividade
			});

			$('#opcao_3').click(function() {
				som_acertoOuErro(3, contador_opcoes);
				resposta_jogador[contador_opcoes] = 3;
				verifica_se_acertou_para_marcador(3, contador_opcoes); // numero_resposta, numero_opcao
				contador_opcoes++;
				mostra_tela_de_jogo(contador_opcoes); // Recursividade
			});

		} else {
			$("#tela_invisivel").remove();
			parar_o_tempo(); 
			grava_tempo_final();
			finaliza_partida();
		}
	}

	//
	// Função: Definir a funcionalidade do botão de desistir.
	// Funcionalidade: Aplica as funções nos botões "sim" ou "não" após o botão "desistir" ser pressionado. 
	//	
	function deseja_desistir() {
		mostra_tela_desistir();
		$("#botao_desistir_sim").click(function() {
			remove_tela_desistir();
			parar_o_tempo();
			desistiu = true; 
			grava_tempo_final();
			finaliza_partida();
		});

		$("#botao_desistir_nao").click(function() {
			remove_tela_desistir();
		});

		$("#oculta_tela_de_jogo").click(function() {
			remove_tela_desistir();
		});
	}

	//
	// Função: Finalizar uma partida.
	// Funcionalidade: Chama todas as funções necessárias para a finalização de uma partida.
	//	
	function finaliza_partida() {
		mostra_tela_final();  
		salva_pontuacao_nivel(); 
		salva_pontuacao_tempo(); 
		salva_total_pontos();  
		salva_ultimo_tempo(); 
		mostra_pontuacao_final(); 
		mostra_dicas();
		armazena_pontos(); 
		coloca_botao_ok($("#tela_final"));

		$("#botao_ok").click(function() {
			reseta_variaveis();
			$("#tela_final").remove();
			parar_musica(musica_jogo);
			if (verifica_statusSom_jogador(jogador_atual) === true) {
				tocar_musicaLoop(musica);	
			}
			mostra_menu_de_niveis();
		});	 

		$("#holder_dicas").click(function() {
			coloca_dica_completa();
		});
	}

	//
	// Função: Resetar um jogador.
	// Funcionalidade: Volta os valores iniciais de um determinado jogador (Deleta um jogador).
	//	
	function coloca_dica_completa() {
		coloca_tela_invisivel($("#tela_final"));
		$("#tela_final").append("<div id='tela_dica_completa'></div>");
		$("#tela_dica_completa").append("<div id='fechar_dica'><img src='imagens/botoes/botao_fechar.png' class='botao_fechar_dica'></div>");
		$("#tela_dica_completa").css("background-color",muda_cor_pergunta(nivel_atual + 1));
		$("#tela_dica_completa").append(dicas_completas[nivel_atual]);

		$("#fechar_dica").click(function() {
			$("#tela_invisivel").remove();
			$("#tela_dica_completa").remove();
		});

		$("#tela_invisivel").click(function() {
			$("#tela_invisivel").remove();
			$("#tela_dica_completa").remove();
		});

		$("#tela_dica_completa").click(function() {
			$("#tela_invisivel").remove();
			$("#tela_dica_completa").remove();
		});
	}

	//
	// Função: Resetar um jogador.
	// Funcionalidade: Volta os valores iniciais de um determinado jogador (Deleta um jogador).
	//	
	function reseta_variaveis() {
		relogio_comecou = false;
		resposta_jogador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		marcador_resposta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		nivel_atual = 0; 
		pontuacao_total = 0;
		pontuacao_tempo_atual = 0; 
		desistiu = false; 
		tempo_acabou = false; 
	}

	//
	// Função: Apresentar a pontuação após uma partida.
	// Funcionalidade: Mostra ao jogador sua pontuação, dicas, avisos e recorde em um determinado nível. 
	//	
	function mostra_pontuacao_final() {
		$("#tela_final").css("background-color", muda_cor_pergunta(nivel_atual + 1));
		$("#tela_final").append("<img src ='imagens/personagens/"+(retorna_nome_personagem(nivel_atual))+".png' class='personagem_final'>");
		$("#tela_final").append("<div id='holder_comentario_pontuacao'>"+(comentario_pontuacao[calcula_qtd_estrelas(pontuacao_total + pontuacao_tempo_atual)])+"</div>");
		$("#tela_final").append("<div id='holder_pontuacao_atual' class='caixa_mensagem_recorde'></div>");
		$("#tela_final").append("<div id='caixa_estrelas_atual'></div>");	
		mostra_estrelas((pontuacao_total + pontuacao_tempo_atual), $("#caixa_estrelas_atual"), $("#holder_pontuacao_atual"), "Pontuação nessa partida:");
		$("#tela_final").append("<div id='holder_pontuacao_recorde' class='caixa_mensagem_recorde'></div>");	
		$("#tela_final").append("<div id='caixa_estrelas_recorde'></div>");
		mostra_estrelas(jogadores[jogador_atual].todos_os_pontos_total[nivel_atual], $("#caixa_estrelas_recorde"), $("#holder_pontuacao_recorde"), "Recorde nesse nível:"); // mostra pontuação(estrelas) recorde! 
	}

	//
	// Função: Mostrar uma dica.
	// Funcionalidade: Aplica uma dica de acordo com o nível.
	//	
	function mostra_dicas() {
		$("#tela_final").append("<div id='holder_dicas'></div>");
		$("#holder_dicas").append(dicas[nivel_atual]+"<img src='imagens/botoes/botao_mais.png' id='botao_mais' class='botao_mais'>"); 
	}

	//
	// Função: Calcular a quantidade de estrelas de um jogador de acordo com sua pontuação.
	// Funcionalidade: Retorna a quantidade de estrelas (0 a 5) que um jogador conseguiu em uma partida.
	//	
	function calcula_qtd_estrelas(total_pontos) {
		var qtd_estrelas;
		if (total_pontos == 140) {
			qtd_estrelas = 5;
		} else if (total_pontos >= 120) {
			qtd_estrelas = 4;
		} else if (total_pontos >= 100) {
			qtd_estrelas = 3;
		} else if (total_pontos >= 70) {
			qtd_estrelas = 2;
		} else if (total_pontos >= 40) {
			qtd_estrelas = 1;
		} else {
			qtd_estrelas = 0;
		}
		return qtd_estrelas;
	}

	//
	// Função: Mostrar a quantidade de estrelas para o jogador.
	// Funcionalidade: Apresenta a imagem equivalente a quantidade de estrelas que um jogador conseguiu.
	//	
	function mostra_estrelas(total_pontos, div_estrelas, holder_pontuacao, mensagem) {
		holder_pontuacao.append(mensagem);
		var qtd_estrelas = calcula_qtd_estrelas(total_pontos);
		div_estrelas.append("<img src='imagens/estrelas/estrelas_"+(qtd_estrelas)+".png' class='imagem'>");
	}

	//
	// Função: Mostrar a tela final após uma partida.
	// Funcionalidade: Cria e remove as divs necessárias para a apresentação da tela final de um jogo.
	//	
	function mostra_tela_final() {
		$("#tela_de_jogo").remove();
		$("#caixa_imagens_jogo").remove();
		$("#container").append("<div id='tela_final'></div>");
		$("#tela_final").append("<div id='caixa_pontuacao_atual'></div>");
		$("#tela_final").append("<div id='caixa_tempo'></div>");
	}

	//
	// Função: Colocar o marcador de erros e acertos.
	// Funcionalidade: Coloca e atualiza o marcador de erros e acertos de uma partida qualquer.
	//	
	function coloca_marcadores() {
		$("#tela_de_jogo").append("<div id='marcador_de_acertos'></div>");
		$("#marcador_de_acertos").append("<div id='holder_bolinhas_acerto'></div>");
		for (contador = 0; contador < QUANTIDADE_OPCOES; contador++) {
			if (marcador_resposta[contador] == 0) { // em branco
				$("#holder_bolinhas_acerto").append("<img src='imagens/marcadores/marcador_acerto_branco.png' class='marcador_acerto imagem_escalavel_y'>");	
			} else if (marcador_resposta[contador] == 1) { // alternativa certa
				$("#holder_bolinhas_acerto").append("<img src='imagens/marcadores/marcador_acerto_verde.png' class='marcador_acerto imagem_escalavel_y'>");
			} else { // alternativa errada
				$("#holder_bolinhas_acerto").append("<img src='imagens/marcadores/marcador_acerto_vermelho.png' class='marcador_acerto imagem_escalavel_y'>");
			}	
		}
	}

	//
	// Função: Colocar um botão ok padrão.
	// Funcionalidade: Coloca um botão ok em qualquer div parâmetro.
	//	
	function coloca_botao_ok(div_atual) {
		div_atual.append("<div id='botao_ok'><img src='imagens/botoes/botao_ok.png' class='imagem'></div>");
	}

	//
	// Função: Verifica se o jogador acertou após escolher uma alternativa.
	// Funcionalidade: Após a escolha de uma alternativa, esta função verifica se o jogador acertou.
	//	
	function verifica_se_acertou_para_marcador(numero_resposta, numero_opcao) {
		if (verifica_se_acertou(numero_resposta, numero_opcao) === true) {
			marcador_resposta[numero_opcao] = 1;
		} else {
			marcador_resposta[numero_opcao] = 2; 
		}
	}

	//
	// Função: Cria uma tela de desistir.
	// Funcionalidade: Cria uma tela de desistir com a mensagem, e os botões sim ou não.
	//	
	function mostra_tela_desistir() {
		remove_tela_desistir();
		$("#tela_de_jogo").append("<div id='oculta_tela_de_jogo'></div>");
		$("#tela_de_jogo").append("<div id='tela_desistir'></div>");
		$("#tela_desistir").css("background-color",muda_cor_pergunta(nivel_atual + 1));
		$("#tela_desistir").append("Tem certeza que deseja desistir?");
		$("#tela_desistir").append("<div id='holder_botao_simOuNao'></div>");
		$("#holder_botao_simOuNao").append("<img id='botao_desistir_sim' src='imagens/botoes/botao_sim.png' class='botao_sim'>");
		$("#holder_botao_simOuNao").append("<img id='botao_desistir_nao' src='imagens/botoes/botao_nao.png' class='botao_nao'>");
	}

	//
	// Função: Retirar a tela de desistir. 
	// Funcionalidade: Remove as divs pais e todos os filhos da tela de desistir.
	//	
	function remove_tela_desistir() {
		$("#tela_invisivel").remove();
		$("#oculta_tela_de_jogo").remove();
		$("#tela_desistir").remove();
	}

	//
	// Função: Colocar as imagens de uma partida.
	// Funcionalidade: Coloca as 3 alternativas de acordo com o nível e o desenvolvimento da partida.
	//	
	function coloca_imagens_do_jogo(numero_opcoes) { 
		for (var contador = 0; contador < 3; contador++) {
			$("#caixa_imagens_jogo").append("<div id ='opcao_"+ (contador + 1) +"' class='caixa_opcao'><img src='imagens/alimentos/nivel_"+ (nivel_atual + 1) +"/opcoes_"+ (numero_opcoes + 1) +"/alimento_"+ (contador + 1) +".jpg' class='imagem_jogo'></div>");	
			$("#opcao_"+(contador+1)).append("<div id='descricao_"+(contador+1)+"' class='holder_descricao_imagem'></div>");
			$("#descricao_"+(contador+1)).append(coloca_descricao_imagem(contador, numero_opcoes));
		}
	}

	//
	// Função: Colocar uma descrição de um determinado alimento.
	// Funcionalidade: Coloca uma descrição de uma imagem de acordo com o nível e o desenvolvimento da partida.
	//	
	function coloca_descricao_imagem(contador, numero_opcao) {
		// 0 a 9: opcao 1
		// 10 a 19: opcao 2
		// 20 a 29: opcao 3
		var numero_descricao = 0;
		descricao = "";
		if (contador == 0) {
			// opcao 1
			numero_descricao = numero_opcao;
		} else if (contador == 1) {
			// opcao 2
			numero_descricao = numero_opcao + 10;
		} else {
			// opcao 3
			numero_descricao = numero_opcao + 20;
		}
		switch (nivel_atual) {
			case 0: 
				descricao = descricao_nivel_1[numero_descricao];
				break;
			case 1:
				descricao = descricao_nivel_2[numero_descricao];
				break;
			case 2:
				descricao = descricao_nivel_3[numero_descricao];
				break;
			case 3:
				descricao = descricao_nivel_4[numero_descricao];
				break;
			case 4:
				descricao = descricao_nivel_5[numero_descricao];
				break;
			case 5:
				descricao = descricao_nivel_6[numero_descricao];
				break;
			case 6:
				descricao = descricao_nivel_7[numero_descricao];
				break;
			case 7:
				descricao = descricao_nivel_8[numero_descricao];
				break;
			case 8:
				descricao = descricao_nivel_9[numero_descricao];
				break;
			case 9:
				descricao = descricao_nivel_10[numero_descricao];
				break;
			case 10:
				descricao = descricao_nivel_11[numero_descricao];
				break;
			case 11:
				descricao = descricao_nivel_12[numero_descricao];
				break;
			case 12:
				descricao = descricao_nivel_13[numero_descricao];
				break;
			case 13:
				descricao = descricao_nivel_14[numero_descricao];
				break;
			case 14:
				descricao = descricao_nivel_15[numero_descricao];
				break;
			case 15:
				descricao = descricao_nivel_16[numero_descricao];
				break;
			case 16:
				descricao = descricao_nivel_17[numero_descricao];
				break;
			case 17:
				descricao = descricao_nivel_18[numero_descricao];
				break;
			case 18:
				descricao = descricao_nivel_19[numero_descricao];
				break;
			default:
				descricao = descricao_nivel_20[numero_descricao];
				break;
		}
		return ""+descricao+"";
	}

	//
	// Função: Mudar a cor de um determinado nível.
	// Funcionalidade: Retorna uma cor diferente de acordo com o nível de uma partida.
	//	
	function muda_cor_pergunta(numero_pergunta) { 
		switch (numero_pergunta) {
			case 1:
				return "#625a9b";
				break;
			case 2:			
				return "#419557";
				break;
			case 3:			
				return "#a84165";
				break;
			case 4:			
				return "#CC4120";
				break;
			case 5:
				return "#0079a1";
				break;
			case 6:
				return "#a8534b";
				break;
			case 7:
				return "#589C7B"; 
				break;
			case 8:
				return "#312a31"; 
				break;
			case 9:
				return "#4c392b"; 
				break;
			case 10:
				return "#9122D6"; 
				break;
			case 11:
				return "#2E8E1C";
				break;
			case 12:
				return "#9720CC";
				break;
			case 13: 
				return "#717074";
				break;
			case 14:
				return "#625a9b";
				break;
			case 15:			
				return "#419557";
				break;
			case 16:			
				return "#a84165";
				break;
			case 17:			
				return "#CC4120";
				break;
			case 18:
				return "#0079a1";
				break;
			case 19:
				return "#a8534b";
				break;
			default:
				return "#589C7B"; 
		}
	}

	//
	// Função: Remover as divs necessárias para o menu de opções.
	// Funcionalidade: Retira algumas divs para que o menu de opções possa ser apresentado.
	//	
	function remove_divs_para_opcoes() {
		$("#tela_de_carregamento").remove();
		$("#menu_de_niveis").remove();
		$("#menu_de_creditos").remove();
	}

	//
	// Função: Remover as divs necessárias para o menu de níveis.
	// Funcionalidade: Retira algumas divs para que o menu de níveis possa ser apresentado.
	//	
	function remove_divs_para_niveis() {
		$("#menu_de_opcoes").remove();
		$("#tela_de_pergunta").remove();
		$("#caixa_pergunta").remove();
	}

	//
	// Função: Remover as divs necessárias para o menu de créditos.
	// Funcionalidade: Retira algumas divs para que o menu de créditos possa ser apresentado.
	//	
	function remove_divs_para_creditos() {
		$("#menu_de_opcoes").remove();
	}

	//
	// Função: Remover as divs necessárias para o menu de pergunta.
	// Funcionalidade: Retira algumas divs para que o menu de pergunta possa ser apresentado.
	//	
	function remove_divs_para_pergunta() {
		$("#menu_de_niveis").remove();
	}

	//
	// Função: Escrever os créditos.
	// Funcionalidade: Coloca os créditos no menu de créditos.
	//	
	function escreve_creditos() {
		$("#caixa_dos_creditos").append("<b>Programação e web-design:</b><br>Thiago Anderson Martins (thianmaru@icloud.com)");
		$("#caixa_dos_creditos").append("<br><br>");
		$("#caixa_dos_creditos").append("<b>Equipe do Consea Nacional:</b><br> Marcelo Gonçalves, Michelle Andrade, Carlos Eduardo Fonseca, Mirlane Klimach, Thais Rocha, Tiago Karl, Bárbara Ferreira, Ana Carolina Abecassis, Mônica Maranhão, Thiago Jacques, Marcelo Torres, Beatriz Eva, Patrícia Nobre, Patrícia Ferreira, Loíze Aurélio, Tita Moreira, Marina Lima, Roberta Sá, Luiz Dombek, Edna Santos, Eliabe Kleiner, Leonardo Costa, Danielle Souza");
		$("#caixa_dos_creditos").append("<br><br>");
		$("#caixa_dos_creditos").append("<b>Conteúdo: licenciado em Creative Commons CC BY 3.0</b><br>");
		$("#caixa_dos_creditos").append("<br><b>Apoio: Caisan/MDS </b><br><br>");
		$("#caixa_dos_creditos").append("<b>Para ter acesso ao código fonte e referências, <a href='https://github.com/ThiagoAM/comida_de_verdade_1_0' target='_blank'>clique aqui!</a></b>");
	}

} // Fim inicia_jogo()
