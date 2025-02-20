// Função para busca automatizada
document.getElementById('search').addEventListener('input', searchCID);

function searchCID() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    console.log("Search Query:", searchQuery); // Mensagem de depuração
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Limpa resultados anteriores

    // Simulação de resultados de busca
    const results = [
        
        // Adicione mais códigos CID-10 aqui... doenças bacterianas e zoonoticas - abaixo
         
            { cid: "A00", name: "Cólera", synonyms: ["Infecção por Vibrio cholerae", "doença diarreica aguda", "doença do Vibrio"] },
            { cid: "A01", name: "Febre tifóide", synonyms: ["Infecção por Salmonella typhi", "febre entérica", "tifo"] },
            { cid: "A02", name: "Outras infecções por Salmonella", synonyms: ["Salmonelose", "infecção por Salmonella", "diarreia por Salmonella"] },
            { cid: "A03", name: "Shigelose", synonyms: ["Infecção por Shigella", "disenteria bacilar", "disenteria por Shigella"] },
            { cid: "A04", name: "Outras infecções intestinais bacterianas", synonyms: ["Infecção intestinal bacteriana", "gastroenterite bacteriana", "diarreia bacteriana"] },
            { cid: "A05", name: "Outras intoxicações alimentares bacterianas", synonyms: ["Intoxicação alimentar bacteriana", "toxi-infecção alimentar", "infecção alimentar bacteriana"] },
            { cid: "A06", name: "Amebíase", synonyms: ["Disenteria amebiana", "infecção por Entamoeba histolytica", "disenteria amebiana"] },
            { cid: "A07", name: "Outras doenças intestinais por protozoários", synonyms: ["Infecção intestinal por protozoários", "giardíase", "criptosporidiose"] },
            { cid: "A08", name: "Infecções intestinais virais e outras infecções intestinais especificadas", synonyms: ["Gastroenterite viral", "diarreia viral", "rotavírus"] },
            { cid: "A15", name: "Tuberculose respiratória, confirmada por exame bacteriológico e histológico", synonyms: ["TB pulmonar", "tuberculose dos pulmões", "infecção tuberculosa pulmonar"] },
            { cid: "A16", name: "Tuberculose respiratória, não confirmada bacteriologicamente ou histologicamente", synonyms: ["TB pulmonar não confirmada", "suspeita de tuberculose pulmonar", "infecção tuberculosa suspeita"] },
            { cid: "A17", name: "Tuberculose do sistema nervoso", synonyms: ["TB meníngea", "tuberculose cerebral", "infecção tuberculosa do sistema nervoso"] },
            { cid: "A18", name: "Tuberculose de outros órgãos", synonyms: ["TB extrapulmonar", "tuberculose de órgãos extrapulmonares", "infecção tuberculosa de outros órgãos"] },
            { cid: "A19", name: "Tuberculose miliar", synonyms: ["TB disseminada", "tuberculose miliar disseminada", "infecção tuberculosa miliar"] },

            { cid: "A20",   name: "Peste", synonyms: ["Yersinia pestis", "Peste bubônica", "Peste pneumônica"] },
            { cid: "A20.0", name: "Peste bubônica", synonyms: ["Peste bubônica", "Yersinia pestis", "inchaço dos linfonodos"] },
            { cid: "A20.1", name: "Peste celulocutânea", synonyms: ["Peste celulocutânea", "Yersinia pestis", "infecção da pele"] },
            { cid: "A20.2", name: "Peste pneumônica", synonyms: ["Peste pneumônica", "Yersinia pestis", "infecção pulmonar"] },
            { cid: "A20.3", name: "Peste meníngea", synonyms: ["Peste meníngea", "Yersinia pestis", "infecção das meninges"] },
            { cid: "A20.7", name: "Septicemia por Yersinia pestis", synonyms: ["Septicemia por Yersinia pestis", "septicemia", "infecção do sangue"] },
            { cid: "A20.8", name: "Outras formas de peste", synonyms: ["Outras formas de peste", "Yersinia pestis", "variações da peste"] },
            { cid: "A20.9", name: "Peste, não especificada", synonyms: ["Peste não especificada", "Yersinia pestis", "peste"] },
            { cid: "A21",   name: "Tularemia", synonyms: ["Francisella tularensis", "Febre de coelho", "Doença de Francis"] },
            { cid: "A21.0", name: "Tularemia ulceroglandular", synonyms: ["Tularemia ulceroglandular", "Francisella tularensis", "úlcera e inchaço dos linfonodos"] },
            { cid: "A21.1", name: "Tularemia glandular", synonyms: ["Tularemia glandular", "Francisella tularensis", "inchaço dos linfonodos sem úlcera"] },
            { cid: "A21.2", name: "Tularemia oculoglandular", synonyms: ["Tularemia oculoglandular", "Francisella tularensis", "infecção ocular"] },
            { cid: "A21.3", name: "Tularemia orofaríngea", synonyms: ["Tularemia orofaríngea", "Francisella tularensis", "infecção oral e faríngea"] },
            { cid: "A21.7", name: "Tularemia generalizada", synonyms: ["Tularemia generalizada", "Francisella tularensis", "infecção sistêmica"] },
            { cid: "A21.8", name: "Outras formas de tularemia", synonyms: ["Outras formas de tularemia", "Francisella tularensis", "variações da tularemia"] },
            { cid: "A21.9", name: "Tularemia, não especificada", synonyms: ["Tularemia não especificada", "Francisella tularensis", "tularemia"] },
            { cid: "A22",   name: "Carbúnculo", synonyms: ["Bacillus anthracis", "Antraz", "Carbúnculo cutâneo"] },
            { cid: "A22.0", name: "Carbúnculo cutâneo", synonyms: ["Carbúnculo cutâneo", "Bacillus anthracis", "antraz cutâneo"] },
            { cid: "A22.1", name: "Carbúnculo pulmonar", synonyms: ["Carbúnculo pulmonar", "Bacillus anthracis", "antraz pulmonar"] },
            { cid: "A22.2", name: "Carbúnculo gastrointestinal", synonyms: ["Carbúnculo gastrointestinal", "Bacillus anthracis", "antraz gastrointestinal"] },
            { cid: "A22.7", name: "Carbúnculo septicêmico", synonyms: ["Carbúnculo septicêmico", "Bacillus anthracis", "septicemia por antraz"] },
            { cid: "A22.8", name: "Outras formas de carbúnculo", synonyms: ["Outras formas de carbúnculo", "Bacillus anthracis", "variações do antraz"] },
            { cid: "A22.9", name: "Carbúnculo, não especificado", synonyms: ["Carbúnculo não especificado", "Bacillus anthracis", "antraz"] },
            { cid: "A23",   name: "Brucelose", synonyms: ["Brucella", "Febre de Malta", "Febre ondulante"] },
            { cid: "A23.0", name: "Brucelose devido a Brucella melitensis", synonyms: ["Brucella melitensis", "Febre de Malta", "brucelose caprina"] },
            { cid: "A23.1", name: "Brucelose devido a Brucella abortus", synonyms: ["Brucella abortus", "Febre de Bang", "brucelose bovina"] },
            { cid: "A23.2", name: "Brucelose devido a Brucella suis", synonyms: ["Brucella suis", "Febre de Bang suína", "brucelose suína"] },
            { cid: "A23.3", name: "Brucelose devido a Brucella canis", synonyms: ["Brucella canis", "Febre de Bang canina", "brucelose canina"] },
            { cid: "A23.8", name: "Outras formas de brucelose", synonyms: ["Outras formas de brucelose", "Brucella", "variações da brucelose"] },
            { cid: "A23.9", name: "Brucelose, não especificada", synonyms: ["Brucelose não especificada", "Brucella", "brucelose"] },
            { cid: "A24",   name: "Mormo", synonyms: ["Burkholderia mallei", "Farfalheira", "Doença do Burro"] },
            { cid: "A24.0", name: "Mormo cutâneo", synonyms: ["Mormo cutâneo", "Burkholderia mallei", "infecção cutânea por mormo"] },
            { cid: "A24.1", name: "Mormo pulmonar", synonyms: ["Mormo pulmonar", "Burkholderia mallei", "infecção pulmonar por mormo"] },
            { cid: "A24.2", name: "Mormo septicêmico", synonyms: ["Mormo septicêmico", "Burkholderia mallei", "septicemia por mormo"] },
            { cid: "A24.3", name: "Outras formas de mormo", synonyms: ["Outras formas de mormo", "Burkholderia mallei", "variações do mormo"] },
            { cid: "A24.4", name: "Mormo, não especificado", synonyms: ["Mormo não especificado", "Burkholderia mallei", "mormo"] },
            { cid: "A25",   name: "Febre da mordedura de rato", synonyms: ["Streptobacillus moniliformis", "Spirillum minus", "Febre por mordedura de rato"] },
            { cid: "A25.0", name: "Febre da mordedura de rato por Streptobacillus", synonyms: ["Streptobacillus moniliformis", "Febre por mordedura de rato", "infecção por Streptobacillus"] },
            { cid: "A25.1", name: "Febre da mordedura de rato por Spirillum", synonyms: ["Spirillum minus", "Febre por mordedura de rato", "infecção por Spirillum"] },
            { cid: "A25.9", name: "Febre da mordedura de rato, não especificada", synonyms: ["Febre da mordedura de rato não especificada", "Febre por mordedura de rato", "infecção não especificada por mordedura de rato"] },
            { cid: "A26",   name: "Erisipelóide", synonyms: ["Erysipelothrix rhusiopathiae", "Erisipelóide", "Infecção cutânea por Erysipelothrix"] },
            { cid: "A26.0", name: "Erisipelóide cutâneo", synonyms: ["Erisipelóide cutâneo", "Erysipelothrix rhusiopathiae", "infecção cutânea por erisipelóide"] },
            { cid: "A26.7", name: "Erisipelóide septicêmico", synonyms: ["Erisipelóide septicêmico", "Erysipelothrix rhusiopathiae", "septicemia por erisipelóide"] },
            { cid: "A26.8", name: "Outras formas de erisipelóide", synonyms: ["Outras formas de erisipelóide", "Erysipelothrix rhusiopathiae", "variações de erisipelóide"] },
            { cid: "A26.9", name: "Erisipelóide, não especificado", synonyms: ["Erisipelóide não especificado", "Erysipelothrix rhusiopathiae", "erisipelóide"] },
            { cid: "A27",   name: "Leptospirose", synonyms: ["Leptospira", "Doença de Weil", "Icterohemorrágica"] },
            { cid: "A27.0", name: "Leptospirose ictérica", synonyms: ["Leptospirose ictérica", "Leptospira", "Doença de Weil"] },
            { cid: "A27.8", name: "Outras formas de leptospirose", synonyms: ["Outras formas de leptospirose", "Leptospira", "variações de leptospirose"] },
            { cid: "A27.9", name: "Leptospirose, não especificada", synonyms: ["Leptospirose não especificada", "Leptospira", "leptospirose"] },
            { cid: "A28",   name: "Outras doenças bacterianas zoonóticas, não classificadas em outra parte", synonyms: ["Outras doenças zoonóticas bacterianas", "zoonoses bacterianas", "infecções bacterianas zoonóticas"] },
            { cid: "A28.0", name: "Pasteurelose", synonyms: ["Pasteurella", "infecção por Pasteurella", "pasteurelose cutânea"] },
            { cid: "A28.1", name: "Infecção por Capnocytophaga canimorsus", synonyms: ["Capnocytophaga canimorsus", "infecção por mordida de cão", "capnocitofagose"] },
            { cid: "A28.2", name: "Infecção por Erysipelothrix", synonyms: ["Erysipelothrix", "infecção por Erysipelothrix", "erisipeloide"] },
            { cid: "A28.8", name: "Outras doenças bacterianas zoonóticas especificadas", synonyms: ["Outras doenças zoonóticas bacterianas especificadas", "zoonoses bacterianas especificadas", "infecções bacterianas zoonóticas específicas"] },
            { cid: "A28.9", name: "Doença bacteriana zoonótica, não especificada", synonyms: ["Doença zoonótica bacteriana não especificada", "zoonose bacteriana", "infecção bacteriana zoonótica"] },
                       
            { cid: "A30", name: "Hanseníase [lepra]", synonyms: ["Doença de Hansen", "lepra", "infecção por Mycobacterium leprae"] },
            { cid: "A31", name: "Infecção por outras micobactérias", synonyms: ["Micobacteriose", "infecção por Mycobacterium", "doença micobacteriana"] },
            { cid: "A32", name: "Listeriose", synonyms: ["Infecção por Listeria monocytogenes", "listeriose neonatal", "listeriose materna"] },
            { cid: "A33", name: "Tétano neonatal", synonyms: ["Trismo neonatal", "tétano em recém-nascidos", "infecção por Clostridium tetani"] },
            { cid: "A34", name: "Tétano obstétrico", synonyms: ["Tétano puerperal", "infecção tetânica obstétrica", "tétano após parto"] },
            { cid: "A35", name: "Tétano, não especificado", synonyms: ["Tétano", "trismo", "infecção por Clostridium tetani"] },
            { cid: "A36", name: "Difteria", synonyms: ["Infecção por Corynebacterium diphtheriae", "difteria respiratória", "difteria cutânea"] },
            { cid: "A37", name: "Coqueluche", synonyms: ["Tosse convulsa", "infecção por Bordetella pertussis", "coqueluche em crianças"] },
            { cid: "A38", name: "Escarlatina", synonyms: ["Febre escarlatina", "infecção por Streptococcus pyogenes", "escarlatina em crianças"] },
            { cid: "A39", name: "Meningococemia", synonyms: ["Infecção meningocócica", "meningite meningocócica", "septicemia meningocócica"] },
            { cid: "A40", name: "Septicemia estreptocócica", synonyms: ["Infecção por Streptococcus", "septicemia por estreptococos", "choque séptico estreptocócico"] },
            { cid: "A41", name: "Outras septicemias", synonyms: ["Septicemia", "infecção generalizada", "septicemia bacteriana"] },
            { cid: "A42", name: "Actinomicose", synonyms: ["Infecção por Actinomyces", "actinomicose pulmonar", "actinomicose cutânea"] },
            { cid: "A43", name: "Nocardiose", synonyms: ["Infecção por Nocardia", "nocardiose pulmonar", "nocardiose cutânea"] },
            { cid: "A44", name: "Bartonelose", synonyms: ["Doença da arranhadura do gato", "febre de Oroya", "verruga peruana"] },
            { cid: "A46", name: "Erisipela", synonyms: ["Infecção por Streptococcus", "erisipela cutânea", "erisipela facial"] },
            { cid: "A48", name: "Outras doenças bacterianas, não classificadas em outra parte", synonyms: ["Infecção bacteriana", "doenças bacterianas diversas", "infecções não especificadas"] },
        
        
  // Adicione mais códigos CID-10 aqui... doenças endócrinas, nutricionais e metabólicas - abaixo

  { cid: "E00",   name: "Síndrome congênita de deficiência de iodo", synonyms: ["Cretinismo", "deficiência de iodo", "hipotireoidismo congênito"] },
  { cid: "E01",   name: "Distúrbios tireoidianos relacionados com deficiência de iodo e condições relacionadas", synonyms: ["Bócio endêmico", "deficiência de iodo", "hipotireoidismo endêmico"] },
  { cid: "E02",   name: "Hipotireoidismo subclínico devido a deficiência de iodo", synonyms: ["Hipotireoidismo leve", "deficiência de iodo", "hipotireoidismo subclínico"] },
  { cid: "E03",   name: "Outras formas de hipotireoidismo", synonyms: ["Hipotireoidismo primário", "insuficiência tireoidiana", "hipotireoidismo adquirido"] },
  { cid: "E04",   name: "Outras formas de bócio não tóxico", synonyms: ["Bócio simples", "bócio não tóxico", "aumento da tireoide"] },
  { cid: "E05",   name: "Tireotoxicose [hipertireoidismo]", synonyms: ["Hipertireoidismo", "doença de Graves", "tireoide hiperativa"] },
  { cid: "E06",   name: "Tireoidite", synonyms: ["Inflamação da tireoide", "tireoidite autoimune", "tireoidite de Hashimoto"] },
  { cid: "E07",   name: "Outros distúrbios da tireoide", synonyms: ["Distúrbios tireoidianos", "anormalidades da tireoide", "doenças da tireoide"] },
  { cid: "E10",   name: "Diabetes mellitus tipo 1", synonyms: ["Diabetes insulino-dependente", "diabetes juvenil", "diabetes tipo 1"] },
  { cid: "E13",   name: "Outros tipos específicos de diabetes mellitus", synonyms: ["Diabetes secundário", "diabetes devido a outras condições", "diabetes específico"] },
  { cid: "E15",   name: "Coma hipoglicêmico, não diabético", synonyms: ["Coma hipoglicêmico", "baixo nível de açúcar no sangue", "hipoglicemia grave"] },
  { cid: "E16",   name: "Outros distúrbios da secreção interna do pâncreas", synonyms: ["Hiperinsulinismo", "insulinoma", "distúrbios pancreáticos"] },
  { cid: "E20",   name: "Hipoparatireoidismo", synonyms: ["Deficiência de paratormônio", "hipocalcemia", "hipoparatireoidismo adquirido"] },
  { cid: "E21",   name: "Hiperparatireoidismo e outros distúrbios da glândula paratireoide", synonyms: ["Hiperparatireoidismo", "excesso de paratormônio", "distúrbios da paratireoide"] },
  { cid: "E22",   name: "Hiperfunção da hipófise", synonyms: ["Acromegalia", "gigantismo", "síndrome de Cushing"] },
  { cid: "E23",   name: "Hipofunção e outros distúrbios da hipófise", synonyms: ["Hipopituitarismo", "insuficiência hipofisária", "síndrome de Sheehan"] },
  { cid: "E24",   name: "Síndrome de Cushing", synonyms: ["Hipercortisolismo", "hiperadrenocorticismo", "excesso de cortisol"] },
  { cid: "E25",   name: "Distúrbios adrenogenitais", synonyms: ["Hiperplasia adrenal congênita", "síndrome adrenogenital", "deficiência de 21-hidroxilase"] },
  { cid: "E26",   name: "Hiperaldosteronismo", synonyms: ["Síndrome de Conn", "excesso de aldosterona", "hiperaldosteronismo primário"] },
  { cid: "E27",   name: "Outros distúrbios da glândula adrenal", synonyms: ["Insuficiência adrenal", "doença de Addison", "insuficiência adrenocortical"] },
  { cid: "E28",   name: "Distúrbios ovarianos", synonyms: ["Síndrome dos ovários policísticos", "insuficiência ovariana prematura", "distúrbios do ovário"] },
  { cid: "E29",   name: "Distúrbios testiculares", synonyms: ["Hipogonadismo masculino", "insuficiência testicular", "distúrbios do testículo"] },
  { cid: "E30",   name: "Distúrbios da puberdade não classificados em outra parte", synonyms: ["Puberdade precoce", "puberdade retardada", "distúrbios puberais"] },
  { cid: "E31",   name: "Disfunção poliglandular", synonyms: ["Síndrome poliglandular autoimune", "insuficiência poliglandular", "distúrbios multiglandulares"] },
  { cid: "E32",   name: "Doenças do timo", synonyms: ["Hipoplasia tímica", "timoma", "distúrbios tímicos"] },
  { cid: "E34",   name: "Outros distúrbios endócrinos", synonyms: ["Distúrbios endócrinos diversos", "anomalias endócrinas", "doenças das glândulas endócrinas"] },
  { cid: "E40",   name: "Kwashiorkor", synonyms: ["Desnutrição proteico-calórica grave", "desnutrição infantil", "kwashiorkor"] },
  { cid: "E41",   name: "Marasmo nutricional", synonyms: ["Desnutrição grave", "marasmo infantil", "marasmo proteico-calórico"] },
  { cid: "E42",   name: "Kwashiorkor marasmático", synonyms: ["Desnutrição proteico-calórica combinada", "kwashiorkor marasmático", "desnutrição grave combinada"] },
  { cid: "E43",   name: "Desnutrição proteico-calórica grave, não especificada", synonyms: ["Desnutrição grave", "desnutrição proteico-calórica", "desnutrição não especificada"] },
  { cid: "E44",   name: "Desnutrição proteico-calórica de grau moderado e leve", synonyms: ["Desnutrição moderada", "desnutrição leve", "desnutrição proteico-calórica moderada"] },
  { cid: "E45",   name: "Atraso do desenvolvimento devido à desnutrição proteico-calórica", synonyms: ["Atraso de crescimento", "atraso de desenvolvimento", "desnutrição proteico-calórica com atraso de crescimento"] },
  { cid: "E46",   name: "Desnutrição proteico-calórica, não especificada", synonyms: ["Desnutrição", "desnutrição proteico-calórica", "desnutrição não especificada"] },
  { cid: "E50",   name: "Deficiência de vitamina A", synonyms: ["Hipovitaminose A", "deficiência de retinol", "avitaminose A"] },
  { cid: "E51",   name: "Deficiência de tiamina", synonyms: ["Beribéri", "deficiência de vitamina B1", "avitaminose B1"] },
  { cid: "E52",   name: "Deficiência de niacina", synonyms: ["Pelagra", "deficiência de vitamina B3", "avitaminose B3"] },
  { cid: "E53",   name: "Deficiências de outras vitaminas do complexo B", synonyms: ["Deficiência de vitamina B6", "deficiência de vitamina B12", "avitaminose do complexo B"] },
  { cid: "E54",   name: "Deficiência de ácido ascórbico", synonyms: ["Escorbuto", "deficiência de vitamina C", "avitaminose C"] },
  { cid: "E55",   name: "Deficiência de vitamina D", synonyms: ["Raquitismo", "osteomalácia", "avitaminose D"] },
  { cid: "E56",   name: "Outras deficiências de vitaminas", synonyms: ["Deficiência de vitamina E", "deficiência de vitamina K", "avitaminose diversificada"] },
  { cid: "E58",   name: "Deficiência de cálcio na dieta", synonyms: ["Hipocalcemia dietética", "deficiência de cálcio alimentar", "baixa ingestão de cálcio"] },
  { cid: "E59",   name: "Deficiência de selênio", synonyms: ["Doença de Keshan", "deficiência de selênio dietética", "baixa ingestão de selênio"] },  
 
  { cid: "E61.0", name: "Deficiência de cobre", synonyms: ["Hipocupremia", "deficiência de cobre dietética", "baixa ingestão de cobre"] },
  { cid: "E61.1", name: "Deficiência de ferro", synonyms: ["Anemia ferropriva", "deficiência de ferro dietética", "baixa ingestão de ferro"] },
  { cid: "E61.2", name: "Deficiência de magnésio", synonyms: ["Hipomagnesemia", "deficiência de magnésio dietética", "baixa ingestão de magnésio"] },
  { cid: "E61.3", name: "Deficiência de fósforo", synonyms: ["Hipofosfatemia", "deficiência de fósforo dietética", "baixa ingestão de fósforo"] },
  { cid: "E61.4", name: "Deficiência de potássio", synonyms: ["Hipocalemia", "deficiência de potássio dietética", "baixa ingestão de potássio"] },
  { cid: "E61.5", name: "Deficiência de selênio", synonyms: ["Doença de Keshan", "deficiência de selênio dietética", "baixa ingestão de selênio"] },
  { cid: "E61.6", name: "Deficiência de zinco", synonyms: ["Acrodermatite enteropática", "deficiência de zinco dietética", "baixa ingestão de zinco"] },
  { cid: "E61.7", name: "Deficiência de múltiplos elementos", synonyms: ["Deficiência de minerais múltiplos", "deficiência dietética combinada", "deficiência de oligoelementos"] },
  { cid: "E62.0", name: "Desnutrição protéico-calórica", synonyms: ["Desnutrição", "kwashiorkor", "marasmo"] },
  { cid: "E63.0", name: "Excesso de ingestão de vitamina A", synonyms: ["Hipervitaminose A", "excesso de retinol", "toxicidade de vitamina A"] },
  { cid: "E63.1", name: "Excesso de ingestão de vitamina D", synonyms: ["Hipervitaminose D", "excesso de calciferol", "toxicidade de vitamina D"] },
  { cid: "E63.2", name: "Excesso de ingestão de outros elementos", synonyms: ["Hipervitaminose", "excesso de minerais", "toxicidade de elementos"] },
  { cid: "E63.3", name: "Deficiência de outras vitaminas", synonyms: ["Deficiência de vitamina K", "deficiência de vitamina E", "avitaminose diversificada"] },
  { cid: "E63.8", name: "Outras deficiências de nutrientes", synonyms: ["Deficiência de aminoácidos", "deficiência de ácidos graxos essenciais", "deficiência de nutrientes diversos"] },
  { cid: "E64.0", name: "Sequelas de desnutrição e outras deficiências nutricionais", synonyms: ["Sequelas de desnutrição", "sequelas de deficiência de vitaminas", "sequelas de deficiência mineral"] },
  { cid: "E65",   name: "Obesidade, não especificada", synonyms: ["Excesso de peso", "obesidade", "sobrepeso"] },
  { cid: "E66.0", name: "Obesidade mórbida", synonyms: ["Obesidade grave", "obesidade severa", "superobesidade"] },
  { cid: "E66.1", name: "Obesidade induzida por drogas", synonyms: ["Obesidade medicamentosa", "aumento de peso por medicamentos", "obesidade induzida por fármacos"] },
  { cid: "E66.2", name: "Obesidade mórbida com hipoventilação alveolar", synonyms: ["Síndrome de hipoventilação-obesidade", "síndrome de Pickwick", "hipoventilação em obesidade"] },
  { cid: "E67.0", name: "Hipervitaminose A", synonyms: ["Excesso de vitamina A", "intoxicação por vitamina A", "toxicidade de retinol"] },
  { cid: "E67.1", name: "Hipervitaminose D", synonyms: ["Excesso de vitamina D", "intoxicação por vitamina D", "toxicidade de calciferol"] },
  { cid: "E67.2", name: "Hipervitaminose E", synonyms: ["Excesso de vitamina E", "intoxicação por vitamina E", "toxicidade de tocoferol"] },
  { cid: "E67.3", name: "Hipervitaminose K", synonyms: ["Excesso de vitamina K", "intoxicação por vitamina K", "toxicidade de filoquinona"] },
  { cid: "E70.0", name: "Fenilcetonúria", synonyms: ["PKU", "deficiência de fenilalanina hidroxilase", "erro inato do metabolismo de fenilalanina"] },
  { cid: "E70.1", name: "Outros distúrbios do metabolismo de aminoácidos aromáticos", synonyms: ["Tirosinemia", "alcaptonúria", "distúrbios do metabolismo de tirosina"] },
  { cid: "E70.2", name: "Distúrbios do metabolismo de aminoácidos com enxofre", synonyms: ["Homocistinúria", "distúrbios do metabolismo de metionina", "deficiência de cistationina beta-sintase"] },
  { cid: "E70.3", name: "Distúrbios do metabolismo da histidina", synonyms: ["Histidinemia", "distúrbios do metabolismo de histidina", "deficiência de histidase"] },
  { cid: "E70.8", name: "Outros distúrbios do metabolismo de aminoácidos", synonyms: ["Distúrbios metabólicos de aminoácidos", "doenças hereditárias do metabolismo de aminoácidos", "deficiências enzimáticas de aminoácidos"] },
  { cid: "E71.0", name: "Distúrbios do metabolismo de ácidos graxos", synonyms: ["Acidose láctica", "erro inato do metabolismo de ácidos graxos", "deficiência de carnitina"] },
  { cid: "E71.1", name: "Distúrbios do metabolismo de ácidos graxos com cadeia ramificada", synonyms: ["Acidúria metilmalônica", "doença da urina de xarope de bordo", "distúrbios do metabolismo de leucina"] },
  { cid: "E71.2", name: "Distúrbios do metabolismo de ácidos graxos insaturados", synonyms: ["Deficiência de desaturase", "erro inato do metabolismo de ácidos graxos insaturados", "deficiência de estearoil-CoA desaturase"] },
  { cid: "E71.3", name: "Outros distúrbios do metabolismo de ácidos graxos", synonyms: ["Distúrbios metabólicos de ácidos graxos", "deficiência de biotinidase", "deficiência de carnitina palmitoiltransferase"] },
  { cid: "E72.0", name: "Distúrbios do metabolismo de aminoácidos de cadeia ramificada e de aminoácidos não classificados em outra parte", synonyms: ["Erro inato do metabolismo de aminoácidos de cadeia ramificada", "acidúria isovalérica", "distúrbios do metabolismo de valina"] },
  { cid: "E72.1", name: "Distúrbios do metabolismo de ácidos graxos com cadeia média", synonyms: ["Acidúria metilmalônica de cadeia média", "deficiência de acil-CoA desidrogenase de cadeia média", "distúrbios do metabolismo de ácidos graxos de cadeia média"] },
  { cid: "E72.2", name: "Distúrbios do metabolismo de ácidos graxos com cadeia longa", synonyms: ["Acidúria metilmalônica de cadeia longa", "deficiência de acil-CoA desidrogenase de cadeia longa", "distúrbios do metabolismo de ácidos graxos de cadeia longa"] },
  { cid: "E72.3", name: "Distúrbios do metabolismo de ácidos graxos com cadeia curta", synonyms: ["Acidúria metilmalônica de cadeia curta", "deficiência de acil-CoA desidrogenase de cadeia curta", "distúrbios do metabolismo de ácidos graxos de cadeia curta"] },
 

// Adicione mais códigos CID-10 aqui... doenças aleatorias - abaixo
    { cid: "B35.0", name: "Tinea da barba e do cabelo", synonyms: ["Micose da barba", "micose do couro cabeludo", "infecção fúngica capilar"] },
    { cid: "C50.9", name: "Neoplasia maligna da mama, não especificada", synonyms: ["Câncer de mama", "tumor maligno de mama", "neoplasia mamária"] },
    { cid: "D50.9", name: "Anemia por deficiência de ferro, não especificada", synonyms: ["Anemia ferropriva", "deficiência de ferro", "anemia"] },
    { cid: "E66.3", name: "Excesso de peso", synonyms: ["Sobrepeso", "excesso de peso", "obesidade leve"] },
    { cid: "F41.9", name: "Transtorno de ansiedade, não especificado", synonyms: ["Ansiedade generalizada", "transtorno ansioso", "nervosismo"] },
    { cid: "G40.9", name: "Epilepsia, não especificada", synonyms: ["Convulsão", "transtorno epiléptico", "crise epiléptica"] },
    { cid: "H25.9", name: "Catarata senil, não especificada", synonyms: ["Catarata", "opacificação do cristalino", "catarata relacionada à idade"] },
    { cid: "I10",   name: "Hipertensão essencial (primária)", synonyms: ["Pressão alta", "hipertensão arterial", "tensão alta"] },
    { cid: "J44.9", name: "Doença pulmonar obstrutiva crônica, não especificada", synonyms: ["DPOC", "bronquite crônica", "enfisema"] },
    { cid: "K21.0", name: "Doença do refluxo gastroesofágico com esofagite", synonyms: ["Refluxo ácido", "azia", "doença do refluxo"] },
    { cid: "L50.9", name: "Urticária, não especificada", synonyms: ["Alergia na pele", "urticária", "coceira na pele"] },
    { cid: "M54.9", name: "Dor nas costas, não especificada", synonyms: ["Lombalgia", "dor nas costas", "dor lombar"] },
    { cid: "N30.0", name: "Cistite aguda", synonyms: ["Infecção da bexiga", "cistite", "infecção urinária"] },
    { cid: "O80",   name: "Parto único espontâneo", synonyms: ["Parto normal", "parto vaginal", "nascimento"] },
    { cid: "R42",   name: "Tontura e vertigem", synonyms: ["Vertigem", "tontura", "desequilíbrio"] },
    { cid: "Z23",   name: "Vacinação", synonyms: ["Imunização", "vacina", "vacinação"] },

   
// Adicione mais códigos CID-10 aqui... traumas causados por acidentes - abaixo
{ cid: "V01", name: "Pedestre traumatizado em colisão com veículo a motor", synonyms: ["Atropelamento", "acidente de pedestre", "colisão com veículo"] },
{ cid: "V02", name: "Pedestre traumatizado em colisão com motocicleta", synonyms: ["Atropelamento por motocicleta", "acidente de pedestre com moto", "colisão com motocicleta"] },
{ cid: "V03", name: "Pedestre traumatizado em colisão com veículo não motorizado", synonyms: ["Atropelamento por bicicleta", "acidente de pedestre com bicicleta", "colisão com veículo não motorizado"] },
{ cid: "V04", name: "Pedestre traumatizado em colisão com veículo ferroviário", synonyms: ["Atropelamento por trem", "acidente de pedestre com trem", "colisão com veículo ferroviário"] },
{ cid: "V05", name: "Pedestre traumatizado em colisão com outro veículo", synonyms: ["Atropelamento por outro veículo", "acidente de pedestre com veículo não especificado", "colisão com outro veículo"] },
{ cid: "V06", name: "Pedestre traumatizado em colisão com vários veículos", synonyms: ["Atropelamento por múltiplos veículos", "acidente de pedestre com vários veículos", "colisão com vários veículos"] },
{ cid: "V09", name: "Pedestre traumatizado em outro tipo de acidente de transporte", synonyms: ["Acidente de pedestre não especificado", "colisão de pedestre com objeto em movimento", "acidente de transporte envolvendo pedestre"] },
{ cid: "V10", name: "Ciclista traumatizado em colisão com pedestre ou animal", synonyms: ["Acidente de bicicleta com pedestre", "colisão de ciclista com pedestre", "acidente de ciclista com animal"] },
{ cid: "V11", name: "Ciclista traumatizado em colisão com outro ciclista", synonyms: ["Acidente de bicicleta com outra bicicleta", "colisão de ciclista com ciclista", "acidente de ciclista com outro ciclista"] },
{ cid: "V12", name: "Ciclista traumatizado em colisão com motocicleta", synonyms: ["Acidente de bicicleta com motocicleta", "colisão de ciclista com motocicleta", "acidente de ciclista com moto"] },
{ cid: "V13", name: "Ciclista traumatizado em colisão com veículo a motor", synonyms: ["Acidente de bicicleta com carro", "colisão de ciclista com veículo", "acidente de ciclista com veículo a motor"] },
{ cid: "V14", name: "Ciclista traumatizado em colisão com veículo ferroviário", synonyms: ["Acidente de bicicleta com trem", "colisão de ciclista com trem", "acidente de ciclista com veículo ferroviário"] },
{ cid: "V15", name: "Ciclista traumatizado em colisão com outro veículo", synonyms: ["Acidente de bicicleta com outro veículo", "colisão de ciclista com veículo não especificado", "acidente de ciclista com outro veículo"] },
{ cid: "V16", name: "Ciclista traumatizado em colisão com vários veículos", synonyms: ["Acidente de bicicleta com múltiplos veículos", "colisão de ciclista com vários veículos", "acidente de ciclista com vários veículos"] },
{ cid: "V17", name: "Ciclista traumatizado em colisão com objeto fixo ou estacionário", synonyms: ["Acidente de bicicleta com objeto fixo", "colisão de ciclista com objeto estacionário", "acidente de ciclista com objeto"] },
{ cid: "V18", name: "Ciclista traumatizado em colisão não especificada", synonyms: ["Acidente de bicicleta não especificado", "colisão de ciclista não especificada", "acidente de ciclista sem detalhes"] },
{ cid: "V19", name: "Ciclista traumatizado em outro tipo de acidente de transporte", synonyms: ["Acidente de bicicleta em transporte", "colisão de ciclista em transporte", "acidente de ciclista em trânsito"] },
{ cid: "V20", name: "Motociclista traumatizado em colisão com pedestre ou animal", synonyms: ["Acidente de moto com pedestre", "colisão de motociclista com pedestre", "acidente de motociclista com animal"] },
{ cid: "V21", name: "Motociclista traumatizado em colisão com outro motociclista", synonyms: ["Acidente de moto com outra moto", "colisão de motociclista com motociclista", "acidente de motociclista com outro motociclista"] },
{ cid: "V22", name: "Motociclista traumatizado em colisão com veículo a motor", synonyms: ["Acidente de moto com carro", "colisão de motociclista com veículo", "acidente de motociclista com veículo a motor"] },
{ cid: 'S00', name: 'Traumatismos superficiais da cabeça', synonyms: ['Contusão', 'Abrasão', 'Ferida superficial'] },
    { cid: 'S00.0', name: 'Contusão do couro cabeludo', synonyms: ['Hematoma no couro cabeludo', 'Ferida no couro cabeludo'] },
    { cid: 'S00.1', name: 'Contusão da pálpebra e região periocular', synonyms: ['Hematoma periocular', 'Olho roxo'] },
    { cid: 'S00.2', name: 'Outros traumatismos superficiais do couro cabeludo', synonyms: ['Abrasão no couro cabeludo', 'Arranhão no couro cabeludo'] },
    { cid: 'S00.3', name: 'Outros traumatismos superficiais da pálpebra e região periocular', synonyms: ['Arranhão no olho', 'Contusão periocular'] },
    { cid: 'S00.8', name: 'Outros traumatismos superficiais especificados da cabeça', synonyms: ['Contusão da cabeça', 'Ferida superficial na cabeça'] },
    { cid: 'S00.9', name: 'Traumatismo superficial da cabeça, parte não especificada', synonyms: ['Contusão não especificada na cabeça', 'Ferida superficial não especificada'] },
    { cid: 'S01', name: 'Ferimentos da cabeça', synonyms: ['Laceração da cabeça', 'Corte na cabeça'] },
    { cid: 'S01.0', name: 'Ferimento do couro cabeludo', synonyms: ['Corte no couro cabeludo', 'Laceração no couro cabeludo'] },
    { cid: 'S01.1', name: 'Ferimento da pálpebra e região periocular', synonyms: ['Corte no olho', 'Laceração periocular'] },
    { cid: 'S01.2', name: 'Ferimento do nariz', synonyms: ['Corte no nariz', 'Laceração nasal'] },
    { cid: 'S01.3', name: 'Ferimento da orelha', synonyms: ['Corte na orelha', 'Laceração auricular'] },
    { cid: 'S01.4', name: 'Ferimento da bochecha e da região temporomandibular', synonyms: ['Corte na bochecha', 'Laceração temporomandibular'] },
    { cid: 'S01.5', name: 'Ferimento do lábio e da cavidade oral', synonyms: ['Corte no lábio', 'Laceração oral'] },
    { cid: 'S01.7', name: 'Ferimento múltiplo da cabeça', synonyms: ['Múltiplos cortes na cabeça', 'Múltiplas lacerações na cabeça'] },
    { cid: 'S01.8', name: 'Outros ferimentos da cabeça', synonyms: ['Outros cortes na cabeça', 'Outras lacerações na cabeça'] },
    { cid: 'S01.9', name: 'Ferimento da cabeça, parte não especificada', synonyms: ['Corte não especificado na cabeça', 'Laceração não especificada'] },
    { cid: 'S02', name: 'Fraturas do crânio e ossos da face', synonyms: ['Fratura craniana', 'Fratura facial'] },
    { cid: 'S02.0', name: 'Fratura do crânio', synonyms: ['Fratura craniana', 'Fratura do osso do crânio'] },
    { cid: 'S02.1', name: 'Fratura da base do crânio', synonyms: ['Fratura basal', 'Fratura do osso basal'] },
    { cid: 'S02.2', name: 'Fratura da mandíbula', synonyms: ['Fratura do maxilar inferior', 'Fratura mandibular'] },
    { cid: 'S02.3', name: 'Fratura do nariz', synonyms: ['Fratura nasal', 'Fratura dos ossos nasais'] },
    { cid: 'S02.4', name: 'Fratura da órbita', synonyms: ['Fratura orbital', 'Fratura dos ossos da órbita'] },
    { cid: 'S02.5', name: 'Fratura do osso zigomático', synonyms: ['Fratura do osso zigomático', 'Fratura do arco zigomático'] },
    { cid: 'S02.6', name: 'Fratura dos dentes', synonyms: ['Fratura dental', 'Fratura do dente'] },
    { cid: 'S02.7', name: 'Fraturas múltiplas do crânio e ossos da face', synonyms: ['Fraturas múltiplas cranianas', 'Fraturas múltiplas faciais'] },
    { cid: 'S02.8', name: 'Outras fraturas especificadas do crânio e ossos da face', synonyms: ['Outras fraturas cranianas', 'Outras fraturas faciais'] },
    { cid: 'S02.9', name: 'Fratura do crânio e ossos da face, parte não especificada', synonyms: ['Fratura não especificada do crânio', 'Fratura não especificada dos ossos da face'] },
    { cid: 'S03', name: 'Luxações, entorses e distensões das articulações e dos ligamentos da cabeça', synonyms: ['Luxação craniana', 'Entorse craniana'] },
    { cid: 'S03.0', name: 'Luxação da mandíbula', synonyms: ['Luxação do maxilar', 'Luxação mandibular'] },
    { cid: 'S03.1', name: 'Luxação da articulação temporomandibular', synonyms: ['Luxação da ATM', 'Luxação temporomandibular'] },
    { cid: 'S03.2', name: 'Luxação da órbita', synonyms: ['Luxação orbital', 'Luxação do olho'] },
    { cid: 'S03.3', name: 'Luxação do nariz', synonyms: ['Luxação nasal', 'Luxação do osso nasal'] },
    { cid: 'S03.4', name: 'Luxação da orelha', synonyms: ['Luxação auricular', 'Luxação da orelha externa'] },
    { cid: 'S03.5', name: 'Luxação da boca', synonyms: ['Luxação oral', 'Luxação da cavidade oral'] },
    { cid: 'S03.6', name: 'Luxação da face', synonyms: ['Luxação facial', 'Luxação dos ossos faciais'] },
    { cid: 'S03.7', name: 'Luxações múltiplas da cabeça', synonyms: ['Luxações múltiplas cranianas', 'Luxações múltiplas faciais'] },
    { cid: 'S03.8', name: 'Outras luxações especificadas da cabeça', synonyms: ['Outras luxações cranianas', 'Outras luxações faciais'] },
    { cid: 'S03.9', name: 'Luxação da cabeça, parte não especificada', synonyms: ['Luxação não especificada da cabeça', 'Luxação não especificada craniana'] },
 
{ cid: 'S04', name: 'Traumatismos dos nervos cranianos', synonyms: ['Trauma dos nervos cranianos', 'Lesão dos nervos cranianos'] },
{ cid: 'S04.0', name: 'Traumatismo do nervo olfatório', synonyms: ['Lesão do nervo olfatório', 'Trauma do nervo olfatório'] },
{ cid: 'S04.1', name: 'Traumatismo do nervo óptico', synonyms: ['Lesão do nervo óptico', 'Trauma do nervo óptico'] },
{ cid: 'S04.2', name: 'Traumatismo do nervo oculomotor', synonyms: ['Lesão do nervo oculomotor', 'Trauma do nervo oculomotor'] },
{ cid: 'S04.3', name: 'Traumatismo do nervo troclear', synonyms: ['Lesão do nervo troclear', 'Trauma do nervo troclear'] },
{ cid: 'S04.4', name: 'Traumatismo do nervo trigêmeo', synonyms: ['Lesão do nervo trigêmeo', 'Trauma do nervo trigêmeo'] },
{ cid: 'S04.5', name: 'Traumatismo do nervo abducente', synonyms: ['Lesão do nervo abducente', 'Trauma do nervo abducente'] },
{ cid: 'S04.6', name: 'Traumatismo do nervo facial', synonyms: ['Lesão do nervo facial', 'Trauma do nervo facial'] },
{ cid: 'S04.7', name: 'Traumatismo do nervo acústico', synonyms: ['Lesão do nervo acústico', 'Trauma do nervo acústico'] },
{ cid: 'S04.8', name: 'Traumatismo de outros nervos cranianos', synonyms: ['Lesão de outros nervos cranianos', 'Trauma de outros nervos cranianos'] },
{ cid: 'S04.9', name: 'Traumatismo dos nervos cranianos, parte não especificada', synonyms: ['Lesão não especificada dos nervos cranianos', 'Trauma não especificado dos nervos cranianos'] },
{ cid: 'S05', name: 'Traumatismo do olho e da órbita', synonyms: ['Trauma ocular', 'Lesão ocular'] },
{ cid: 'S05.0', name: 'Contusão do olho e da órbita', synonyms: ['Hematoma ocular', 'Lesão contusa do olho'] },
{ cid: 'S05.1', name: 'Laceração e ruptura do olho e da órbita', synonyms: ['Ruptura ocular', 'Laceração ocular'] },
{ cid: 'S05.2', name: 'Corpo estranho no olho e na órbita', synonyms: ['Corpo estranho ocular', 'Corpo estranho na órbita'] },
{ cid: 'S05.7', name: 'Traumatismo múltiplo do olho e da órbita', synonyms: ['Lesão múltipla do olho', 'Trauma múltiplo ocular'] },
{ cid: 'S05.8', name: 'Outros traumatismos do olho e da órbita', synonyms: ['Outros traumas oculares', 'Outras lesões da órbita'] },
{ cid: 'S05.9', name: 'Traumatismo do olho e da órbita, parte não especificada', synonyms: ['Trauma ocular não especificado', 'Lesão não especificada do olho'] },
{ cid: 'S06', name: 'Traumatismo intracraniano', synonyms: ['Trauma intracraniano', 'Lesão cerebral'] },
{ cid: 'S06.0', name: 'Concussão', synonyms: ['Concussão cerebral', 'Concussão craniana'] },
{ cid: 'S06.1', name: 'Edema traumático do cérebro', synonyms: ['Edema cerebral traumático', 'Inchaço cerebral traumático'] },
{ cid: 'S06.2', name: 'Hemorragia traumática do cérebro', synonyms: ['Hemorragia cerebral traumática', 'Sangramento cerebral traumático'] },
{ cid: 'S06.3', name: 'Hemorragia subdural traumática', synonyms: ['Hematoma subdural', 'Sangramento subdural'] },
{ cid: 'S06.4', name: 'Hemorragia extradural traumática', synonyms: ['Hematoma extradural', 'Sangramento extradural'] },
{ cid: 'S06.5', name: 'Lesão axonal difusa', synonyms: ['Dano axonal difuso', 'Lesão cerebral difusa'] },
{ cid: 'S06.6', name: 'Lesão intracraniana com perda de consciência', synonyms: ['Perda de consciência por lesão cerebral', 'Desmaio por trauma cerebral'] },
{ cid: 'S06.7', name: 'Lesão intracraniana sem perda de consciência', synonyms: ['Trauma cerebral sem desmaio', 'Lesão cerebral sem perda de consciência'] },
{ cid: 'S06.8', name: 'Outros traumatismos intracranianos', synonyms: ['Outras lesões cerebrais', 'Outros traumas intracranianos'] },
{ cid: 'S06.9', name: 'Traumatismo intracraniano, parte não especificada', synonyms: ['Lesão cerebral não especificada', 'Trauma intracraniano não especificado'] },
{ cid: 'S07', name: 'Esmagamento da cabeça', synonyms: ['Trauma por esmagamento da cabeça', 'Lesão esmagadora da cabeça'] },
{ cid: 'S07.0', name: 'Esmagamento do crânio', synonyms: ['Esmagamento craniano', 'Trauma por esmagamento do crânio'] },
{ cid: 'S07.1', name: 'Esmagamento da face', synonyms: ['Esmagamento facial', 'Lesão esmagadora da face'] },
{ cid: 'S07.8', name: 'Outros esmagamentos da cabeça', synonyms: ['Outros traumas por esmagamento da cabeça', 'Outras lesões esmagadoras da cabeça'] },
{ cid: 'S07.9', name: 'Esmagamento da cabeça, parte não especificada', synonyms: ['Esmagamento não especificado da cabeça', 'Trauma por esmagamento não especificado da cabeça'] },
{ cid: 'S08', name: 'Amputação traumática da cabeça', synonyms: ['Decapitação traumática', 'Amputação da cabeça por trauma'] },
{ cid: 'S08.0', name: 'Amputação traumática do couro cabeludo', synonyms: ['Perda traumática do couro cabeludo', 'Amputação do couro cabeludo'] },
{ cid: 'S08.1', name: 'Amputação traumática da orelha', synonyms: ['Perda traumática da orelha', 'Amputação da orelha'] },
{ cid: 'S08.8', name: 'Outras amputações traumáticas especificadas da cabeça', synonyms: ['Outras perdas traumáticas da cabeça', 'Outras amputações da cabeça'] },
{ cid: 'S08.9', name: 'Amputação traumática da cabeça, parte não especificada', synonyms: ['Amputação não especificada da cabeça', 'Perda não especificada da cabeça'] },
{ cid: 'S09', name: 'Outros traumatismos e os não especificados da cabeça', synonyms: ['Outros traumas cranianos', 'Lesões não especificadas da cabeça'] },
{ cid: 'S09.0', name: 'Traumatismo de vasos sanguíneos da cabeça', synonyms: ['Lesão vascular craniana', 'Trauma dos vasos da cabeça'] },
{ cid: 'S09.1', name: 'Traumatismo de nervos da cabeça', synonyms: ['Lesão neural da cabeça', 'Trauma dos nervos cranianos'] },
{ cid: 'S09.2', name: 'Traumatismo dos músculos e tendões da cabeça', synonyms: ['Lesão muscular da cabeça', 'Trauma dos tendões cranianos'] },
{ cid: 'S09.7', name: 'Traumatismo múltiplo da cabeça', synonyms: ['Lesões múltiplas da cabeça', 'Traumas múltiplos cranianos'] },
{ cid: 'S09.8', name: 'Outros traumatismos especificados da cabeça', synonyms: ['Outros traumas da cabeça', 'Outras lesões cranianas'] },
{ cid: 'S09.9', name: 'Traumatismo da cabeça, parte não especificada', synonyms: ['Lesão não especificada da cabeça', 'Trauma não especificado da cabeça'] },
{ cid: 'S10', name: 'Traumatismos superficiais do pescoço', synonyms: ['Contusão do pescoço', 'Abrasão do pescoço'] },
{ cid: 'S10.0', name: 'Contusão do pescoço', synonyms: ['Hematoma no pescoço', 'Ferida superficial no pescoço'] },
{ cid: 'S10.1', name: 'Abrasão do pescoço', synonyms: ['Arranhão no pescoço', 'Escoriação do pescoço'] },
{ cid: 'S10.7', name: 'Traumatismo superficial múltiplo do pescoço', synonyms: ['Feridas múltiplas no pescoço', 'Lesões superficiais múltiplas no pescoço'] },
{ cid: 'S10.8', name: 'Outros traumatismos superficiais do pescoço', synonyms: ['Outras contusões no pescoço', 'Outras abrasões no pescoço'] },
{ cid: 'S10.9', name: 'Traumatismo superficial do pescoço, parte não especificada', synonyms: ['Lesão superficial não especificada no pescoço', 'Trauma não especificado do pescoço'] },
{ cid: 'S11', name: 'Ferimentos do pescoço', synonyms: ['Corte no pescoço', 'Laceração do pescoço'] },
{ cid: 'S11.0', name: 'Ferimento da laringe', synonyms: ['Corte na laringe', 'Laceração da laringe'] },
{ cid: 'S11.1', name: 'Ferimento da traqueia', synonyms: ['Corte na traqueia', 'Laceração da traqueia'] },
{ cid: 'S11.2', name: 'Ferimento do esôfago cervical', synonyms: ['Corte no esôfago cervical', 'Laceração do esôfago cervical'] },
{ cid: 'S11.3', name: 'Ferimento de grandes vasos do pescoço', synonyms: ['Corte em grandes vasos do pescoço', 'Laceração de grandes vasos do pescoço'] },
{ cid: 'S11.7', name: 'Ferimentos múltiplos do pescoço', synonyms: ['Cortes múltiplos no pescoço', 'Lacerações múltiplas no pescoço'] },
{ cid: 'S11.8', name: 'Outros ferimentos do pescoço', synonyms: ['Outros cortes no pescoço', 'Outras lacerações no pescoço'] },
{ cid: 'S11.9', name: 'Ferimento do pescoço, parte não especificada', synonyms: ['Corte não especificado no pescoço', 'Laceração não especificada no pescoço'] },
{ cid: 'S12', name: 'Fraturas da coluna cervical', synonyms: ['Fratura do pescoço', 'Fratura cervical'] },
{ cid: 'S12.0', name: 'Fratura da primeira vértebra cervical', synonyms: ['Fratura do atlas', 'Fratura da C1'] },
{ cid: 'S12.1', name: 'Fratura da segunda vértebra cervical', synonyms: ['Fratura do áxis', 'Fratura da C2'] },
{ cid: 'S12.2', name: 'Fratura de outras vértebras cervicais', synonyms: ['Fratura da C3', 'Fratura da C4'] },
{ cid: 'S12.7', name: 'Fraturas múltiplas da coluna cervical', synonyms: ['Fraturas múltiplas do pescoço', 'Fraturas múltiplas cervicais'] },
{ cid: 'S12.8', name: 'Outras fraturas da coluna cervical', synonyms: ['Outras fraturas do pescoço', 'Outras fraturas cervicais'] },
{ cid: 'S12.9', name: 'Fratura da coluna cervical, parte não especificada', synonyms: ['Fratura não especificada do pescoço', 'Fratura não especificada cervical'] },
{ cid: 'S13', name: 'Luxações, entorses e distensões das articulações e dos ligamentos do pescoço', synonyms: ['Luxação do pescoço', 'Entorse cervical'] },
{ cid: 'S13.0', name: 'Luxação de vértebras cervicais', synonyms: ['Luxação cervical', 'Luxação das vértebras do pescoço'] },
{ cid: 'S13.1', name: 'Entorse e distensão das articulações e dos ligamentos do pescoço', synonyms: ['Entorse do pescoço', 'Distensão cervical'] },
{ cid: 'S13.2', name: 'Ruptura de ligamento do pescoço', synonyms: ['Ruptura ligamentar cervical', 'Lesão ligamentar do pescoço'] },
{ cid: 'S13.3', name: 'Luxação e subluxação da articulação atlantoaxial', synonyms: ['Luxação da articulação atlantoaxial', 'Subluxação atlantoaxial'] },
{ cid: 'S13.4', name: 'Luxação e subluxação de outras articulações e ligamentos do pescoço', synonyms: ['Luxação de outras articulações cervicais', 'Subluxação cervical'] },
{ cid: 'S13.5', name: 'Lesões múltiplas das articulações e ligamentos do pescoço', synonyms: ['Lesões múltiplas cervicais', 'Traumas múltiplos do pescoço'] },
{ cid: 'S13.8', name: 'Outras lesões das articulações e dos ligamentos do pescoço', synonyms: ['Outras luxações do pescoço', 'Outras entorses cervicais'] },
{ cid: 'S13.9', name: 'Lesão da articulação e dos ligamentos do pescoço, parte não especificada', synonyms: ['Lesão não especificada do pescoço', 'Trauma não especificado cervical'] },
{ cid: 'S14', name: 'Traumatismos dos nervos e da medula espinhal ao nível do pescoço', synonyms: ['Trauma dos nervos cervicais', 'Lesão medular cervical'] },
{ cid: 'S14.0', name: 'Concussão e edema da medula espinhal cervical', synonyms: ['Concussão da medula cervical', 'Edema da medula cervical'] },
{ cid: 'S14.1', name: 'Outras lesões e compressões traumáticas da medula espinhal cervical', synonyms: ['Lesão traumática da medula cervical', 'Compressão medular cervical'] },
{ cid: 'S14.2', name: 'Traumatismo de raízes nervosas e plexo cervical', synonyms: ['Lesão de raízes nervosas cervicais', 'Trauma do plexo cervical'] },
{ cid: 'S14.3', name: 'Traumatismo de outros nervos periféricos ao nível do pescoço', synonyms: ['Lesão de nervos periféricos cervicais', 'Trauma de nervos do pescoço'] },
{ cid: 'S14.7', name: 'Traumatismo múltiplo dos nervos e da medula espinhal ao nível do pescoço', synonyms: ['Lesões múltiplas da medula cervical', 'Traumas múltiplos dos nervos cervicais'] },
{ cid: 'S14.8', name: 'Outros traumatismos dos nervos e da medula espinhal ao nível do pescoço', synonyms: ['Outras lesões dos nervos cervicais', 'Outros traumas da medula cervical'] },
{ cid: 'S14.9', name: 'Traumatismo dos nervos e da medula espinhal ao nível do pescoço, parte não especificada', synonyms: ['Lesão não especificada dos nervos cervicais', 'Trauma não especificado da medula cervical'] },
{ cid: 'S15', name: 'Traumatismo de vasos sanguíneos do pescoço', synonyms: ['Lesão vascular cervical', 'Trauma dos vasos sanguíneos do pescoço'] },
{ cid: 'S15.0', name: 'Traumatismo da carótida', synonyms: ['Lesão da artéria carótida', 'Trauma da carótida'] },
{ cid: 'S15.1', name: 'Traumatismo da jugular', synonyms: ['Lesão da veia jugular', 'Trauma da jugular'] },
{ cid: 'S15.7', name: 'Traumatismo múltiplo de vasos sanguíneos do pescoço', synonyms: ['Lesões múltiplas dos vasos do pescoço', 'Traumas múltiplos dos vasos cervicais'] },

{ cid: 'S20', name: 'Traumatismos superficiais do tórax', synonyms: ['Contusão do tórax', 'Abrasão do tórax'] },
    { cid: 'S20.0', name: 'Contusão do tórax', synonyms: ['Hematoma no tórax', 'Ferida superficial no tórax'] },
    { cid: 'S20.1', name: 'Abrasão do tórax', synonyms: ['Arranhão no tórax', 'Escoriação do tórax'] },
    { cid: 'S20.7', name: 'Traumatismo superficial múltiplo do tórax', synonyms: ['Feridas múltiplas no tórax', 'Lesões superficiais múltiplas no tórax'] },
    { cid: 'S20.8', name: 'Outros traumatismos superficiais do tórax', synonyms: ['Outras contusões no tórax', 'Outras abrasões no tórax'] },
    { cid: 'S20.9', name: 'Traumatismo superficial do tórax, parte não especificada', synonyms: ['Lesão superficial não especificada no tórax', 'Trauma não especificado do tórax'] },
    { cid: 'S21', name: 'Ferimentos do tórax', synonyms: ['Corte no tórax', 'Laceração do tórax'] },
    { cid: 'S21.0', name: 'Ferimento do tórax com pneumotórax', synonyms: ['Corte no tórax com pneumotórax', 'Laceração do tórax com pneumotórax'] },
    { cid: 'S21.1', name: 'Ferimento do tórax com hemotórax', synonyms: ['Corte no tórax com hemotórax', 'Laceração do tórax com hemotórax'] },
    { cid: 'S21.2', name: 'Ferimento do tórax com pneumomediastino', synonyms: ['Corte no tórax com pneumomediastino', 'Laceração do tórax com pneumomediastino'] },
    { cid: 'S21.7', name: 'Ferimentos múltiplos do tórax', synonyms: ['Cortes múltiplos no tórax', 'Lacerações múltiplas no tórax'] },
    { cid: 'S21.8', name: 'Outros ferimentos do tórax', synonyms: ['Outros cortes no tórax', 'Outras lacerações no tórax'] },
    { cid: 'S21.9', name: 'Ferimento do tórax, parte não especificada', synonyms: ['Corte não especificado no tórax', 'Laceração não especificada no tórax'] },
    { cid: 'S22', name: 'Fraturas de costelas, esterno e coluna torácica', synonyms: ['Fratura de costela', 'Fratura do esterno', 'Fratura da coluna torácica'] },
    { cid: 'S22.0', name: 'Fratura de uma costela', synonyms: ['Fratura de costela única', 'Quebra de uma costela'] },
    { cid: 'S22.1', name: 'Fratura de múltiplas costelas', synonyms: ['Fraturas múltiplas de costelas', 'Quebra de várias costelas'] },
    { cid: 'S22.2', name: 'Fratura do esterno', synonyms: ['Quebra do esterno', 'Fratura do osso do peito'] },
    { cid: 'S22.3', name: 'Fratura de vértebra torácica', synonyms: ['Fratura da coluna torácica', 'Quebra de vértebra torácica'] },
    { cid: 'S22.4', name: 'Fraturas múltiplas de costelas e do esterno', synonyms: ['Fraturas múltiplas de costelas e esterno', 'Quebra múltipla de costelas e esterno'] },
    { cid: 'S22.7', name: 'Fraturas múltiplas da coluna torácica', synonyms: ['Fraturas múltiplas de vértebras torácicas', 'Quebra múltipla da coluna torácica'] },
    { cid: 'S22.8', name: 'Outras fraturas do tórax', synonyms: ['Outras fraturas de costelas', 'Outras fraturas do esterno'] },
    { cid: 'S22.9', name: 'Fratura do tórax, parte não especificada', synonyms: ['Fratura não especificada do tórax', 'Quebra não especificada do tórax'] },
    { cid: 'S23', name: 'Luxação, entorse e distensão das articulações e dos ligamentos do tórax', synonyms: ['Luxação do tórax', 'Entorse do tórax'] },
    { cid: 'S23.0', name: 'Luxação de costela', synonyms: ['Luxação de costela única', 'Deslocamento de costela'] },
    { cid: 'S23.1', name: 'Luxação de vértebra torácica', synonyms: ['Luxação da coluna torácica', 'Deslocamento de vértebra torácica'] },
    { cid: 'S23.2', name: 'Entorse e distensão de ligamento torácico', synonyms: ['Entorse de ligamento do tórax', 'Distensão de ligamento torácico'] },
    { cid: 'S23.7', name: 'Lesões múltiplas das articulações e dos ligamentos do tórax', synonyms: ['Lesões múltiplas de articulações do tórax', 'Traumas múltiplos de ligamentos torácicos'] },
    { cid: 'S23.8', name: 'Outras lesões das articulações e dos ligamentos do tórax', synonyms: ['Outras luxações do tórax', 'Outras entorses torácicas'] },
    { cid: 'S23.9', name: 'Lesão da articulação e dos ligamentos do tórax, parte não especificada', synonyms: ['Lesão não especificada da articulação torácica', 'Trauma não especificado de ligamentos do tórax'] },
    { cid: 'S24', name: 'Traumatismos dos nervos e da medula espinhal ao nível do tórax', synonyms: ['Trauma dos nervos torácicos', 'Lesão medular torácica'] },
    { cid: 'S24.0', name: 'Concussão e edema da medula espinhal torácica', synonyms: ['Concussão da medula torácica', 'Edema da medula torácica'] },
    { cid: 'S24.1', name: 'Outras lesões e compressões traumáticas da medula espinhal torácica', synonyms: ['Lesão traumática da medula torácica', 'Compressão medular torácica'] },
    { cid: 'S24.2', name: 'Traumatismo de raízes nervosas e plexo torácico', synonyms: ['Lesão de raízes nervosas torácicas', 'Trauma do plexo torácico'] },
    { cid: 'S24.3', name: 'Traumatismo de outros nervos periféricos ao nível do tórax', synonyms: ['Lesão de nervos periféricos torácicos', 'Trauma de nervos do tórax'] },
    { cid: 'S24.7', name: 'Traumatismo múltiplo dos nervos e da medula espinhal ao nível do tórax', synonyms: ['Lesões múltiplas da medula torácica', 'Traumas múltiplos dos nervos torácicos'] },
    { cid: 'S24.8', name: 'Outros traumatismos dos nervos e da medula espinhal ao nível do tórax', synonyms: ['Outras lesões dos nervos torácicos', 'Outros traumas da medula torácica'] },
    { cid: 'S24.9', name: 'Traumatismo dos nervos e da medula espinhal ao nível do tórax, parte não especificada', synonyms: ['Lesão não especificada dos nervos torácicos', 'Trauma não especificado da medula torácica'] },
    { cid: 'S25', name: 'Traumatismo de vasos sanguíneos do tórax', synonyms: ['Lesão vascular torácica', 'Trauma dos vasos sanguíneos do tórax'] },
    { cid: 'S25.0', name: 'Traumatismo da aorta torácica', synonyms: ['Lesão da artéria aorta torácica', 'Trauma da aorta torácica'] },
    { cid: 'S25.1', name: 'Traumatismo da artéria pulmonar', synonyms: ['Lesão da artéria pulmonar', 'Trauma da artéria pulmonar'] },
    { cid: 'S25.2', name: 'Traumatismo da veia cava superior', synonyms: ['Lesão da veia cava superior', 'Trauma da veia cava superior'] },
   

// adicione mais códigos cid aqui... Doenças da pele e do tecido subcutâneo (L00 - L99) abaixo
{ cid: 'L00', name: 'Síndrome estafilocócica da pele escaldada', synonyms: ['Doença de Ritter', 'Dermatite esfoliativa estafilocócica'] },
    { cid: 'L01', name: 'Impetigo', synonyms: ['Piodermite', 'Dermatite pustulosa'] },
    { cid: 'L02', name: 'Abscesso cutâneo, furúnculo e carbúnculo', synonyms: ['Furunculose', 'Carbunculose'] },
    { cid: 'L03', name: 'Celulite e erisipela', synonyms: ['Infecção bacteriana da pele', 'Infecção dos tecidos moles'] },
    { cid: 'L04', name: 'Linfadenite aguda', synonyms: ['Infecção dos linfonodos', 'Inflamação aguda dos linfonodos'] },
    { cid: 'L05', name: 'Cisto pilonidal', synonyms: ['Cisto dermoide', 'Abscesso sacrococcígeo'] },
    { cid: 'L08', name: 'Outras infecções localizadas da pele e do tecido subcutâneo', synonyms: ['Infecção cutânea', 'Infecção subcutânea'] },
    { cid: 'L10', name: 'Pênfigo', synonyms: ['Dermatose bolhosa', 'Bolha autoimune'] },
    { cid: 'L11', name: 'Outras acantólises', synonyms: ['Doença de Hailey-Hailey', 'Pênfigo benigno familiar'] },
    { cid: 'L12', name: 'Penfigoide', synonyms: ['Dermatose bolhosa autoimune', 'Penfigoide bolhoso'] },
    { cid: 'L13', name: 'Outras dermatites bolhosas', synonyms: ['Dermatite herpetiforme', 'Eritema polimorfo bolhoso'] },
    { cid: 'L14', name: 'Dermatose bolhosa em doenças classificadas em outra parte', synonyms: ['Dermatose bolhosa secundária', 'Dermatose bolhosa associada'] },
    { cid: 'L20', name: 'Dermatite atópica', synonyms: ['Eczema atópico', 'Dermatite endógena'] },
    { cid: 'L21', name: 'Dermatite seborréica', synonyms: ['Eczema seborréico', 'Dermatite das glândulas sebáceas'] },
    { cid: 'L22', name: 'Dermatite da fralda', synonyms: ['Eczema da fralda', 'Assadura de bebê'] },
    { cid: 'L23', name: 'Dermatite alérgica de contato', synonyms: ['Eczema de contato alérgico', 'Dermatite por alergia'] },
    { cid: 'L24', name: 'Dermatite irritativa de contato', synonyms: ['Eczema de contato irritativo', 'Dermatite por irritação'] },
    { cid: 'L25', name: 'Dermatite de contato não especificada', synonyms: ['Eczema de contato', 'Dermatite de contato'] },
    { cid: 'L26', name: 'Dermatite esfoliativa', synonyms: ['Eritrodermia', 'Eczema esfoliativo'] },
    { cid: 'L27', name: 'Dermatite por substâncias ingeridas', synonyms: ['Eczema medicamentoso', 'Dermatite induzida por drogas'] },
    { cid: 'L28', name: 'Liquen simples crônico e prurigo', synonyms: ['Neurodermatite', 'Liquenificação'] },
    { cid: 'L29', name: 'Prurido', synonyms: ['Coceira', 'Prurido generalizado'] },
    { cid: 'L30', name: 'Outras dermatites', synonyms: ['Eczema não especificado', 'Dermatite inespecífica'] },
    { cid: 'L40', name: 'Psoríase', synonyms: ['Dermatose psoriática', 'Escamação da pele'] },
    { cid: 'L41', name: 'Parapsoríase', synonyms: ['Parapsoríase em placas', 'Parapsoríase gutata'] },
    { cid: 'L42', name: 'Pitiríase rósea', synonyms: ['Doença de Gibert', 'Eritema descamativo agudo'] },
    { cid: 'L43', name: 'Líquen plano', synonyms: ['Dermatose pápulo-escamosa', 'Líquen ruber planus'] },
    { cid: 'L44', name: 'Outras doenças papuloescamosas', synonyms: ['Pitiríase rubra pilar', 'Pitiríase liquenoide'] },
    { cid: 'L45', name: 'Eritroderma em doenças classificadas em outra parte', synonyms: ['Eritroderma secundária', 'Eritroderma associada'] },
    { cid: 'L50', name: 'Urticária', synonyms: ['Dermatite urticariforme', 'Angioedema'] },
    { cid: 'L51', name: 'Eritema polimorfo', synonyms: ['Síndrome de Stevens-Johnson', 'Eritema multiforme'] },
    { cid: 'L52', name: 'Eritema nodoso', synonyms: ['Nodosidade eritematosa', 'Inflamação nodular'] },
    { cid: 'L53', name: 'Outras formas de eritema', synonyms: ['Eritema infeccioso', 'Eritema tóxico'] },
    { cid: 'L54', name: 'Eritema não especificado', synonyms: ['Eritema idiopático', 'Eritema de causa desconhecida'] },
    { cid: 'L55', name: 'Queimadura solar', synonyms: ['Eritema solar', 'Dermatite solar'] },
    { cid: 'L56', name: 'Outras afecções agudas da pele provocadas pela radiação ultravioleta', synonyms: ['Fotossensibilidade', 'Dermatite actínica'] },
    { cid: 'L57', name: 'Afecções cutâneas provocadas pela radiação crônica', synonyms: ['Dermatite actínica crônica', 'Elastose solar'] },
    { cid: 'L58', name: 'Radiodermite', synonyms: ['Dermatite por radiação', 'Dermatite actínica'] },
    { cid: 'L59', name: 'Outras afecções da pele e do tecido subcutâneo relacionadas com radiação', synonyms: ['Fotodermatose', 'Dermatite de radiação'] },
    { cid: 'L60', name: 'Afecções ungueais', synonyms: ['Onicopatia', 'Doença das unhas'] },
    { cid: 'L62', name: 'Afecções ungueais em doenças classificadas em outra parte', synonyms: ['Doenças das unhas associadas', 'Onicopatia secundária'] },
    { cid: 'L63', name: 'Alopecia areata', synonyms: ['Queda de cabelo em placas', 'Alopecia localizada'] },
    { cid: 'L64', name: 'Alopecia androgenética', synonyms: ['Calvície masculina', 'Calvície feminina'] },
    { cid: 'L65', name: 'Outras formas de perda de cabelo não-cicatricial', synonyms: ['Eflúvio telógeno', 'Queda difusa de cabelo'] },
    { cid: 'L66', name: 'Cicatrizes e fibroses da pele associadas a doenças classificadas em outra parte', synonyms: ['Cicatrização patológica', 'Fibrose cutânea'] },
    { cid: 'L67', name: 'Anormalidades de textura e elasticidade da pele', synonyms: ['Elastose', 'Pele rugosa'] },
    { cid: 'L68', name: 'Hipertricose', synonyms: ['Excesso de pelos', 'Hipertricose generalizada'] },
    { cid: 'L70', name: 'Acne', synonyms: ['Pápula e pústula acneica', 'Acne vulgar'] },
    { cid: 'L71', name: 'Rosácea', synonyms: ['Acne rosácea', 'Couperose'] },
    { cid: 'L72', name: 'Cisto folicular', synonyms: ['Cisto sebáceo', 'Cisto de queratina'] },
    { cid: 'L73', name: 'Outras afecções dos folículos pilosos', synonyms: ['Foliculite', 'Inflamação dos folículos pilosos'] },
    { cid: 'L74', name: 'Hiperidrose', synonyms: ['Suor excessivo', 'Sudorese excessiva'] },
    { cid: 'L75', name: 'Hidradenite', synonyms: ['Infecção das glândulas sudoríparas', 'Inflamação das glândulas sudoríparas'] },
    { cid: 'L80', name: 'Vitiligo', synonyms: ['Despigmentação da pele', 'Manchas brancas na pele'] },
    { cid: 'L81', name: 'Outros transtornos de pigmentação', synonyms: ['Hiperpigmentação', 'Hipopigmentação'] },
    { cid: 'L82', name: 'Queratose seborréica', synonyms: ['Verruga seborréica', 'Queratose senil'] },
    { cid: 'L83', name: 'Acantose nigricante', synonyms: ['Hiperceratose nigricante', 'Pele escura e espessa'] },
    { cid: 'L84', name: 'Calos e calosidades', synonyms: ['Hiperqueratose', 'Espessamento da pele'] },
    { cid: 'L85', name: 'Outras epidermóides e hiperqueratoses', synonyms: ['Psoríase em placas', 'Dermatite crônica'] },
    { cid: 'L86', name: 'Psoríase em doenças classificadas em outra parte', synonyms: ['Psoríase associada', 'Psoríase secundária'] },
    { cid: 'L87', name: 'Transtornos da queratinização', synonyms: ['Doenças da queratina', 'Alterações na queratinização'] },
    { cid: 'L88', name: 'Pioderma gangrenoso', synonyms: ['Úlcera gangrenosa', 'Dermatite ulcerativa'] },
    { cid: 'L89', name: 'Úlcera de decúbito', synonyms: ['Escara de decúbito', 'Úlcera de pressão'] },
    { cid: 'L90', name: 'Transtornos atrofiantes da pele', synonyms: ['Atrofia cutânea', 'Pele atrofiada'] },
    { cid: 'L91', name: 'Outros transtornos hipertrofiantes da pele', synonyms: ['Queloide', 'Hiperplasia cutânea'] },
    { cid: 'L92', name: 'Granulomatose e necrobiose', synonyms: ['Granuloma anular', 'Necrobiose lipoídica'] },
    { cid: 'L93', name: 'Lúpus eritematoso', synonyms: ['Lúpus cutâneo', 'Lúpus discoide'] },
    { cid: 'L94', name: 'Outros transtornos localizados do tecido conjuntivo', synonyms: ['Esclerodermia localizada', 'Morphea'] },
    { cid: 'L95', name: 'Vasculite limitada à pele, não classificada em outra parte', synonyms: ['Vasculite cutânea', 'Inflamação dos vasos sanguíneos da pele'] },
    { cid: 'L97', name: 'Úlcera crônica da perna, não classificada em outra parte', synonyms: ['Úlcera varicosa', 'Úlcera de estase'] },
    { cid: 'L98', name: 'Outros transtornos da pele e do tecido subcutâneo, não classificado em outra parte', synonyms: ['Dermatose inespecífica', 'Inflamação cutânea'] },
    { cid: 'L99', name: 'Transtornos da pele e do tecido subcutâneo em doenças classificadas em outra parte', synonyms: ['Dermatose associada', 'Inflamação da pele associada'] },

    // adicione mais códigos cid aqui... Doenças do aparelho respiratório (J00 - J99) abaixo
{ cid: 'J00', name: 'Nasofaringite aguda [resfriado comum]', synonyms: ['Resfriado comum', 'Rinite viral aguda'] },
{ cid: 'J01', name: 'Sinusite aguda', synonyms: ['Infecção aguda dos seios da face', 'Inflamação aguda dos seios paranasais'] },
{ cid: 'J02', name: 'Faringite aguda', synonyms: ['Dor de garganta', 'Infecção aguda da faringe'] },
{ cid: 'J03', name: 'Amigdalite aguda', synonyms: ['Infecção aguda das amígdalas', 'Inflamação aguda das amígdalas'] },
{ cid: 'J04', name: 'Laringite e traqueíte agudas', synonyms: ['Inflamação aguda da laringe', 'Infecção aguda da traqueia'] },
{ cid: 'J05', name: 'Laringite obstrutiva aguda [crupe] e epiglotite', synonyms: ['Croup', 'Epiglotite aguda'] },
{ cid: 'J06', name: 'Infecções agudas das vias aéreas superiores de localizações múltiplas ou não especificadas', synonyms: ['Infecção respiratória aguda', 'Inflamação aguda das vias aéreas superiores'] },
{ cid: 'J09', name: 'Gripe por vírus influenza identificado', synonyms: ['Gripe A', 'Influenza'] },
{ cid: 'J10', name: 'Gripe devido a outros vírus influenza, identificados', synonyms: ['Gripe sazonal', 'Influenza não especificada'] },
{ cid: 'J11', name: 'Gripe, vírus não identificado', synonyms: ['Gripe não identificada', 'Influenza viral não especificada'] },
{ cid: 'J12', name: 'Pneumonia viral, não classificada em outra parte', synonyms: ['Pneumonia por vírus', 'Infecção viral dos pulmões'] },
{ cid: 'J13', name: 'Pneumonia devida a Streptococcus pneumoniae', synonyms: ['Pneumonia pneumocócica', 'Infecção por Streptococcus pneumoniae'] },
{ cid: 'J14', name: 'Pneumonia devida a Haemophilus influenzae', synonyms: ['Pneumonia por Haemophilus', 'Infecção pulmonar por Haemophilus influenzae'] },
{ cid: 'J15', name: 'Pneumonia bacteriana, não classificada em outra parte', synonyms: ['Pneumonia bacteriana', 'Infecção bacteriana dos pulmões'] },
{ cid: 'J16', name: 'Pneumonia devido a outros agentes infecciosos, não classificada em outra parte', synonyms: ['Pneumonia infecciosa', 'Infecção pulmonar por outros agentes'] },
{ cid: 'J17', name: 'Pneumonia em doenças classificadas em outra parte', synonyms: ['Pneumonia secundária', 'Pneumonia associada a outras doenças'] },
{ cid: 'J18', name: 'Pneumonia, agente não especificado', synonyms: ['Pneumonia não especificada', 'Infecção pulmonar não especificada'] },
{ cid: 'J20', name: 'Bronquite aguda', synonyms: ['Infecção aguda dos brônquios', 'Inflamação aguda dos brônquios'] },
{ cid: 'J21', name: 'Bronquiolite aguda', synonyms: ['Infecção aguda dos bronquíolos', 'Inflamação aguda dos bronquíolos'] },
{ cid: 'J22', name: 'Infecção aguda das vias aéreas inferiores, não especificada', synonyms: ['Infecção respiratória aguda inferior', 'Inflamação aguda das vias aéreas inferiores'] },
{ cid: 'J30', name: 'Rinite alérgica e vasomotora', synonyms: ['Rinite alérgica', 'Rinite vasomotora'] },
{ cid: 'J31', name: 'Rinite, faringite e laringite crônicas', synonyms: ['Rinite crônica', 'Faringite crônica', 'Laringite crônica'] },
{ cid: 'J32', name: 'Sinusite crônica', synonyms: ['Infecção crônica dos seios da face', 'Inflamação crônica dos seios paranasais'] },
{ cid: 'J33', name: 'Polipose nasal', synonyms: ['Pólipos nasais', 'Crescimento anormal na mucosa nasal'] },
{ cid: 'J34', name: 'Outros transtornos do nariz e dos seios paranasais', synonyms: ['Desvio de septo', 'Rinossinusite'] },
{ cid: 'J35', name: 'Doenças crônicas das amígdalas e das adenóides', synonyms: ['Amigdalite crônica', 'Hiperplasia das amígdalas e adenóides'] },
{ cid: 'J36', name: 'Abscesso periamigdalino', synonyms: ['Infecção ao redor das amígdalas', 'Abscesso das amígdalas'] },
{ cid: 'J37', name: 'Laringite e laringotraqueíte crônicas', synonyms: ['Laringite crônica', 'Inflamação crônica da laringe e traqueia'] },
{ cid: 'J38', name: 'Doenças das cordas vocais e da laringe, não classificadas em outra parte', synonyms: ['Paralisia das cordas vocais', 'Nódulos vocais'] },
{ cid: 'J39', name: 'Outras doenças das vias aéreas superiores', synonyms: ['Doenças da faringe', 'Doenças da laringe'] },
{ cid: 'J40', name: 'Bronquite não especificada como aguda ou crônica', synonyms: ['Bronquite não especificada', 'Inflamação dos brônquios não especificada'] },
{ cid: 'J41', name: 'Bronquite crônica simples e mucopurulenta', synonyms: ['Bronquite crônica simples', 'Bronquite mucopurulenta'] },
{ cid: 'J42', name: 'Bronquite crônica não especificada', synonyms: ['Bronquite crônica', 'Inflamação crônica dos brônquios'] },
{ cid: 'J43', name: 'Enfisema', synonyms: ['Destruição dos alvéolos', 'DPOC'] },
{ cid: 'J44', name: 'Outras doenças pulmonares obstrutivas crônicas', synonyms: ['Doença Pulmonar Obstrutiva Crônica', 'Bronquite obstrutiva crônica'] },
{ cid: 'J45', name: 'Asma', synonyms: ['Asma brônquica', 'Broncoespasmo'] },
{ cid: 'J46', name: 'Estado de mal asmático', synonyms: ['Asma grave', 'Asma severa'] },
{ cid: 'J47', name: 'Bronquiectasia', synonyms: ['Dilatação dos brônquios', 'Infecção crônica dos brônquios'] },
{ cid: 'J60', name: 'Pneumoconiose devida a amianto e outras fibras minerais', synonyms: ['Asbestose', 'Fibrose pulmonar por amianto'] },
{ cid: 'J61', name: 'Pneumoconiose devida a pó de carvão', synonyms: ['Pulmão negro', 'Antracose'] },
{ cid: 'J62', name: 'Pneumoconiose devida a poeiras contendo sílica', synonyms: ['Silicose', 'Fibrose pulmonar por sílica'] },
{ cid: 'J63', name: 'Pneumoconiose devida a outras poeiras inorgânicas', synonyms: ['Pneumoconiose mista', 'Fibrose pulmonar'] },
{ cid: 'J64', name: 'Pneumoconiose não especificada', synonyms: ['Pneumoconiose', 'Fibrose pulmonar não especificada'] },
{ cid: 'J65', name: 'Pneumoconiose associada a tuberculose', synonyms: ['Pneumoconiose tuberculosa', 'Fibrose pulmonar com tuberculose'] },
{ cid: 'J66', name: 'Doenças pulmonares devidas a poeiras orgânicas', synonyms: ['Pulmão do agricultor', 'Doença pulmonar ocupacional'] },
{ cid: 'J67', name: 'Pneumonite de hipersensibilidade devida a poeiras orgânicas', synonyms: ['Pulmão do fazendeiro', 'Alveolite alérgica extrínseca'] },
{ cid: 'J68', name: 'Afecções respiratórias devidas à inalação de gases, fumos, vapores e substâncias químicas', synonyms: ['Inalação de substâncias tóxicas', 'Lesão respiratória por inalação'] },
{ cid: 'J69', name: 'Pneumonite devida a sólidos e líquidos', synonyms: ['Aspiração pulmonar', 'Pneumonite por aspiração'] },
{ cid: 'J70', name: 'Afecções respiratórias devidas a outros agentes externos', synonyms: ['Lesão pulmonar induzida por radiação', 'Fibrose pulmonar induzida por drogas'] },
{ cid: 'J80', name: 'Síndrome do desconforto respiratório do adulto [SDRA]', synonyms: ['SDRA', 'Síndrome da angústia respiratória'] },
{ cid: 'J81', name: 'Edema pulmonar não especificado', synonyms: ['Acúmulo de líquido nos pulmões', 'Edema pulmonar não cardiogênico'] },
{ cid: 'J82', name: 'Eosinofilia pulmonar, não classificada em outra parte', synonyms: ['Síndrome de Löffler', 'Pneumonite eosinofílica'] },
{ cid: 'J84', name: 'Outras doenças pulmonares intersticiais, não especificadas em outra parte', synonyms: ['Fibrose pulmonar idiopática', 'Doenças pulmonares intersticiais'] },
{ cid: 'J85', name: 'Abscesso do pulmão e do mediastino', synonyms: ['Abscesso pulmonar', 'Infecção purulenta no pulmão'] },
{ cid: 'J86', name: 'Piotórax', synonyms: ['Empiema', 'Acúmulo de pus na cavidade pleural'] },
{ cid: 'J90', name: 'Derrame pleural, não classificado em outra parte', synonyms: ['Acúmulo de líquido na pleura', 'Derrame pleural'] },
{ cid: 'J91', name: 'Derrame pleural em doenças classificadas em outra parte', synonyms: ['Derrame pleural secundário', 'Derrame pleural associado'] },
{ cid: 'J92', name: 'Pneumotórax espontâneo', synonyms: ['Colapso pulmonar espontâneo', 'Acúmulo de ar na cavidade pleural'] },
{ cid: 'J93', name: 'Pneumotórax não especificado', synonyms: ['Pneumotórax', 'Colapso pulmonar não especificado'] },
{ cid: 'J94', name: 'Outras afecções da pleura', synonyms: ['Espessamento pleural', 'Placas pleurais'] },
{ cid: 'J95', name: 'Complicações respiratórias de procedimentos e cirurgias, não classificadas em outra parte', synonyms: ['Complicações respiratórias pós-operatórias', 'Lesão pulmonar induzida por procedimentos'] },
{ cid: 'J96', name: 'Insuficiência respiratória não especificada', synonyms: ['Falência respiratória', 'Insuficiência respiratória aguda'] },
{ cid: 'J98', name: 'Outras afecções respiratórias, não classificadas em outra parte', synonyms: ['Doenças respiratórias inespecíficas', 'Transtornos respiratórios'] },
{ cid: 'J99', name: 'Afecções respiratórias em doenças classificadas em outra parte', synonyms: ['Complicações respiratórias secundárias', 'Afecções respiratórias associadas'] },

// adicione mais cid aqui abaxio... Sintomas, sinais e achados anormais de exames clínicos e de laboratório, não classificados em outra parte (R00 - R99)
{ cid: 'R00', name: 'Anormalidades do batimento cardíaco', synonyms: ['Palpitações', 'Batimentos cardíacos irregulares'] },
{ cid: 'R01', name: 'Sopros e outros ruídos cardíacos', synonyms: ['Sopros cardíacos', 'Ruídos anormais do coração'] },
{ cid: 'R02', name: 'Gangrena, não classificada em outra parte', synonyms: ['Morte de tecido', 'Necrose gangrenosa'] },
{ cid: 'R03', name: 'Pressão arterial anormal, sem diagnóstico', synonyms: ['Pressão arterial elevada', 'Pressão arterial baixa'] },
{ cid: 'R04', name: 'Hemorragia do trato respiratório', synonyms: ['Sangramento nasal', 'Hemoptise'] },
{ cid: 'R05', name: 'Tosse', synonyms: ['Tosse seca', 'Tosse produtiva'] },
{ cid: 'R06', name: 'Anormalidades da respiração', synonyms: ['Dispneia', 'Respiração ofegante'] },
{ cid: 'R07', name: 'Dor na garganta e no tórax', synonyms: ['Dor torácica', 'Dor na garganta'] },
{ cid: 'R09', name: 'Outros sintomas e sinais envolvendo os sistemas circulatório e respiratório', synonyms: ['Cianose', 'Hipoxemia'] },
{ cid: 'R10', name: 'Dor abdominal e pélvica', synonyms: ['Dor no abdômen', 'Dor pélvica'] },
{ cid: 'R11', name: 'Náusea e vômito', synonyms: ['Náusea', 'Vômito'] },
{ cid: 'R12', name: 'Pirose', synonyms: ['Azia', 'Queimação retrosternal'] },
{ cid: 'R13', name: 'Disfagia', synonyms: ['Dificuldade para engolir', 'Engasgos frequentes'] },
{ cid: 'R14', name: 'Flatulência e afins', synonyms: ['Gases intestinais', 'Distensão abdominal'] },
{ cid: 'R15', name: 'Incontinência fecal', synonyms: ['Perda de controle intestinal', 'Escape fecal'] },
{ cid: 'R16', name: 'Hepatomegalia e esplenomegalia, não classificada em outra parte', synonyms: ['Aumento do fígado', 'Aumento do baço'] },
{ cid: 'R17', name: 'Icterícia, não classificada em outra parte', synonyms: ['Amarelamento da pele', 'Icterícia não especificada'] },
{ cid: 'R18', name: 'Ascite', synonyms: ['Acúmulo de líquido na cavidade abdominal', 'Barriga d’água'] },
{ cid: 'R19', name: 'Outros sintomas e sinais que envolvem o sistema digestivo e o abdome', synonyms: ['Dores abdominais não especificadas', 'Alterações do trânsito intestinal'] },
{ cid: 'R20', name: 'Alterações da sensibilidade cutânea', synonyms: ['Parestesia', 'Dormência da pele'] },
{ cid: 'R21', name: 'Erupção cutânea e outras erupções cutâneas não especificadas', synonyms: ['Erupções na pele', 'Exantema'] },
{ cid: 'R22', name: 'Edema localizado', synonyms: ['Inchaço localizado', 'Edema focal'] },
{ cid: 'R23', name: 'Outros sintomas e sinais que envolvem a pele e o tecido subcutâneo', synonyms: ['Descoloração da pele', 'Anormalidades da pele'] },
{ cid: 'R25', name: 'Movimentos involuntários anormais', synonyms: ['Espasmos musculares', 'Movimentos involuntários'] },
{ cid: 'R26', name: 'Anormalidades da marcha e da mobilidade', synonyms: ['Dificuldade para andar', 'Anormalidades na marcha'] },
{ cid: 'R27', name: 'Outras dificuldades de coordenação', synonyms: ['Ataxia', 'Descoordenação motora'] },
{ cid: 'R29', name: 'Outros sintomas e sinais que envolvem o sistema nervoso e músculo-esquelético', synonyms: ['Alterações de reflexos', 'Espasticidade'] },
{ cid: 'R30', name: 'Dor associada à micção', synonyms: ['Disúria', 'Dor ao urinar'] },
{ cid: 'R31', name: 'Hematuria, não classificada em outra parte', synonyms: ['Sangue na urina', 'Hematuria não especificada'] },
{ cid: 'R32', name: 'Incontinência urinária não especificada', synonyms: ['Perda de controle urinário', 'Incontinência não especificada'] },
{ cid: 'R33', name: 'Retenção urinária', synonyms: ['Dificuldade para urinar', 'Retenção de urina'] },
{ cid: 'R34', name: 'Anúria e oligúria', synonyms: ['Ausência de urina', 'Produção diminuída de urina'] },
{ cid: 'R35', name: 'Poliúria', synonyms: ['Urinar em excesso', 'Aumento do volume urinário'] },
{ cid: 'R36', name: 'Secreção uretral', synonyms: ['Corrimento uretral', 'Secreção da uretra'] },
{ cid: 'R39', name: 'Outros sintomas e sinais que envolvem o sistema urinário', synonyms: ['Dor no trato urinário', 'Alterações urinárias não especificadas'] },
{ cid: 'R40', name: 'Sonolência, letargia, estupor e coma', synonyms: ['Sonolência excessiva', 'Coma não especificado'] },
{ cid: 'R41', name: 'Outros sintomas e sinais que envolvem funções cognitivas e de percepção', synonyms: ['Alterações de memória', 'Desorientação'] },
{ cid: 'R42', name: 'Tontura e vertigem', synonyms: ['Sensação de giro', 'Tontura'] },
{ cid: 'R43', name: 'Distúrbios do olfato e do paladar', synonyms: ['Anosmia', 'Ageusia'] },
{ cid: 'R44', name: 'Outros sintomas e sinais que envolvem sensações e percepções gerais', synonyms: ['Alucinações', 'Distúrbios de percepção'] },
{ cid: 'R45', name: 'Sintomas e sinais relacionados ao estado emocional', synonyms: ['Ansiedade', 'Depressão'] },
{ cid: 'R46', name: 'Sintomas e sinais relacionados à aparência e comportamento', synonyms: ['Comportamento anormal', 'Alterações de aparência'] },
{ cid: 'R47', name: 'Distúrbios da fala, não classificados em outra parte', synonyms: ['Afasia', 'Disartria'] },
{ cid: 'R48', name: 'Distúrbios da leitura e da escrita, não classificados em outra parte', synonyms: ['Dislexia', 'Alexia'] },
{ cid: 'R49', name: 'Distúrbios da voz', synonyms: ['Rouquidão', 'Disfonia'] },
{ cid: 'R50', name: 'Febre de origem desconhecida', synonyms: ['Febre não especificada', 'Hipertermia'] },
{ cid: 'R51', name: 'Cefaleia', synonyms: ['Dor de cabeça', 'Enxaqueca'] },
{ cid: 'R52', name: 'Dor, não classificada em outra parte', synonyms: ['Dor crônica', 'Dor aguda não especificada'] },
{ cid: 'R53', name: 'Mal-estar e fadiga', synonyms: ['Fadiga', 'Cansaço'] },
{ cid: 'R54', name: 'Senilidade', synonyms: ['Envelhecimento', 'Velhice'] },
{ cid: 'R55', name: 'Síncope e colapso', synonyms: ['Desmaio', 'Colapso'] },
{ cid: 'R56', name: 'Convulsões, não classificadas em outra parte', synonyms: ['Convulsões', 'Ataques epilépticos não especificados'] },
{ cid: 'R57', name: 'Choque, não classificado em outra parte', synonyms: ['Choque séptico', 'Choque não especificado'] },
{ cid: 'R58', name: 'Hemorragia, não classificada em outra parte', synonyms: ['Sangramento não especificado', 'Hemorragia'] },
{ cid: 'R59', name: 'Linfadenopatia', synonyms: ['Inchaço dos linfonodos', 'Adenopatia'] },
{ cid: 'R60', name: 'Edema, não classificado em outra parte', synonyms: ['Inchaço', 'Edema generalizado'] },
{ cid: 'R61', name: 'Hiperidrose', synonyms: ['Suor excessivo', 'Transpiração excessiva'] },
{ cid: 'R62', name: 'Falta de desenvolvimento fisiológico normal', synonyms: ['Atraso no crescimento', 'Desenvolvimento insuficiente'] },
{ cid: 'R63', name: 'Sintomas e sinais relacionados à ingestão de alimentos e líquidos', synonyms: ['Perda de apetite', 'Polidipsia'] },
{ cid: 'R64', name: 'Caquexia', synonyms: ['Desnutrição grave', 'Perda extrema de peso'] },
{ cid: 'R65', name: 'Sinais e sintomas de resposta inflamatória sistêmica', synonyms: ['Resposta inflamatória sistêmica', 'SIRS'] },
{ cid: 'R68', name: 'Outros sintomas e sinais gerais', synonyms: ['Febre de origem desconhecida', 'Mal-estar não especificado'] },
{ cid: 'R69', name: 'Causa de morbidade não especificada', synonyms: ['Causa de doença não especificada', 'Etiologia desconhecida'] },
{ cid: 'R70', name: 'Velocidade de hemossedimentação anormal e anomalias de viscosidade plasmática', synonyms: ['VHS elevada', 'Alterações da viscosidade do sangue'] },
{ cid: 'R71', name: 'Anormalidade das células vermelhas do sangue', synonyms: ['Eritrocitose', 'Anisocitose'] },
{ cid: 'R72', name: 'Anormalidade das células brancas do sangue', synonyms: ['Leucocitose', 'Leucopenia'] },
{ cid: 'R73', name: 'Glicose sanguínea elevada', synonyms: ['Hiperglicemia', 'Glicose alta'] },
{ cid: 'R74', name: 'Anomalias dos níveis de enzimas do soro', synonyms: ['Enzimas hepáticas elevadas', 'Aumento de enzimas no sangue'] },
{ cid: 'R75', name: 'Evidência laboratorial de infecção pelo vírus da imunodeficiência humana [HIV]', synonyms: ['HIV positivo', 'Infecção pelo HIV detectada'] },
{ cid: 'R76', name: 'Outras anomalias de resultados de imunologia', synonyms: ['Reações imunológicas anormais', 'Anomalias de teste de imunidade'] },
{ cid: 'R77', name: 'Outras anomalias das proteínas plasmáticas', synonyms: ['Disproteinemia', 'Hiperproteinemia'] },
{ cid: 'R78', name: 'Presença de álcool no sangue', synonyms: ['Álcool no sangue', 'Intoxicação alcoólica'] },
{ cid: 'R79', name: 'Outras anomalias dos achados de química do sangue', synonyms: ['Desequilíbrio eletrolítico', 'Anomalias químicas sanguíneas'] },
{ cid: 'R80', name: 'Proteinúria isolada', synonyms: ['Presença de proteína na urina', 'Proteinúria'] },
{ cid: 'R81', name: 'Glicosúria', synonyms: ['Presença de glicose na urina', 'Glicosúria não especificada'] },
{ cid: 'R82', name: 'Outras anomalias da urina', synonyms: ['Anomalias urinárias', 'Alterações na composição da urina'] },
{ cid: 'R83', name: 'Anomalias do líquor', synonyms: ['Alterações do líquido cefalorraquidiano', 'Anomalias do líquor'] },
{ cid: 'R84', name: 'Anomalias de secreção espermática', synonyms: ['Anormalidades do sêmen', 'Alterações na análise do sêmen'] },
{ cid: 'R85', name: 'Anomalias de secreção de órgão digestivo ou de órgão respiratório', synonyms: ['Alterações nas secreções digestivas', 'Anomalias de secreção respiratória'] },
{ cid: 'R86', name: 'Anomalias de amostras citológicas de órgãos genitais femininos', synonyms: ['Alterações citológicas', 'Anomalias citológicas genitais'] },
{ cid: 'R87', name: 'Anomalias de amostras citológicas de outros órgãos', synonyms: ['Anomalias citológicas de órgãos', 'Alterações citológicas'] },
{ cid: 'R89', name: 'Outras anomalias dos achados de amostras de órgãos, tecidos e líquidos', synonyms: ['Achados anormais de amostras', 'Alterações em exames de tecidos'] },
{ cid: 'R90', name: 'Achados anormais de diagnóstico por imagem do sistema nervoso central', synonyms: ['Alterações em imagens do SNC', 'Achados anormais em exames de imagem do cérebro'] },
{ cid: 'R91', name: 'Achados anormais de diagnóstico por imagem do pulmão', synonyms: ['Alterações em imagens do pulmão', 'Achados anormais em exames de imagem pulmonar'] },
{ cid: 'R92', name: 'Achados anormais de diagnóstico por imagem da mama', synonyms: ['Alterações em imagens da mama', 'Achados anormais em exames de imagem mamária'] },
{ cid: 'R93', name: 'Achados anormais de diagnóstico por imagem de outras partes do corpo', synonyms: ['Alterações em imagens corporais', 'Achados anormais em exames de imagem'] },
{ cid: 'R94', name: 'Resultados anormais de exames funcionais', synonyms: ['Resultados anormais de testes funcionais', 'Achados anormais em exames funcionais'] },
{ cid: 'R95', name: 'Morte súbita infantil, não especificada', synonyms: ['Síndrome da morte súbita infantil', 'Morte súbita inexplicada'] },
{ cid: 'R96', name: 'Outras causas de morte não especificadas', synonyms: ['Morte sem causa determinada', 'Morte de causa desconhecida'] },
{ cid: 'R98', name: 'Morte sem assistência', synonyms: ['Morte não assistida', 'Óbito sem acompanhamento médico'] },
{ cid: 'R99', name: 'Outras causas mal definidas e as não especificadas de mortalidade', synonyms: ['Causa mal definida de morte', 'Morte sem causa esclarecida'] },


// adicione mais códigos cid aqui abaixo... Doenças do aparelho digestivo (K00 - K93)
{ cid: 'K00', name: 'Transtornos do desenvolvimento e da erupção dos dentes', synonyms: ['Erupção dentária retardada', 'Desenvolvimento anormal dos dentes'] },
{ cid: 'K01', name: 'Dentes inclusos e impactados', synonyms: ['Dente incluso', 'Dente impactado'] },
{ cid: 'K02', name: 'Cárie dentária', synonyms: ['Cavidade', 'Cárie'] },
{ cid: 'K03', name: 'Outras doenças dos tecidos duros dos dentes', synonyms: ['Desgaste dentário', 'Erosão dentária'] },
{ cid: 'K04', name: 'Doenças da polpa e dos tecidos periapicais', synonyms: ['Pulpite', 'Abcesso periapical'] },
{ cid: 'K05', name: 'Gengivite e doenças periodontais', synonyms: ['Gengivite', 'Periodontite'] },
{ cid: 'K06', name: 'Outros transtornos da gengiva e do rebordo desdentado', synonyms: ['Hiperplasia gengival', 'Reabsorção alveolar'] },
{ cid: 'K07', name: 'Transtornos dentofaciais [incluindo anomalias da maxila e da mandíbula]', synonyms: ['Maloclusão', 'Prognatismo'] },
{ cid: 'K08', name: 'Outros transtornos dos dentes e das estruturas de suporte', synonyms: ['Perda dentária', 'Fratura dentária'] },
{ cid: 'K09', name: 'Cistos da região bucal, não classificados em outra parte', synonyms: ['Cisto odontogênico', 'Cisto radicular'] },
{ cid: 'K10', name: 'Outros transtornos dos maxilares', synonyms: ['Osteomielite dos maxilares', 'Displasia óssea'] },
{ cid: 'K11', name: 'Doenças das glândulas salivares', synonyms: ['Sialolitíase', 'Sialoadenite'] },
{ cid: 'K12', name: 'Estomatite e lesões correlatas', synonyms: ['Estomatite', 'Afta'] },
{ cid: 'K13', name: 'Outras doenças dos lábios e da mucosa oral', synonyms: ['Leucoplasia oral', 'Candidíase oral'] },
{ cid: 'K14', name: 'Doenças da língua', synonyms: ['Glossite', 'Língua geográfica'] },
{ cid: 'K20', name: 'Esofagite', synonyms: ['Inflamação do esôfago', 'Esofagite de refluxo'] },
{ cid: 'K21', name: 'Doença do refluxo gastroesofágico', synonyms: ['Refluxo ácido', 'DRGE'] },
{ cid: 'K22', name: 'Outras doenças do esôfago', synonyms: ['Estenose esofágica', 'Divertículo esofágico'] },
{ cid: 'K23', name: 'Transtornos do esôfago em doenças classificadas em outra parte', synonyms: ['Esofagite infecciosa', 'Esofagite por radiação'] },
{ cid: 'K25', name: 'Úlcera do estômago', synonyms: ['Úlcera gástrica', 'Úlcera péptica'] },
{ cid: 'K26', name: 'Úlcera do duodeno', synonyms: ['Úlcera duodenal', 'Úlcera péptica'] },
{ cid: 'K27', name: 'Úlcera do estômago e do duodeno', synonyms: ['Úlcera gástrica e duodenal', 'Úlcera péptica'] },
{ cid: 'K28', name: 'Úlcera gastrojejunal', synonyms: ['Úlcera pós-cirúrgica', 'Úlcera de anastomose'] },
{ cid: 'K29', name: 'Gastrite e duodenite', synonyms: ['Inflamação do estômago', 'Gastrite crônica'] },
{ cid: 'K30', name: 'Dispepsia', synonyms: ['Indigestão', 'Desconforto abdominal'] },
{ cid: 'K31', name: 'Outras doenças do estômago e do duodeno', synonyms: ['Gastroptose', 'Estenose pilórica'] },
{ cid: 'K35', name: 'Apendicite aguda', synonyms: ['Inflamação aguda do apêndice', 'Apendicite supurada'] },
{ cid: 'K36', name: 'Outras formas de apendicite', synonyms: ['Apendicite crônica', 'Apendicite recorrente'] },
{ cid: 'K37', name: 'Apendicite, não especificada', synonyms: ['Inflamação do apêndice', 'Apendicite'] },
{ cid: 'K38', name: 'Outras doenças do apêndice', synonyms: ['Mucocelo do apêndice', 'Divertículo do apêndice'] },
{ cid: 'K40', name: 'Hérnia inguinal', synonyms: ['Hérnia inguinal direta', 'Hérnia inguinal indireta'] },
{ cid: 'K41', name: 'Hérnia femoral', synonyms: ['Hérnia crural', 'Hérnia femoral encarcerada'] },
{ cid: 'K42', name: 'Hérnia umbilical', synonyms: ['Hérnia umbilical encarcerada', 'Hérnia umbilical estrangulada'] },
{ cid: 'K43', name: 'Hérnia ventral', synonyms: ['Hérnia epigástrica', 'Hérnia incisional'] },
{ cid: 'K44', name: 'Hérnia diafragmática', synonyms: ['Hérnia de hiato', 'Hérnia diafragmática congênita'] },
{ cid: 'K45', name: 'Outras hérnias da cavidade abdominal', synonyms: ['Hérnia obturadora', 'Hérnia lombar'] },
{ cid: 'K46', name: 'Hérnia da cavidade abdominal, não especificada', synonyms: ['Hérnia abdominal', 'Hérnia não especificada'] },
{ cid: 'K50', name: 'Doença de Crohn [enterite regional]', synonyms: ['Enterite regional', 'Doença inflamatória intestinal'] },
{ cid: 'K51', name: 'Colite ulcerativa', synonyms: ['Colite idiopática', 'Colite crônica'] },
{ cid: 'K52', name: 'Outras colites não infecciosas', synonyms: ['Colite alérgica', 'Colite isquêmica'] },
{ cid: 'K55', name: 'Transtornos vasculares do intestino', synonyms: ['Isquemia mesentérica', 'Infarto intestinal'] },
{ cid: 'K56', name: 'Íleo paralítico e obstrução intestinal sem hérnia', synonyms: ['Íleo adinâmico', 'Pseudo-obstrução intestinal'] },
{ cid: 'K57', name: 'Doença diverticular do intestino', synonyms: ['Diverticulose', 'Diverticulite'] },
{ cid: 'K58', name: 'Síndrome do intestino irritável', synonyms: ['Colite espástica', 'Cólon irritável'] },
{ cid: 'K59', name: 'Outros transtornos funcionais do intestino', synonyms: ['Constipação', 'Diarréia funcional'] },
{ cid: 'K60', name: 'Fissura e fístula da região anal e retal', synonyms: ['Fissura anal', 'Fístula retal'] },
{ cid: 'K61', name: 'Abscesso da região anal e retal', synonyms: ['Abscesso perianal', 'Abscesso isquiorretal'] },
{ cid: 'K62', name: 'Outras doenças do ânus e do reto', synonyms: ['Prolapso retal', 'Hemorroidas'] },
{ cid: 'K63', name: 'Outras doenças do intestino', synonyms: ['Divertículo intestinal', 'Úlcera intestinal'] },
{ cid: 'K65', name: 'Peritonite', synonyms: ['Inflamação do peritônio', 'Peritonite infecciosa'] },
{ cid: 'K66', name: 'Outros transtornos do peritônio', synonyms: ['Adesões peritoneais', 'Ascite quilosa'] },
{ cid: 'K67', name: 'Transtornos do peritônio em doenças classificadas em outra parte', synonyms: ['Peritonite tuberculosa', 'Peritonite carcinomatosa'] },
{ cid: 'K70', name: 'Doença hepática alcoólica', synonyms: ['Hepatite alcoólica', 'Cirrose alcoólica'] },
{ cid: 'K71', name: 'Doença hepática tóxica', synonyms: ['Hepatite medicamentosa', 'Hepatotoxicidade'] },
{ cid: 'K72', name: 'Insuficiência hepática, não classificada em outra parte', synonyms: ['Falência hepática', 'Insuficiência hepática aguda'] },
{ cid: 'K73', name: 'Hepatite crônica, não classificada em outra parte', synonyms: ['Hepatite crônica persistente', 'Hepatite crônica ativa'] },
{ cid: 'K74', name: 'Fibrose e cirrose hepáticas', synonyms: ['Fibrose hepática', 'Cirrose hepática'] },
{ cid: 'K75', name: 'Outras doenças inflamatórias do fígado', synonyms: ['Abscesso hepático', 'Hepatite granulomatosa'] },
{ cid: 'K76', name: 'Outras doenças do fígado', synonyms: ['Esteatose hepática', 'Hiperplasia nodular regenerativa'] },
{ cid: 'K77', name: 'Transtornos do fígado em doenças classificadas em outra parte', synonyms: ['Hepatite viral', 'Hepatite autoimune'] },
{ cid: 'K80', name: 'Colelitíase', synonyms: ['Cálculo biliar', 'Pedra na vesícula'] },
{ cid: 'K81', name: 'Colecistite', synonyms: ['Inflamação da vesícula biliar', 'Colecistite aguda'] },
{ cid: 'K82', name: 'Outras doenças da vesícula biliar', synonyms: ['Discinesia biliar', 'Polipose da vesícula biliar'] },
{ cid: 'K83', name: 'Outras doenças das vias biliares', synonyms: ['Colangite', 'Estenose biliar'] },
{ cid: 'K85', name: 'Pancreatite aguda', synonyms: ['Inflamação aguda do pâncreas', 'Pancreatite necrotizante'] },
{ cid: 'K86', name: 'Outras doenças do pâncreas', synonyms: ['Pancreatite crônica', 'Cisto pancreático'] },
{ cid: 'K87', name: 'Transtornos do pâncreas em doenças classificadas em outra parte', synonyms: ['Pancreatite autoimune', 'Pancreatite infecciosa'] },
{ cid: 'K90', name: 'Má-absorção intestinal', synonyms: ['Síndrome de má-absorção', 'Má-absorção de nutrientes'] },
{ cid: 'K91', name: 'Transtornos do aparelho digestivo pós-procedimentos', synonyms: ['Síndrome do intestino curto', 'Complicações pós-cirúrgicas'] },
{ cid: 'K92', name: 'Outros transtornos do aparelho digestivo', synonyms: ['Hematêmese', 'Melena'] },
{ cid: 'K93', name: 'Transtornos do aparelho digestivo em doenças classificadas em outra parte', synonyms: ['Doença celíaca', 'Doença de Whipple'] },

// adicione mais cid aqui abaixo... Transtornos mentais e comportamentais (F00 - F99)

{ cid: 'F00', name: 'Demência na doença de Alzheimer', synonyms: ['Demência Alzheimer', 'Doença de Alzheimer'] },
{ cid: 'F01', name: 'Demência vascular', synonyms: ['Demência de origem vascular', 'Demência multi-infarto'] },
{ cid: 'F02', name: 'Demência em outras doenças classificadas em outra parte', synonyms: ['Demência frontotemporal', 'Demência com corpos de Lewy'] },
{ cid: 'F03', name: 'Demência não especificada', synonyms: ['Demência não diferenciada', 'Demência senil'] },
{ cid: 'F04', name: 'Síndrome amnéstica orgânica, não induzida por álcool ou outras substâncias psicoativas', synonyms: ['Síndrome amnéstica', 'Amnésia orgânica'] },
{ cid: 'F05', name: 'Delirium, não induzido por álcool ou outras substâncias psicoativas', synonyms: ['Delirium não alcoólico', 'Estado confusional agudo'] },
{ cid: 'F06', name: 'Outros transtornos mentais devidos a lesão e disfunção cerebral e a doença física', synonyms: ['Transtorno mental orgânico', 'Transtorno neuropsiquiátrico'] },
{ cid: 'F07', name: 'Transtornos de personalidade e do comportamento devidos a doença, lesão ou disfunção cerebral', synonyms: ['Transtorno de personalidade orgânico', 'Mudança de personalidade'] },
{ cid: 'F10', name: 'Transtornos mentais e comportamentais devidos ao uso de álcool', synonyms: ['Dependência de álcool', 'Alcoolismo'] },
{ cid: 'F11', name: 'Transtornos mentais e comportamentais devidos ao uso de opioides', synonyms: ['Dependência de opioides', 'Uso de heroína'] },
{ cid: 'F12', name: 'Transtornos mentais e comportamentais devidos ao uso de canabinóides', synonyms: ['Dependência de maconha', 'Uso de cannabis'] },
{ cid: 'F13', name: 'Transtornos mentais e comportamentais devidos ao uso de sedativos ou hipnóticos', synonyms: ['Dependência de sedativos', 'Uso de benzodiazepinas'] },
{ cid: 'F14', name: 'Transtornos mentais e comportamentais devidos ao uso de cocaína', synonyms: ['Dependência de cocaína', 'Uso de crack'] },
{ cid: 'F15', name: 'Transtornos mentais e comportamentais devidos ao uso de outros estimulantes, incluindo cafeína', synonyms: ['Dependência de anfetaminas', 'Uso de estimulantes'] },
{ cid: 'F16', name: 'Transtornos mentais e comportamentais devidos ao uso de alucinógenos', synonyms: ['Dependência de LSD', 'Uso de alucinógenos'] },
{ cid: 'F17', name: 'Transtornos mentais e comportamentais devidos ao uso de fumo', synonyms: ['Dependência de nicotina', 'Uso de tabaco'] },
{ cid: 'F18', name: 'Transtornos mentais e comportamentais devidos ao uso de solventes voláteis', synonyms: ['Dependência de inalantes', 'Uso de solventes'] },
{ cid: 'F19', name: 'Transtornos mentais e comportamentais devidos ao uso de múltiplas drogas e ao uso de outras substâncias psicoativas', synonyms: ['Poliuso de drogas', 'Dependência de múltiplas substâncias'] },
{ cid: 'F20', name: 'Esquizofrenia', synonyms: ['Transtorno esquizofrênico', 'Psicose esquizofrênica'] },
{ cid: 'F21', name: 'Transtorno esquizotípico', synonyms: ['Esquizotipia', 'Transtorno esquizoide'] },
{ cid: 'F22', name: 'Transtornos delirantes persistentes', synonyms: ['Transtorno paranoide', 'Psicose delirante'] },
{ cid: 'F23', name: 'Transtornos psicóticos agudos e transitórios', synonyms: ['Psicose aguda', 'Episódio psicótico'] },
{ cid: 'F24', name: 'Transtorno delirante induzido', synonyms: ['Psicose compartilhada', 'Transtorno induzido por proximidade'] },
{ cid: 'F25', name: 'Transtornos esquizoafetivos', synonyms: ['Transtorno bipolar-esquizoafetivo', 'Esquizofrenia afetiva'] },
{ cid: 'F28', name: 'Outros transtornos psicóticos não-orgânicos', synonyms: ['Psicose atípica', 'Transtorno psicótico não especificado'] },
{ cid: 'F29', name: 'Psicose não-orgânica, não especificada', synonyms: ['Psicose não especificada', 'Transtorno psicótico não diferenciado'] },
{ cid: 'F30', name: 'Episódio maníaco', synonyms: ['Mania', 'Transtorno maníaco'] },
{ cid: 'F31', name: 'Transtorno afetivo bipolar', synonyms: ['Bipolaridade', 'Transtorno bipolar do humor'] },
{ cid: 'F32', name: 'Episódios depressivos', synonyms: ['Depressão maior', 'Episódio depressivo grave'] },
{ cid: 'F33', name: 'Transtorno depressivo recorrente', synonyms: ['Depressão recorrente', 'Transtorno depressivo'] },
{ cid: 'F34', name: 'Transtornos persistentes do humor [afetivos]', synonyms: ['Distimia', 'Ciclotimia'] },
{ cid: 'F38', name: 'Outros transtornos do humor [afetivos]', synonyms: ['Transtorno afetivo atípico', 'Humor anormal'] },
{ cid: 'F39', name: 'Transtorno do humor [afetivo], não especificado', synonyms: ['Transtorno afetivo não especificado', 'Humor não especificado'] },
{ cid: 'F40', name: 'Transtornos fóbico-ansiosos', synonyms: ['Fobia social', 'Fobia específica'] },
{ cid: 'F41', name: 'Outros transtornos ansiosos', synonyms: ['Ansiedade generalizada', 'Transtorno de pânico'] },
{ cid: 'F42', name: 'Transtorno obsessivo-compulsivo', synonyms: ['TOC', 'Transtorno obsessivo'] },
{ cid: 'F43', name: 'Reações ao estresse grave e transtornos de adaptação', synonyms: ['Transtorno de estresse pós-traumático', 'TEPT'] },
{ cid: 'F44', name: 'Transtornos dissociativos [de conversão]', synonyms: ['Transtorno de conversão', 'Transtorno dissociativo'] },
{ cid: 'F45', name: 'Transtornos somatoformes', synonyms: ['Transtorno de somatização', 'Hipocondria'] },
{ cid: 'F48', name: 'Outros transtornos neuróticos', synonyms: ['Transtorno neurótico', 'Transtorno de despersonalização'] },
{ cid: 'F50', name: 'Transtornos da alimentação', synonyms: ['Anorexia nervosa', 'Bulimia nervosa'] },
{ cid: 'F51', name: 'Transtornos do sono não-orgânicos', synonyms: ['Insônia', 'Parassonia'] },
{ cid: 'F52', name: 'Disfunção sexual não causada por transtorno ou doença orgânica', synonyms: ['Disfunção erétil', 'Transtorno de desejo sexual'] },
{ cid: 'F53', name: 'Transtornos mentais e comportamentais associados ao puerpério, não classificados em outra parte', synonyms: ['Depressão pós-parto', 'Psicose puerperal'] },
{ cid: 'F54', name: 'Fatores psicológicos e comportamentais associados a transtornos ou doenças classificados em outra parte', synonyms: ['Fatores psicossomáticos', 'Fatores psicológicos'] },
{ cid: 'F55', name: 'Abuso de substâncias não-dependência', synonyms: ['Abuso de medicamentos', 'Uso indevido de substâncias'] },
{ cid: 'F59', name: 'Síndromes comportamentais associadas a transtornos fisiológicos e a fatores físicos, não especificadas', synonyms: ['Transtorno comportamental não especificado', 'Síndrome comportamental'] },
{ cid: 'F60', name: 'Transtornos específicos da personalidade', synonyms: ['Transtorno de personalidade borderline', 'Transtorno de personalidade antissocial'] },
{ cid: 'F61', name: 'Transtornos mistos e outros transtornos da personalidade', synonyms: ['Transtorno de personalidade misto', 'Transtorno de personalidade múltipla'] },
{ cid: 'F62', name: 'Transtornos da personalidade e do comportamento devidos a doença, lesão ou disfunção cerebral', synonyms: ['Transtorno de personalidade orgânico', 'Transtorno de comportamento orgânico'] },
{ cid: 'F63', name: 'Transtornos dos hábitos e dos impulsos', synonyms: ['Cleptomania', 'Jogo patológico'] },
{ cid: 'F64', name: 'Transtornos da identidade sexual', synonyms: ['Transtorno de identidade de gênero', 'Disforia de gênero'] },
{ cid: 'F65', name: 'Transtornos da preferência sexual', synonyms: ['Parafilia', 'Fetichismo'] },
{ cid: 'F66', name: 'Transtornos psicológicos e comportamentais associados ao desenvolvimento e à orientação sexual', synonyms: ['Transtorno de orientação sexual', 'Transtorno de desenvolvimento sexual'] },
{ cid: 'F68', name: 'Outros transtornos de personalidade e do comportamento em adultos', synonyms: ['Transtorno de somatização', 'Transtorno factício'] },
{ cid: 'F69', name: 'Transtorno de personalidade e de comportamento em adultos, não especificado', synonyms: ['Transtorno de personalidade não especificado', 'Transtorno de comportamento não especificado'] },
{ cid: 'F70', name: 'Retardo mental leve', synonyms: ['Deficiência intelectual leve', 'Retardo mental grau leve'] },
{ cid: 'F71', name: 'Retardo mental moderado', synonyms: ['Deficiência intelectual moderada', 'Retardo mental grau moderado'] },
{ cid: 'F72', name: 'Retardo mental grave', synonyms: ['Deficiência intelectual grave', 'Retardo mental grau grave'] },
{ cid: 'F73', name: 'Retardo mental profundo', synonyms: ['Deficiência intelectual profunda', 'Retardo mental grau profundo'] },
{ cid: 'F78', name: 'Outro retardo mental', synonyms: ['Deficiência intelectual não especificada', 'Retardo mental atípico'] },
{ cid: 'F79', name: 'Retardo mental, não especificado', synonyms: ['Deficiência intelectual sem especificação', 'Retardo mental não especificado'] },
{ cid: 'F80', name: 'Transtornos específicos do desenvolvimento da fala e da linguagem', synonyms: ['Transtorno de linguagem expressiva', 'Disfasia'] },
{ cid: 'F81', name: 'Transtornos específicos do desenvolvimento das habilidades escolares', synonyms: ['Dislexia', 'Transtorno de aprendizagem'] },
{ cid: 'F82', name: 'Transtorno específico do desenvolvimento motor', synonyms: ['Dispraxia', 'Transtorno de coordenação motora'] },
{ cid: 'F83', name: 'Transtornos mistos do desenvolvimento', synonyms: ['Transtorno global do desenvolvimento', 'Transtorno de desenvolvimento misto'] },
{ cid: 'F84', name: 'Transtornos globais do desenvolvimento', synonyms: ['Transtorno do espectro autista', 'Síndrome de Asperger'] },
{ cid: 'F88', name: 'Outros transtornos do desenvolvimento psicológico', synonyms: ['Transtorno do desenvolvimento psicológico não especificado', 'Transtorno do desenvolvimento atípico'] },
{ cid: 'F89', name: 'Transtorno do desenvolvimento psicológico, não especificado', synonyms: ['Transtorno de desenvolvimento não especificado', 'Transtorno de desenvolvimento não diferenciável'] },
{ cid: 'F90', name: 'Transtornos hipercinéticos', synonyms: ['Transtorno de déficit de atenção e hiperatividade', 'TDAH'] },
{ cid: 'F91', name: 'Transtornos de conduta', synonyms: ['Transtorno de comportamento disruptivo', 'Transtorno de oposição desafiante'] },
{ cid: 'F92', name: 'Transtornos mistos de conduta e de emoções', synonyms: ['Transtorno de conduta com ansiedade', 'Transtorno de conduta com depressão'] },
{ cid: 'F93', name: 'Transtornos emocionais com início específico na infância', synonyms: ['Ansiedade de separação', 'Transtorno de ansiedade infantil'] },
{ cid: 'F94', name: 'Transtornos do funcionamento social com início específico na infância e na adolescência', synonyms: ['Transtorno de vínculo social', 'Transtorno de interação social'] },
{ cid: 'F95', name: 'Transtornos de tique', synonyms: ['Síndrome de Tourette', 'Transtorno de tique motor'] },
{ cid: 'F98', name: 'Outros transtornos emocionais e do comportamento com início habitualmente na infância e adolescência', synonyms: ['Enurese noturna', 'Transtorno de alimentação na infância'] },
{ cid: 'F99', name: 'Transtorno mental não especificado', synonyms: ['Transtorno psiquiátrico não especificado', 'Transtorno mental não diferenciável'] },

// adicione mais códigos cid aqui abaixo... Doenças do sistema osteomuscular e do tecido conjuntivo (M00 - M99)

{ cid: 'M00', name: 'Artrite piogênica', synonyms: ['Infecção articular bacteriana', 'Artrite séptica'] },
{ cid: 'M01', name: 'Artrite em doenças infecciosas classificadas em outra parte', synonyms: ['Artrite reativa', 'Síndrome de Reiter'] },
{ cid: 'M02', name: 'Artropatias reativas', synonyms: ['Artrite reativa', 'Síndrome de Reiter'] },
{ cid: 'M03', name: 'Artropatias pós-infecciosas e reativas', synonyms: ['Artrite pós-infecciosa', 'Artropatia reativa'] },
{ cid: 'M05', name: 'Artrite reumatoide com fator reumatoide', synonyms: ['Artrite reumatoide soropositiva', 'Artrite reumatoide sérica'] },
{ cid: 'M06', name: 'Outras artrites reumatoides', synonyms: ['Artrite reumatoide soronegativa', 'Artrite reumatoide juvenil'] },
{ cid: 'M08', name: 'Artrite juvenil', synonyms: ['Artrite idiopática juvenil', 'Artrite reumatoide juvenil'] },
{ cid: 'M10', name: 'Gota', synonyms: ['Artrite gotosa', 'Deposição de cristais de urato'] },
{ cid: 'M11', name: 'Outras artropatias por microcristais', synonyms: ['Pseudogota', 'Condrocalcinose'] },
{ cid: 'M12', name: 'Outras artropatias específicas', synonyms: ['Artropatia neuropática', 'Artropatia de Charcot'] },
{ cid: 'M13', name: 'Outras artrites', synonyms: ['Poliartrite', 'Artrite indiferenciada'] },
{ cid: 'M15', name: 'Poliartrose', synonyms: ['Osteoartrite múltipla', 'Artrose poliarticular'] },
{ cid: 'M16', name: 'Coxartrose [artrose do quadril]', synonyms: ['Osteoartrite do quadril', 'Artrose coxo-femoral'] },
{ cid: 'M17', name: 'Gonartrose [artrose do joelho]', synonyms: ['Osteoartrite do joelho', 'Artrose do joelho'] },
{ cid: 'M18', name: 'Artrose da primeira articulação carpometacarpiana', synonyms: ['Osteoartrite do polegar', 'Rizartrose'] },
{ cid: 'M19', name: 'Outras artroses', synonyms: ['Osteoartrite generalizada', 'Artrose secundária'] },
{ cid: 'M20', name: 'Deformidades adquiridas dos dedos das mãos e dos pés', synonyms: ['Dedo em martelo', 'Dedo em garra'] },
{ cid: 'M21', name: 'Outras deformidades adquiridas dos membros', synonyms: ['Desvio ulnar dos dedos', 'Joanete'] },
{ cid: 'M22', name: 'Afecções da patela', synonyms: ['Condromalácia patelar', 'Luxação patelar'] },
{ cid: 'M23', name: 'Transtornos internos do joelho', synonyms: ['Lesão de menisco', 'Lesão de ligamento cruzado anterior'] },
{ cid: 'M24', name: 'Outros transtornos específicos das articulações', synonyms: ['Corpo estranho intra-articular', 'Instabilidade articular'] },
{ cid: 'M25', name: 'Outros transtornos das articulações, não classificados em outra parte', synonyms: ['Derrame articular', 'Anquilose articular'] },
{ cid: 'M30', name: 'Poliarterite nodosa e doenças relacionadas', synonyms: ['Síndrome de Churg-Strauss', 'Doença de Kawasaki'] },
{ cid: 'M31', name: 'Outras vasculopatias necrosantes', synonyms: ['Doença de Behçet', 'Granulomatose de Wegener'] },
{ cid: 'M32', name: 'Lúpus eritematoso sistêmico', synonyms: ['Lúpus sistêmico', 'LES'] },
{ cid: 'M33', name: 'Dermatopolimiosite', synonyms: ['Polimiosite', 'Dermatomiosite'] },
{ cid: 'M34', name: 'Esclerose sistêmica', synonyms: ['Esclerodermia', 'Esclerose sistêmica progressiva'] },
{ cid: 'M35', name: 'Outras doenças sistêmicas do tecido conjuntivo', synonyms: ['Síndrome de Sjögren', 'Síndrome de Felty'] },
{ cid: 'M36', name: 'Outras artropatias sistêmicas', synonyms: ['Síndrome de Reiter', 'Síndrome de Sweet'] },
{ cid: 'M40', name: 'Cifose e lordose', synonyms: ['Hipercifose', 'Hiperlordose'] },
{ cid: 'M41', name: 'Escoliose', synonyms: ['Escoliose idiopática', 'Curvatura anormal da coluna'] },
{ cid: 'M42', name: 'Osteocondrose da coluna vertebral', synonyms: ['Doença de Scheuermann', 'Osteocondrite da coluna'] },
{ cid: 'M43', name: 'Outros transtornos da coluna vertebral', synonyms: ['Espondilolistese', 'Instabilidade vertebral'] },
{ cid: 'M45', name: 'Espondilite anquilosante', synonyms: ['Doença de Bechterew', 'Espondiloartrite'] },
{ cid: 'M46', name: 'Outras espondilopatias inflamatórias', synonyms: ['Sacroileíte', 'Doença de Forestier'] },
{ cid: 'M47', name: 'Espondilose', synonyms: ['Osteoartrite da coluna', 'Artrose vertebral'] },
{ cid: 'M48', name: 'Outros transtornos especificados da coluna vertebral', synonyms: ['Espondilodiscite', 'Estenose espinhal'] },
{ cid: 'M50', name: 'Transtornos cervicais do disco intervertebral', synonyms: ['Hérnia de disco cervical', 'Degeneração do disco cervical'] },
{ cid: 'M51', name: 'Outros transtornos do disco intervertebral', synonyms: ['Hérnia de disco lombar', 'Degeneração do disco lombar'] },
{ cid: 'M53', name: 'Outros transtornos da coluna vertebral, não classificados em outra parte', synonyms: ['Síndrome de Tietze', 'Dorsalgia inespecífica'] },
{ cid: 'M54', name: 'Dorsalgia', synonyms: ['Dor nas costas', 'Lombalgia'] },
{ cid: 'M60', name: 'Miosite', synonyms: ['Inflamação muscular', 'Miosite infecciosa'] },
{ cid: 'M61', name: 'Calcificação e ossificação do músculo', synonyms: ['Miosite ossificante', 'Calcificação muscular'] },
{ cid: 'M62', name: 'Outros transtornos do músculo', synonyms: ['Miopatia inflamatória', 'Ruptura muscular'] },
{ cid: 'M63', name: 'Transtornos do músculo em doenças classificadas em outra parte', synonyms: ['Miopatia em distúrbios endócrinos', 'Miopatia em doenças infecciosas'] },
{ cid: 'M65', name: 'Sinovite e tenossinovite', synonyms: ['Tendinite', 'Tenossinovite de De Quervain'] },
{ cid: 'M66', name: 'Ruptura espontânea de sinovium e tendão', synonyms: ['Ruptura de tendão', 'Ruptura de ligamento'] },
{ cid: 'M67', name: 'Outros transtornos do tendão', synonyms: ['Tendinopatia', 'Degeneração tendínea'] },
{ cid: 'M70', name: 'Transtornos dos tecidos moles relacionados com uso, uso excessivo e pressão', synonyms: ['Bursite', 'Síndrome do túnel do carpo'] },
{ cid: 'M71', name: 'Outros transtornos da bursa', synonyms: ['Higroma', 'Bursite séptica'] },
{ cid: 'M72', name: 'Transtornos fibroblásticos', synonyms: ['Fibromatose', 'Doença de Dupuytren'] },
{ cid: 'M73', name: 'Transtornos do tecido conjuntivo em doenças classificadas em outra parte', synonyms: ['Lúpus induzido por drogas', 'Esclerodermia em doenças autoimunes'] },
{ cid: 'M75', name: 'Lesões do ombro', synonyms: ['Síndrome do impacto', 'Lesão do manguito rotador'] },
{ cid: 'M76', name: 'Entesopatias dos membros inferiores, exceto pé', synonyms: ['Tendinite patelar', 'Tendinite do quadríceps'] },
{ cid: 'M77', name: 'Outras entesopatias', synonyms: ['Epicondilite lateral', 'Epicondilite medial'] },
{ cid: 'M79', name: 'Outros transtornos dos tecidos moles, não classificados em outra parte', synonyms: ['Fibromialgia', 'Dor miofascial'] },
{ cid: 'M80', name: 'Osteoporose com fratura patológica', synonyms: ['Osteoporose senil', 'Fratura por fragilidade óssea'] },
{ cid: 'M81', name: 'Osteoporose sem fratura patológica', synonyms: ['Osteoporose primária', 'Osteopenia'] },
{ cid: 'M82', name: 'Osteoporose em doenças classificadas em outra parte', synonyms: ['Osteoporose secundária', 'Osteoporose induzida por medicamentos'] },
{ cid: 'M83', name: 'Osteomalácia e raquitismo do adulto', synonyms: ['Deficiência de vitamina D', 'Raquitismo hipofosfatêmico'] },
{ cid: 'M84', name: 'Outros transtornos da continuidade do osso', synonyms: ['Fratura de estresse', 'Retardo de consolidação'] },
{ cid: 'M85', name: 'Outras osteopatias', synonyms: ['Doença de Paget', 'Osteíte deformante'] },
{ cid: 'M86', name: 'Osteomielite', synonyms: ['Infecção óssea', 'Inflamação óssea'] },
{ cid: 'M87', name: 'Osteonecrose', synonyms: ['Necrose avascular', 'Osteonecrose asséptica'] },
{ cid: 'M88', name: 'Osteíte deformante [Doença de Paget] do osso', synonyms: ['Doença de Paget óssea', 'Osteíte deformante'] },
{ cid: 'M89', name: 'Outros transtornos ósseos', synonyms: ['Osteólise', 'Hiperostose'] },
{ cid: 'M90', name: 'Osteopatias em doenças classificadas em outra parte', synonyms: ['Osteopatia em hiperparatireoidismo', 'Osteopatia em doença renal crônica'] },
{ cid: 'M91', name: 'Osteocondrose juvenil', synonyms: ['Doença de Legg-Calvé-Perthes', 'Epifisite juvenil'] },
{ cid: 'M92', name: 'Outras osteocondroses juvenis', synonyms: ['Doença de Osgood-Schlatter', 'Doença de Sinding-Larsen-Johansson'] },
{ cid: 'M93', name: 'Outras osteocondroses', synonyms: ['Osteocondrite dissecante', 'Doença de Köhler'] },
{ cid: 'M94', name: 'Outros transtornos das cartilagens', synonyms: ['Condromalácia', 'Condromatose'] },
{ cid: 'M95', name: 'Outras deformidades adquiridas do sistema osteomuscular', synonyms: ['Desvio do septo nasal', 'Deformidade adquirida dos dedos'] },
{ cid: 'M96', name: 'Transtornos osteomusculares pós-procedimentos', synonyms: ['Síndrome de fratura mal consolidada', 'Infecção pós-operatória do osso'] },
{ cid: 'M97', name: 'Complicações de dispositivos ortopédicos, implantes e enxertos', synonyms: ['Rejeição de prótese', 'Afrouxamento de prótese'] },
{ cid: 'M99', name: 'Transtornos biomecânicos não classificados em outra parte', synonyms: ['Disfunção biomecânica', 'Transtorno de movimento'] },

// adicione mais códigos cid aqui... Doenças do sangue e dos órgãos hematopoéticos e alguns transtornos imunitários (D50 - D89)" e a subseção "Anemias nutricionais (D50 - D53)

{ cid: 'D50',   name: 'Anemia por deficiência de ferro', synonyms: ['Anemia ferropriva', 'Deficiência de ferro'] },
{ cid: 'D50.0', name: 'Anemia por deficiência de ferro secundária a perda de sangue (crônica)', synonyms: ['Anemia ferropriva crônica', 'Anemia por hemorragia crônica'] },
{ cid: 'D50.1', name: 'Anemia por deficiência de ferro secundária a dieta inadequada', synonyms: ['Anemia ferropriva alimentar', 'Anemia nutricional ferropriva'] },
{ cid: 'D50.8', name: 'Outras anemias por deficiência de ferro', synonyms: ['Anemia ferropriva de etiologia mista', 'Anemia por deficiência de ferro não especificada'] },
{ cid: 'D51',   name: 'Anemia por deficiência de vitamina B12', synonyms: ['Anemia megaloblástica', 'Anemia perniciosa'] },
{ cid: 'D51.0', name: 'Anemia por deficiência de vitamina B12 devido a dieta inadequada', synonyms: ['Anemia megaloblástica alimentar', 'Deficiência de vitamina B12 alimentar'] },
{ cid: 'D51.1', name: 'Anemia por deficiência de vitamina B12 devido a má-absorção', synonyms: ['Anemia megaloblástica por má-absorção', 'Deficiência de vitamina B12 por má-absorção'] },
{ cid: 'D51.2', name: 'Anemia por deficiência de vitamina B12 devido a anomalias congênitas do metabolismo da cobalamina e do fator intrínseco', synonyms: ['Anemia megaloblástica congênita', 'Anemia por defeito congênito do metabolismo da vitamina B12'] },
{ cid: 'D51.3', name: 'Outras anemias por deficiência de vitamina B12', synonyms: ['Anemia megaloblástica de etiologia mista', 'Deficiência de vitamina B12 não especificada'] },
{ cid: 'D51.8', name: 'Outras anemias por deficiência de vitamina B12', synonyms: ['Anemia megaloblástica de causa não especificada', 'Anemia por deficiência de vitamina B12 não especificada'] },
{ cid: 'D51.9', name: 'Anemia por deficiência de vitamina B12, não especificada', synonyms: ['Anemia megaloblástica não especificada', 'Deficiência de vitamina B12 não especificada'] },
{ cid: 'D52',   name: 'Anemia por deficiência de folato', synonyms: ['Anemia megaloblástica por deficiência de ácido fólico', 'Deficiência de folato'] },
{ cid: 'D52.0', name: 'Anemia por deficiência de folato devido a dieta inadequada', synonyms: ['Anemia megaloblástica por deficiência de folato alimentar', 'Deficiência de folato alimentar'] },
{ cid: 'D52.1', name: 'Anemia por deficiência de folato devido a má-absorção', synonyms: ['Anemia megaloblástica por má-absorção de folato', 'Deficiência de folato por má-absorção'] },
{ cid: 'D52.1', name: 'Anemia por deficiência de folato devido a má-absorção', synonyms: ['Anemia megaloblástica por má-absorção de folato', 'Deficiência de folato por má-absorção'] },
{ cid: 'D52.8', name: 'Outras anemias por deficiência de folato', synonyms: ['Anemia megaloblástica por deficiência de folato de causa não especificada', 'Deficiência de folato de causa não especificada'] },
{ cid: 'D52.9', name: 'Anemia por deficiência de folato, não especificada', synonyms: ['Anemia megaloblástica por deficiência de folato não especificada', 'Deficiência de folato não especificada'] },
{ cid: 'D53',   name: 'Outras anemias nutricionais', synonyms: ['Anemia nutricional não especificada', 'Anemia de causa nutricional não especificada'] },
{ cid: 'D53.0', name: 'Anemia por deficiência de proteínas e outros nutrientes', synonyms: ['Anemia por deficiência proteica', 'Anemia por desnutrição proteico-calórica'] },
{ cid: 'D53.1', name: 'Anemia devida a má-absorção', synonyms: ['Anemia megaloblástica por má-absorção', 'Anemia por síndrome de má-absorção'] },
{ cid: 'D53.2', name: 'Anemia devida a deficiências múltiplas de nutrientes', synonyms: ['Anemia por deficiência múltipla de vitaminas e minerais', 'Anemia devida a múltiplas deficiências nutricionais'] },
{ cid: 'D53.8', name: 'Outras anemias nutricionais especificadas', synonyms: ['Anemia por deficiência de vitamina A', 'Anemia por deficiência de vitamina C'] },
{ cid: 'D53.9', name: 'Anemia nutricional não especificada', synonyms: ['Anemia de causa nutricional não especificada', 'Anemia nutricional não classificada em outra parte'] },

// adicione mais cid aqui abaixo... Causas externas de morbidade e de mortalidade (V01 - Y98)
// sub-tópico "Acidentes (V01 - X59)"

{ cid: 'V01', name: 'Pedestre traumatizado em acidente de transporte, ao longo de rodovia', synonyms: ['Acidente de pedestre', 'Trauma rodoviário'] },
{ cid: 'V02', name: 'Ciclista traumatizado em acidente de transporte, ao longo de rodovia', synonyms: ['Acidente de bicicleta', 'Trauma ciclista'] },
{ cid: 'V03', name: 'Motociclista traumatizado em acidente de transporte, ao longo de rodovia', synonyms: ['Acidente de motocicleta', 'Trauma motociclista'] },
{ cid: 'V04', name: 'Ocupante de veículo a motor traumatizado em acidente de transporte, ao longo de rodovia', synonyms: ['Acidente de carro', 'Trauma ocupante de veículo'] },
{ cid: 'V05', name: 'Passageiro de ônibus traumatizado em acidente de transporte, ao longo de rodovia', synonyms: ['Acidente de ônibus', 'Trauma passageiro de ônibus'] },
{ cid: 'V06', name: 'Ocupante de veículo pesado traumatizado em acidente de transporte, ao longo de rodovia', synonyms: ['Acidente de caminhão', 'Trauma ocupante de veículo pesado'] },
{ cid: 'V07', name: 'Pedestre traumatizado em acidente de transporte, não especificado se ao longo de rodovia ou não', synonyms: ['Acidente de pedestre não especificado', 'Trauma pedestre não especificado'] },
{ cid: 'V08', name: 'Ciclista traumatizado em acidente de transporte, não especificado se ao longo de rodovia ou não', synonyms: ['Acidente de ciclista não especificado', 'Trauma ciclista não especificado'] },
{ cid: 'V09', name: 'Outro acidente de transporte não especificado', synonyms: ['Acidente de transporte não especificado', 'Trauma de transporte não especificado'] },
{ cid: 'V10', name: 'Ocupante de trem ou outro veículo ferroviário traumatizado em acidente de transporte', synonyms: ['Acidente de trem', 'Trauma ocupante de trem'] },
{ cid: 'V11', name: 'Ocupante de bonde traumatizado em acidente de transporte', synonyms: ['Acidente de bonde', 'Trauma ocupante de bonde'] },
{ cid: 'V12', name: 'Ocupante de motociclo traumatizado em acidente de transporte, não especificado se ao longo de rodovia ou não', synonyms: ['Acidente de motociclo não especificado', 'Trauma ocupante de motociclo não especificado'] },
{ cid: 'V13', name: 'Ocupante de automóvel traumatizado em acidente de transporte, não especificado se ao longo de rodovia ou não', synonyms: ['Acidente de automóvel não especificado', 'Trauma ocupante de automóvel não especificado'] },
{ cid: 'V14', name: 'Ocupante de caminhão traumatizado em acidente de transporte, não especificado se ao longo de rodovia ou não', synonyms: ['Acidente de caminhão não especificado', 'Trauma ocupante de caminhão não especificado'] },
{ cid: 'V15', name: 'Ocupante de ônibus traumatizado em acidente de transporte, não especificado se ao longo de rodovia ou não', synonyms: ['Acidente de ônibus não especificado', 'Trauma ocupante de ônibus não especificado'] },
{ cid: 'V16', name: 'Ocupante de outro veículo a motor traumatizado em acidente de transporte, não especificado se ao longo de rodovia ou não', synonyms: ['Acidente de veículo a motor não especificado', 'Trauma ocupante de veículo a motor não especificado'] },
{ cid: 'V17', name: 'Ocupante de veículo pesado traumatizado em acidente de transporte, não especificado se ao longo de rodovia ou não', synonyms: ['Acidente de veículo pesado não especificado', 'Trauma ocupante de veículo pesado não especificado'] },
{ cid: 'V18', name: 'Outro acidente de transporte terrestre, não especificado se ao longo de rodovia ou não', synonyms: ['Acidente terrestre não especificado', 'Trauma terrestre não especificado'] },
{ cid: 'V19', name: 'Outros acidentes de transporte terrestre especificados', synonyms: ['Acidente de transporte terrestre especificado', 'Trauma de transporte terrestre especificado'] },
{ cid: 'X59', name: 'Exposição a outros fatores não especificados', synonyms: ['Exposição a fatores não especificados', 'Trauma por exposição não especificada'] },
{ cid: 'W00', name: 'Queda em mesmo nível por escorregamento, tropeço e outros', synonyms: ['Queda por escorregamento', 'Queda por tropeço'] },
{ cid: 'W01', name: 'Queda no mesmo nível por colisão com ou empurrão por outra pessoa', synonyms: ['Queda por colisão com pessoa', 'Queda por empurrão'] },
{ cid: 'W02', name: 'Queda envolvendo patins e skates', synonyms: ['Queda de patins', 'Queda de skate'] },
{ cid: 'W03', name: 'Queda ao subir ou descer escadas e degraus', synonyms: ['Queda de escadas', 'Queda de degraus'] },
{ cid: 'W04', name: 'Queda enquanto transportado ou apoiado por outra pessoa', synonyms: ['Queda ao ser transportado', 'Queda ao ser apoiado'] },
{ cid: 'W05', name: 'Queda envolvendo cadeira de rodas', synonyms: ['Queda de cadeira de rodas', 'Acidente de cadeira de rodas'] },
{ cid: 'W06', name: 'Queda envolvendo cama', synonyms: ['Queda de cama', 'Acidente de cama'] },
{ cid: 'W07', name: 'Queda envolvendo cadeira', synonyms: ['Queda de cadeira', 'Acidente de cadeira'] },
{ cid: 'W08', name: 'Queda envolvendo outros móveis', synonyms: ['Queda de móveis', 'Acidente de móveis'] },
{ cid: 'W09', name: 'Queda envolvendo equipamento de recreação', synonyms: ['Queda de equipamento de recreação', 'Acidente de recreação'] },
{ cid: 'W10', name: 'Queda em e de escadas e degraus', synonyms: ['Queda em escadas', 'Queda em degraus'] },
{ cid: 'W11', name: 'Queda em e de escadas rolantes', synonyms: ['Queda de escada rolante', 'Acidente de escada rolante'] },
{ cid: 'W12', name: 'Queda em e de escadas de mão', synonyms: ['Queda de escada de mão', 'Acidente de escada de mão'] },
{ cid: 'W13', name: 'Queda de prédio, edificação ou outra estrutura', synonyms: ['Queda de prédio', 'Queda de edificação'] },
{ cid: 'W14', name: 'Queda de árvore', synonyms: ['Queda de árvore', 'Acidente de árvore'] },
{ cid: 'W15', name: 'Queda de penhasco', synonyms: ['Queda de penhasco', 'Acidente de penhasco'] },
{ cid: 'W16', name: 'Mergulho ou salto em água causando ferimento', synonyms: ['Acidente de mergulho', 'Ferimento por salto em água'] },
{ cid: 'W17', name: 'Outras quedas de um nível para outro', synonyms: ['Queda de um nível para outro', 'Acidente de nível diferente'] },
{ cid: 'W18', name: 'Outra queda em mesmo nível', synonyms: ['Queda em mesmo nível', 'Acidente de mesmo nível'] },
{ cid: 'W19', name: 'Queda não especificada', synonyms: ['Queda não especificada', 'Acidente de queda não especificado'] },
{ cid: 'W20', name: 'Impacto com objetos em queda', synonyms: ['Impacto de objeto em queda', 'Ferimento por objeto em queda'] },
{ cid: 'W21', name: 'Impacto com objetos esportivos', synonyms: ['Impacto de objeto esportivo', 'Ferimento por objeto esportivo'] },
{ cid: 'W22', name: 'Impacto com ou empurrão contra outro objeto', synonyms: ['Impacto contra objeto', 'Empurrão contra objeto'] },
{ cid: 'W23', name: 'Empurrão, impacto ou esmagamento por pessoa', synonyms: ['Empurrão por pessoa', 'Impacto por pessoa'] },
{ cid: 'W24', name: 'Contato com guilhotinas e outros objetos de corte', synonyms: ['Contato com objetos de corte', 'Ferimento por guilhotina'] },
{ cid: 'W25', name: 'Contato com vidro', synonyms: ['Contato com vidro', 'Ferimento por vidro'] },
{ cid: 'W26', name: 'Contato com faca, espada ou punhal', synonyms: ['Contato com faca', 'Ferimento por espada'] },
{ cid: 'W27', name: 'Contato com ferramenta manual', synonyms: ['Contato com ferramenta', 'Ferimento por ferramenta'] },
{ cid: 'W28', name: 'Contato com cortador de grama', synonyms: ['Contato com cortador de grama', 'Ferimento por cortador de grama'] },
{ cid: 'W29', name: 'Contato com outra máquina ou aparelho', synonyms: ['Contato com máquina', 'Ferimento por aparelho'] },
{ cid: 'W30', name: 'Contato com arma de fogo', synonyms: ['Contato com arma', 'Ferimento por arma de fogo'] },
{ cid: 'W31', name: 'Contato com explosivos', synonyms: ['Contato com explosivos', 'Ferimento por explosivos'] },
{ cid: 'W32', name: 'Disparo acidental de arma de fogo', synonyms: ['Disparo acidental de arma', 'Acidente de arma de fogo'] },
{ cid: 'W33', name: 'Explosão acidental de munição', synonyms: ['Explosão de munição', 'Acidente com munição'] },
{ cid: 'W34', name: 'Explosão acidental de outro dispositivo explosivo', synonyms: ['Explosão de dispositivo explosivo', 'Acidente com dispositivo explosivo'] },
{ cid: 'W35', name: 'Explosão acidental de fogos de artifício', synonyms: ['Explosão de fogos de artifício', 'Acidente com fogos de artifício'] },
{ cid: 'W36', name: 'Explosão acidental de outro material explosivo especificado', synonyms: ['Explosão de material explosivo', 'Acidente com material explosivo'] },
{ cid: 'W37', name: 'Explosão de botijão de gás', synonyms: ['Explosão de botijão', 'Acidente com botijão de gás'] },
{ cid: 'W38', name: 'Explosão de outros cilindros de gás', synonyms: ['Explosão de cilindro de gás', 'Acidente com cilindro de gás'] },
{ cid: 'W39', name: 'Explosão de outro material gasoso', synonyms: ['Explosão de gás', 'Acidente com gás'] },
{ cid: 'W40', name: 'Explosão de substância líquida', synonyms: ['Explosão de líquido', 'Acidente com líquido explosivo'] },
{ cid: 'W41', name: 'Explosão de substância sólida', synonyms: ['Explosão de sólido', 'Acidente com sólido explosivo'] },
{ cid: 'W42', name: 'Explosão de objeto metálico', synonyms: ['Explosão de metal', 'Acidente com metal explosivo'] },
{ cid: 'W43', name: 'Explosão de objeto não metálico', synonyms: ['Explosão de não metal', 'Acidente com não metal explosivo'] },
{ cid: 'W44', name: 'Explosão de objeto não especificado', synonyms: ['Explosão não especificada', 'Acidente de explosão não especificado'] },
{ cid: 'W45', name: 'Contato com corrente elétrica', synonyms: ['Contato com eletricidade', 'Ferimento por corrente elétrica'] },
{ cid: 'W46', name: 'Contato com linha de energia elétrica', synonyms: ['Contato com linha de energia', 'Ferimento por linha elétrica'] },
{ cid: 'W47', name: 'Contato com alta tensão', synonyms: ['Contato com alta tensão', 'Ferimento por alta tensão'] },
{ cid: 'W48', name: 'Contato com baixa tensão', synonyms: ['Contato com baixa tensão', 'Ferimento por baixa tensão'] },
{ cid: 'W49', name: 'Contato com corrente elétrica, não especificado', synonyms: ['Contato elétrico não especificado', 'Ferimento elétrico não especificado'] },
{ cid: 'W50', name: 'Contato com plantas venenosas', synonyms: ['Contato com planta venenosa', 'Ferimento por planta venenosa'] },
{ cid: 'W51', name: 'Contato com animais venenosos', synonyms: ['Contato com animal venenoso', 'Ferimento por animal venenoso'] },
{ cid: 'W52', name: 'Contato com substância tóxica', synonyms: ['Contato com substância tóxica', 'Ferimento por substância tóxica'] },
{ cid: 'W53', name: 'Contato com substância química não especificada', synonyms: ['Contato com substância química', 'Ferimento por substância química'] },
{ cid: 'W54', name: 'Contato com material radioativo', synonyms: ['Contato com material radioativo', 'Ferimento por material radioativo'] },
{ cid: 'X10', name: 'Contato com fogo e chamas de origem natural', synonyms: ['Queimadura por fogo natural', 'Contato com chamas naturais'] },
{ cid: 'X11', name: 'Contato com fogo e chamas de produtos de consumo', synonyms: ['Queimadura por produtos de consumo', 'Contato com chamas de produtos de consumo'] },
{ cid: 'X12', name: 'Contato com fogo e chamas de dispositivos de aquecimento', synonyms: ['Queimadura por dispositivo de aquecimento', 'Contato com chamas de aquecimento'] },
{ cid: 'X13', name: 'Contato com fogo e chamas de material inflamável', synonyms: ['Queimadura por material inflamável', 'Contato com chamas de material inflamável'] },
{ cid: 'X14', name: 'Contato com fogo e chamas de origem não especificada', synonyms: ['Queimadura de origem não especificada', 'Contato com chamas não especificadas'] },
{ cid: 'X15', name: 'Contato com vapor e água quente', synonyms: ['Queimadura por vapor', 'Queimadura por água quente'] },
{ cid: 'X16', name: 'Contato com líquido quente', synonyms: ['Queimadura por líquido quente', 'Contato com líquido quente'] },
{ cid: 'X17', name: 'Contato com alimentos quentes', synonyms: ['Queimadura por alimentos quentes', 'Contato com alimentos quentes'] },
{ cid: 'X18', name: 'Contato com objetos aquecidos', synonyms: ['Queimadura por objetos aquecidos', 'Contato com objetos aquecidos'] },
{ cid: 'X19', name: 'Contato com outras fontes de calor e substâncias quentes', synonyms: ['Queimadura por outras fontes de calor', 'Contato com substâncias quentes'] },
{ cid: 'X20', name: 'Contato com cobras e lagartos venenosos', synonyms: ['Mordedura de cobra venenosa', 'Mordedura de lagarto venenoso'] },
{ cid: 'X21', name: 'Contato com outros animais venenosos e plantas venenosas', synonyms: ['Contato com animais venenosos', 'Contato com plantas venenosas'] },
{ cid: 'X22', name: 'Contato com insetos venenosos', synonyms: ['Picada de inseto venenoso', 'Mordedura de inseto venenoso'] },
{ cid: 'X23', name: 'Contato com animais marinhos venenosos', synonyms: ['Picada de animal marinho venenoso', 'Mordedura de animal marinho venenoso'] },
{ cid: 'X24', name: 'Contato com outros artrópodes venenosos', synonyms: ['Picada de artrópode venenoso', 'Mordedura de artrópode venenoso'] },
{ cid: 'X25', name: 'Contato com espinhos e pontas venenosas de plantas', synonyms: ['Contato com espinhos venenosos', 'Contato com pontas venenosas de plantas'] },
{ cid: 'X26', name: 'Contato com plantas venenosas', synonyms: ['Contato com plantas venenosas', 'Intoxicação por plantas venenosas'] },
{ cid: 'X27', name: 'Contato com animais venenosos não especificados', synonyms: ['Contato com animais venenosos não especificados', 'Intoxicação por animais venenosos não especificados'] },
{ cid: 'X28', name: 'Exposição a radiação ionizante', synonyms: ['Exposição a radiação ionizante', 'Contaminação por radiação ionizante'] },
{ cid: 'X29', name: 'Exposição a radiação não ionizante', synonyms: ['Exposição a radiação não ionizante', 'Contaminação por radiação não ionizante'] },

// adicione mais códigos cid aqui abaixo... Causas externas de morbidade e de mortalidade (V01 - Y98)
//subcapítulo "Lesões autoprovocadas intencionalmente (X60 - X84)"

{ cid: 'X60', name: 'Autoenvenenamento intencional por e exposição a drogas, medicamentos e substâncias biológicas', synonyms: ['Autoenvenenamento por drogas', 'Autoenvenenamento por medicamentos', 'Autoenvenenamento por substâncias biológicas'] },
{ cid: 'X61', name: 'Autoenvenenamento intencional por e exposição a álcool', synonyms: ['Autoenvenenamento por álcool', 'Intoxicação intencional por álcool'] },
{ cid: 'X62', name: 'Autoenvenenamento intencional por e exposição a solventes orgânicos e halogenados e seus vapores', synonyms: ['Autoenvenenamento por solventes orgânicos', 'Autoenvenenamento por solventes halogenados'] },
{ cid: 'X63', name: 'Autoenvenenamento intencional por e exposição a pesticidas', synonyms: ['Autoenvenenamento por pesticidas', 'Intoxicação intencional por pesticidas'] },
{ cid: 'X64', name: 'Autoenvenenamento intencional por e exposição a produtos químicos e substâncias nocivas não classificados em outra parte', synonyms: ['Autoenvenenamento por produtos químicos', 'Autoenvenenamento por substâncias nocivas'] },
{ cid: 'X65', name: 'Autoenvenenamento intencional por e exposição a outros gases e vapores', synonyms: ['Autoenvenenamento por gases', 'Autoenvenenamento por vapores'] },
{ cid: 'X66', name: 'Autoenvenenamento intencional por e exposição a agrotóxicos agrícolas, não classificados em outra parte', synonyms: ['Autoenvenenamento por agrotóxicos agrícolas', 'Autoenvenenamento por pesticidas agrícolas'] },
{ cid: 'X67', name: 'Autoenvenenamento intencional por e exposição a outros produtos químicos e substâncias nocivas, não classificados em outra parte', synonyms: ['Autoenvenenamento por produtos químicos', 'Autoenvenenamento por substâncias nocivas'] },
{ cid: 'X68', name: 'Lesões autoprovocadas intencionalmente por enforcamento, estrangulamento e sufocação', synonyms: ['Enforcamento intencional', 'Estrangulamento intencional', 'Sufocação intencional'] },
{ cid: 'X69', name: 'Lesões autoprovocadas intencionalmente por afogamento e submersão', synonyms: ['Afogamento intencional', 'Submersão intencional'] },
{ cid: 'X70', name: 'Lesões autoprovocadas intencionalmente por disparo de arma de fogo', synonyms: ['Lesão intencional por arma de fogo', 'Ferimento intencional por arma de fogo'] },
{ cid: 'X71', name: 'Lesões autoprovocadas intencionalmente por objeto cortante ou perfurante', synonyms: ['Lesão intencional por objeto cortante', 'Ferimento intencional por objeto perfurante'] },
{ cid: 'X72', name: 'Lesões autoprovocadas intencionalmente por objeto contundente', synonyms: ['Lesão intencional por objeto contundente', 'Ferimento intencional por objeto contundente'] },
{ cid: 'X73', name: 'Lesões autoprovocadas intencionalmente por salto de lugar elevado', synonyms: ['Lesão intencional por salto de lugar elevado', 'Ferimento intencional por queda de altura'] },
{ cid: 'X74', name: 'Lesões autoprovocadas intencionalmente por colisão de veículo a motor', synonyms: ['Lesão intencional por colisão de veículo', 'Ferimento intencional por acidente de veículo'] },
{ cid: 'X75', name: 'Lesões autoprovocadas intencionalmente por meios não especificados', synonyms: ['Lesão intencional por meios não especificados', 'Ferimento intencional não especificado'] },
{ cid: 'X76', name: 'Autoenvenenamento intencional por e exposição a pesticidas agrícolas', synonyms: ['Autoenvenenamento por pesticidas agrícolas', 'Intoxicação intencional por pesticidas agrícolas'] },
{ cid: 'X77', name: 'Autoenvenenamento intencional por e exposição a substâncias não especificadas', synonyms: ['Autoenvenenamento por substâncias não especificadas', 'Intoxicação intencional por substâncias não especificadas'] },
{ cid: 'X78', name: 'Lesões autoprovocadas intencionalmente por exposição a calor ou substâncias quentes', synonyms: ['Lesão intencional por calor', 'Lesão intencional por substâncias quentes'] },
{ cid: 'X79', name: 'Lesões autoprovocadas intencionalmente por exposição a eletricidade', synonyms: ['Lesão intencional por eletricidade', 'Ferimento intencional por eletricidade'] },
{ cid: 'X80', name: 'Lesões autoprovocadas intencionalmente por exposição a radiação', synonyms: ['Lesão intencional por radiação', 'Ferimento intencional por radiação'] },
{ cid: 'X81', name: 'Lesões autoprovocadas intencionalmente por exposição a ruídos e vibrações', synonyms: ['Lesão intencional por ruídos', 'Ferimento intencional por vibrações'] },
{ cid: 'X82', name: 'Lesões autoprovocadas intencionalmente por exposição a explosivos', synonyms: ['Lesão intencional por explosivos', 'Ferimento intencional por explosão'] },
{ cid: 'X83', name: 'Lesões autoprovocadas intencionalmente por outros métodos especificados', synonyms: ['Lesão intencional por outros métodos', 'Ferimento intencional especificado'] },
{ cid: 'X84', name: 'Lesões autoprovocadas intencionalmente por métodos não especificados', synonyms: ['Lesão intencional não especificada', 'Ferimento intencional não especificado'] },

// ADICIONE MAIS CODIGOS CID ABAIXO...Sintomas e sinais relativos ao aparelho circulatório e respiratório (R00 - R09)

{
    cid: 'R00', name: 'Anormalidades do batimento cardíaco', 
    synonyms: ['Batimento cardíaco irregular', 'Palpitações']
  },
  {
    cid: 'R00.0', name: 'Taquicardia não especificada', 
    synonyms: ['Aumento da frequência cardíaca', 'Batimento cardíaco acelerado']
  },
  {
    cid: 'R00.1', name: 'Bradicardia não especificada', 
    synonyms: ['Diminuição da frequência cardíaca', 'Batimento cardíaco lento']
  },
  {
    cid: 'R00.2', name: 'Palpitações', 
    synonyms: ['Sensação de batimento cardíaco acelerado', 'Coração acelerado']
  },
  {
    cid: 'R01', name: 'Sopros cardíacos e outros sons cardíacos', 
    synonyms: ['Sopro no coração', 'Ruídos cardíacos anormais']
  },
  {
    cid: 'R01.0', name: 'Sopro sistólico', 
    synonyms: ['Ruído cardíaco durante a sístole', 'Sopro durante a contração do coração']
  },
  {
    cid: 'R01.1', name: 'Sopro diastólico', 
    synonyms: ['Ruído cardíaco durante a diástole', 'Sopro durante o relaxamento do coração']
  },
  {
    cid: 'R01.2', name: 'Sopro cardíaco contínuo', 
    synonyms: ['Sopro cardíaco persistente', 'Ruído cardíaco contínuo']
  },
  {
    cid: 'R01.3', name: 'Outros sons cardíacos e não especificados', 
    synonyms: ['Ruídos cardíacos anormais', 'Sons cardíacos não específicos']
  },
  {
    cid: 'R02', name: 'Gangrena, não classificada em outra parte', 
    synonyms: ['Morte do tecido', 'Necrose de tecidos']
  },
  {
    cid: 'R03', name: 'Pressão arterial anormal sem diagnóstico de hipertensão', 
    synonyms: ['Pressão alta sem hipertensão', 'Pressão baixa']
  },
  {
    cid: 'R03.0', name: 'Pressão arterial elevada, sem diagnóstico de hipertensão', 
    synonyms: ['Pressão alta não diagnosticada', 'Hipertensão não confirmada']
  },
  {
    cid: 'R03.1', name: 'Pressão arterial baixa', 
    synonyms: ['Hipotensão', 'Pressão arterial reduzida']
  },
  {
    cid: 'R04', name: 'Hemorragia das vias respiratórias', 
    synonyms: ['Sangramento das vias aéreas', 'Hemorragia respiratória']
  },
  {
    cid: 'R04.0', name: 'Epistaxe', 
    synonyms: ['Sangramento nasal', 'Hemorragia nasal']
  },
  {
    cid: 'R04.1', name: 'Hemoptise', 
    synonyms: ['Expectoração com sangue', 'Tosse com sangue']
  },
  {
    cid: 'R04.2', name: 'Hemorragia da garganta', 
    synonyms: ['Sangramento da garganta', 'Hemorragia orofaríngea']
  },
  {
    cid: 'R04.8', name: 'Outras hemorragias das vias respiratórias', 
    synonyms: ['Sangramento respiratório', 'Hemorragia pulmonar']
  },
  {
    cid: 'R05', name: 'Tosse', 
    synonyms: ['Ato de tossir', 'Reflexo de tosse']
  },
  {
    cid: 'R06', name: 'Anormalidades da respiração', 
    synonyms: ['Problemas respiratórios', 'Respiração anormal']
  },
  {
    cid: 'R06.0', name: 'Dispneia', 
    synonyms: ['Dificuldade para respirar', 'Falta de ar']
  },
  {
    cid: 'R06.1', name: 'Respiração acelerada', 
    synonyms: ['Taquipneia', 'Respiração rápida']
  },
  {
    cid: 'R06.2', name: 'Respiração superficial', 
    synonyms: ['Hipopneia', 'Respiração curta']
  },
  {
    cid: 'R06.3', name: 'Respiração ruidosa', 
    synonyms: ['Estridor', 'Sibilo']
  },
  {
    cid: 'R06.4', name: 'Hiperventilação', 
    synonyms: ['Respiração excessiva', 'Aumento da ventilação']
  },
  {
    cid: 'R06.5', name: 'Respiração boca a boca', 
    synonyms: ['Respiração assistida', 'Ventilação boca a boca']
  },
  {
    cid: 'R06.6', name: 'Respiração de Cheyne-Stokes', 
    synonyms: ['Respiração periódica', 'Padrão respiratório irregular']
  },
  {
    cid: 'R06.7', name: 'Respiração de Kussmaul', 
    synonyms: ['Respiração profunda e rápida', 'Acidose respiratória']
  },
  {
    cid: 'R06.8', name: 'Outras anormalidades da respiração', 
    synonyms: ['Respiração alterada', 'Respiração irregular']
  },
  {
    cid: 'R06.9', name: 'Respiração anormal, não especificada', 
    synonyms: ['Problema respiratório não especificado', 'Respiração anormal não especificada']
  },
  {
    cid: 'R07', name: 'Dor de garganta e dor torácica', 
    synonyms: ['Dor na garganta', 'Dor no peito']
  },
  {
    cid: 'R07.0', name: 'Dor na garganta', 
    synonyms: ['Faringodinia', 'Dor faríngea']
  },
  {
    cid: 'R07.1', name: 'Dor no peito com respiração', 
    synonyms: ['Dor torácica pleurítica', 'Dor ao respirar']
  },
  {
    cid: 'R07.2', name: 'Dor precordial', 
    synonyms: ['Dor na região do coração', 'Dor no peito central']
  },
  {
    cid: 'R07.3', name: 'Outras dores torácicas', 
    synonyms: ['Dor torácica', 'Dor no peito não especificada']
  },
  {
    cid: 'R08', name: 'Outros sintomas e sinais relativos ao aparelho circulatório e respiratório', 
    synonyms: ['Sinais circulatórios', 'Sinais respiratórios']
  },
  {
    cid: 'R09', name: 'Outros sintomas e sinais relativos ao aparelho circulatório e respiratório, não especificados', 
    synonyms: ['Sintomas circulatórios', 'Sintomas respiratórios']
  },
  {
    cid: 'R09.0', name: 'Asfixia', 
    synonyms: ['Falta de oxigênio', 'Sufocamento']
  },
  {
    cid: 'R09.1', name: 'Pletora', 
    synonyms: ['Excesso de sangue', 'Pele vermelha']
  },
  {
    cid: 'R09.2', name: 'Parada respiratória', 
    synonyms: ['Apneia', 'Interrupção da respiração']
  },
  {
    cid: 'R09.3', name: 'Sangue na escarro', 
    synonyms: ['Hemoptise', 'Escarro sanguinolento']
  },
  {
    cid: 'R09.8', name: 'Outros sintomas e sinais relativos ao aparelho circulatório e respiratório, especificados', 
    synonyms: ['Sinais respiratórios específicos', 'Sinais circulatórios específicos']
  },

// ADICIONE MAIS CODIGOS CID ABAIXO...Sintomas e sinais relativos ao aparelho digestivo e ao abdome (R10 - R19)
{
    cid: 'R10', name: 'Dor abdominal e pélvica',
    synonyms: ['Dor no abdome', 'Dor pélvica']
  },
  {
    cid: 'R10.0', name: 'Dor abdominal superior',
    synonyms: ['Dor na parte superior do abdome', 'Dor epigástrica']
  },
  {
    cid: 'R10.1', name: 'Dor abdominal localizada no quadrante inferior',
    synonyms: ['Dor no quadrante inferior do abdome', 'Dor pélvica inferior']
  },
  {
    cid: 'R10.2', name: 'Dor abdominal generalizada e difusa',
    synonyms: ['Dor difusa no abdome', 'Dor abdominal generalizada']
  },
  {
    cid: 'R10.3', name: 'Dor abdominal localizada no quadrante superior',
    synonyms: ['Dor no quadrante superior do abdome', 'Dor epigástrica superior']
  },
  {
    cid: 'R10.4', name: 'Outras dores abdominais e pélvicas',
    synonyms: ['Dor pélvica não especificada', 'Dor abdominal não especificada']
  },
  {
    cid: 'R10.8', name: 'Outras dores abdominais especificadas',
    synonyms: ['Dor abdominal específica', 'Dor pélvica específica']
  },
  {
    cid: 'R10.9', name: 'Dor abdominal e pélvica, não especificada',
    synonyms: ['Dor abdominal não especificada', 'Dor pélvica não especificada']
  },
  {
    cid: 'R11', name: 'Náusea e vômito',
    synonyms: ['Sensação de enjoo', 'Vômito']
  },
  {
    cid: 'R11.0', name: 'Náusea',
    synonyms: ['Sensação de enjoo', 'Desconforto gástrico']
  },
  {
    cid: 'R11.1', name: 'Vômito',
    synonyms: ['Expulsão de conteúdo gástrico', 'Emese']
  },
  {
    cid: 'R11.2', name: 'Vômito em jato',
    synonyms: ['Vômito explosivo', 'Emese em jato']
  },
  {
    cid: 'R11.8', name: 'Outros tipos de vômitos',
    synonyms: ['Vômitos variados', 'Emese não especificada']
  },
  {
    cid: 'R11.9', name: 'Náusea e vômito, não especificados',
    synonyms: ['Enjoo e vômito não especificados', 'Desconforto gástrico não especificado']
  },
  {
    cid: 'R12', name: 'Pirose',
    synonyms: ['Azia', 'Queimação no estômago']
  },
  {
    cid: 'R13', name: 'Disfagia',
    synonyms: ['Dificuldade para engolir', 'Deglutição dolorosa']
  },
  {
    cid: 'R14', name: 'Flatulência e afecções relacionadas',
    synonyms: ['Gases', 'Distensão abdominal']
  },
  {
    cid: 'R14.0', name: 'Flatulência',
    synonyms: ['Gases intestinais', 'Meteorismo']
  },
  {
    cid: 'R14.1', name: 'Distensão abdominal',
    synonyms: ['Inchaço abdominal', 'Estômago distendido']
  },
  {
    cid: 'R14.2', name: 'Eructação',
    synonyms: ['Arroto', 'Expulsão de ar do estômago']
  },
  {
    cid: 'R14.3', name: 'Distensão abdominal com dor',
    synonyms: ['Gases com dor', 'Inchaço abdominal doloroso']
  },
  {
    cid: 'R14.8', name: 'Outras formas de flatulência',
    synonyms: ['Gases variados', 'Flatulência não especificada']
  },
  {
    cid: 'R15', name: 'Incontinência fecal',
    synonyms: ['Perda do controle fecal', 'Evacuação involuntária']
  },
  {
    cid: 'R16', name: 'Hepatomegalia e esplenomegalia, não classificadas em outra parte',
    synonyms: ['Aumento do fígado', 'Aumento do baço']
  },
  {
    cid: 'R16.0', name: 'Hepatomegalia, não classificada em outra parte',
    synonyms: ['Aumento do fígado', 'Fígado grande']
  },
  {
    cid: 'R16.1', name: 'Esplenomegalia, não classificada em outra parte',
    synonyms: ['Aumento do baço', 'Baço grande']
  },
  {
    cid: 'R16.2', name: 'Hepatoesplenomegalia, não classificada em outra parte',
    synonyms: ['Aumento do fígado e do baço', 'Fígado e baço grandes']
  },
  {
    cid: 'R17', name: 'Icterícia, não classificada em outra parte',
    synonyms: ['Amarelamento da pele', 'Icterícia não especificada']
  },
  {
    cid: 'R18', name: 'Ascite',
    synonyms: ['Acúmulo de líquido na cavidade abdominal', 'Barriga d’água']
  },
  {
    cid: 'R19', name: 'Outros sintomas e sinais relativos ao aparelho digestivo e ao abdome',
    synonyms: ['Sinais abdominais', 'Sintomas digestivos não especificados']
  },
  {
    cid: 'R19.0', name: 'Massa abdominal e tumoração abdominal',
    synonyms: ['Inchaço abdominal', 'Tumoração abdominal']
  },
  {
    cid: 'R19.1', name: 'Sensibilidade abdominal',
    synonyms: ['Abdome doloroso', 'Dor ao toque no abdome']
  },
  {
    cid: 'R19.2', name: 'Defesa abdominal',
    synonyms: ['Tensão abdominal', 'Rigidez muscular abdominal']
  },
  {
    cid: 'R19.3', name: 'Outros sintomas abdominais não especificados',
    synonyms: ['Sintomas abdominais não especificados', 'Desconforto abdominal']
  },
//  adicione mais codigo abaixo...Sintomas e sinais relativos à pele e ao tecido subcutâneo (R20 - R23)

{
    cid: 'R20',
    name: 'Distúrbios da sensibilidade da pele',
    synonyms: ['Anestesia da pele', 'Hiperalgesia', 'Hiperestesia']
  },
  {
    cid: 'R20.0',
    name: 'Anestesia da pele',
    synonyms: ['Falta de sensibilidade', 'Ausência de dor']
  },
  {
    cid: 'R20.1',
    name: 'Hipoestesia',
    synonyms: ['Diminuição da sensibilidade da pele', 'Redução da sensação']
  },
  {
    cid: 'R20.2',
    name: 'Parestesia da pele',
    synonyms: ['Formigamento', 'Sensação de picadas']
  },
  {
    cid: 'R20.3',
    name: 'Hiperalgesia',
    synonyms: ['Aumento da sensibilidade à dor', 'Resposta exagerada à dor']
  },
  {
    cid: 'R20.8',
    name: 'Outros distúrbios da sensibilidade da pele',
    synonyms: ['Anomalias da sensação cutânea', 'Sensação anormal da pele']
  },
  {
    cid: 'R20.9',
    name: 'Distúrbio não especificado da sensibilidade da pele',
    synonyms: ['Sensibilidade da pele não especificada', 'Transtorno sensorial da pele']
  },
  {
    cid: 'R21',
    name: 'Erupção cutânea e outras erupções da pele',
    synonyms: ['Exantema', 'Dermatite não especificada']
  },
  {
    cid: 'R22',
    name: 'Edema localizado',
    synonyms: ['Inchaço local', 'Acúmulo de líquido em uma área específica']
  },
  {
    cid: 'R22.0',
    name: 'Edema localizado na cabeça',
    synonyms: ['Inchaço na cabeça', 'Edema cefálico']
  },
  {
    cid: 'R22.1',
    name: 'Edema localizado no pescoço',
    synonyms: ['Inchaço no pescoço', 'Edema cervical']
  },
  {
    cid: 'R22.2',
    name: 'Edema localizado no tronco',
    synonyms: ['Inchaço no tronco', 'Edema torácico']
  },
  {
    cid: 'R22.3',
    name: 'Edema localizado na extremidade superior',
    synonyms: ['Inchaço no braço', 'Edema braquial']
  },
  {
    cid: 'R22.4',
    name: 'Edema localizado na extremidade inferior',
    synonyms: ['Inchaço na perna', 'Edema crural']
  },
  {
    cid: 'R23',
    name: 'Outras alterações cutâneas',
    synonyms: ['Descoloração da pele', 'Textura anormal da pele']
  },
  {
    cid: 'R23.0',
    name: 'Cianose da pele',
    synonyms: ['Pele azulada', 'Desoxigenação da pele']
  },
  {
    cid: 'R23.1',
    name: 'Palidez da pele',
    synonyms: ['Pele pálida', 'Cor branca da pele']
  },
  {
    cid: 'R23.2',
    name: 'Rubor da pele',
    synonyms: ['Vermelhidão da pele', 'Eritema']
  },
  {
    cid: 'R23.3',
    name: 'Pele marmoreada',
    synonyms: ['Pele reticulada', 'Marbling cutâneo']
  },
  {
    cid: 'R23.8',
    name: 'Outras alterações especificadas da pele',
    synonyms: ['Mudanças cutâneas especificadas', 'Alterações dermatológicas específicas']
  },

  //adicione mais codigos cid abaixo...Doenças cerebrovasculares (I60 - I69)
  {
    cid: 'I60',
    name: 'Hemorragia subaracnoide',
    synonyms: ['Hemorragia no espaço subaracnoide', 'Sangramento subaracnoide']
  },
  {
    cid: 'I60.0',
    name: 'Hemorragia subaracnoide de aneurisma da carótida interna',
    synonyms: ['Hemorragia subaracnoide de aneurisma carotídeo', 'Sangramento de aneurisma da carótida']
  },
  {
    cid: 'I60.1',
    name: 'Hemorragia subaracnoide de aneurisma da artéria cerebral média',
    synonyms: ['Sangramento de aneurisma da artéria cerebral média', 'Hemorragia subaracnoide de aneurisma cerebral']
  },
  {
    cid: 'I60.2',
    name: 'Hemorragia subaracnoide de aneurisma da artéria comunicante anterior',
    synonyms: ['Sangramento de aneurisma da artéria comunicante anterior', 'Hemorragia subaracnoide de aneurisma comunicante']
  },
  {
    cid: 'I60.3',
    name: 'Hemorragia subaracnoide de aneurisma da artéria comunicante posterior',
    synonyms: ['Sangramento de aneurisma da artéria comunicante posterior', 'Hemorragia subaracnoide de aneurisma posterior']
  },
  {
    cid: 'I60.4',
    name: 'Hemorragia subaracnoide de aneurisma da artéria basilar',
    synonyms: ['Sangramento de aneurisma da artéria basilar', 'Hemorragia subaracnoide basilar']
  },
  {
    cid: 'I60.5',
    name: 'Hemorragia subaracnoide de aneurisma da artéria vertebral',
    synonyms: ['Sangramento de aneurisma da artéria vertebral', 'Hemorragia subaracnoide vertebral']
  },
  {
    cid: 'I60.6',
    name: 'Hemorragia subaracnoide de outras artérias intracranianas',
    synonyms: ['Sangramento de aneurisma de outras artérias intracranianas', 'Hemorragia subaracnoide de artérias intracranianas']
  },
  {
    cid: 'I60.7',
    name: 'Hemorragia subaracnoide de artéria intracraniana não especificada',
    synonyms: ['Sangramento de artéria intracraniana não especificada', 'Hemorragia subaracnoide não especificada']
  },
  {
    cid: 'I61',
    name: 'Hemorragia intracerebral',
    synonyms: ['Sangramento intracerebral', 'Hemorragia dentro do cérebro']
  },
  {
    cid: 'I61.0',
    name: 'Hemorragia intracerebral em hemisfério subcortical',
    synonyms: ['Sangramento subcortical', 'Hemorragia no hemisfério subcortical']
  },
  {
    cid: 'I61.1',
    name: 'Hemorragia intracerebral em hemisfério cortical',
    synonyms: ['Sangramento cortical', 'Hemorragia no hemisfério cortical']
  },
  {
    cid: 'I61.2',
    name: 'Hemorragia intracerebral em hemisfério, não especificada',
    synonyms: ['Sangramento hemisférico não especificado', 'Hemorragia intracerebral não especificada']
  },
  {
    cid: 'I61.3',
    name: 'Hemorragia intracerebral no tronco encefálico',
    synonyms: ['Sangramento no tronco encefálico', 'Hemorragia cerebral no tronco encefálico']
  },
  {
    cid: 'I61.4',
    name: 'Hemorragia intracerebral no cerebelo',
    synonyms: ['Sangramento no cerebelo', 'Hemorragia cerebral no cerebelo']
  },
  {
    cid: 'I61.5',
    name: 'Hemorragia intracerebral intraventricular',
    synonyms: ['Sangramento intraventricular', 'Hemorragia cerebral intraventricular']
  },
  {
    cid: 'I61.6',
    name: 'Hemorragia intracerebral em outras localizações',
    synonyms: ['Sangramento intracerebral em outras localizações', 'Hemorragia cerebral em outras áreas']
  },
  {
    cid: 'I61.9',
    name: 'Hemorragia intracerebral não especificada',
    synonyms: ['Sangramento intracerebral não especificado', 'Hemorragia cerebral não especificada']
  },
  {
    cid: 'I62',
    name: 'Outras hemorragias intracranianas não traumáticas',
    synonyms: ['Hemorragias intracranianas não traumáticas', 'Sangramentos intracranianos não traumáticos']
  },
  {
    cid: 'I62.0',
    name: 'Hemorragia subdural não traumática',
    synonyms: ['Sangramento subdural não traumático', 'Hemorragia subdural sem trauma']
  },
  {
    cid: 'I62.1',
    name: 'Hemorragia extradural não traumática',
    synonyms: ['Sangramento extradural não traumático', 'Hemorragia extradural sem trauma']
  },
  {
    cid: 'I62.9',
    name: 'Hemorragia intracraniana não traumática, não especificada',
    synonyms: ['Sangramento intracraniano não especificado', 'Hemorragia intracraniana sem trauma não especificada']
  },
  {
    cid: 'I63',
    name: 'Infarto cerebral',
    synonyms: ['Derrame cerebral', 'Acidente vascular cerebral isquêmico']
  },
  {
    cid: 'I63.0',
    name: 'Infarto cerebral por trombose de artérias precerebrais',
    synonyms: ['AVC isquêmico por trombose de artérias precerebrais', 'Infarto por trombose precerebral']
  },
  {
    cid: 'I63.1',
    name: 'Infarto cerebral por embolia de artérias precerebrais',
    synonyms: ['AVC isquêmico por embolia de artérias precerebrais', 'Infarto por embolia precerebral']
  },
  {
    cid: 'I63.2',
    name: 'Infarto cerebral por aterosclerose de artérias precerebrais',
    synonyms: ['AVC isquêmico por aterosclerose de artérias precerebrais', 'Infarto por aterosclerose precerebral']
  },
  {
    cid: 'I63.3',
    name: 'Infarto cerebral devido a embolia de artérias cerebrais',
    synonyms: ['AVC isquêmico por embolia cerebral', 'Infarto cerebral embólico']
  },
  {
    cid: 'I63.4',
    name: 'Infarto cerebral devido a aterosclerose de artérias cerebrais',
    synonyms: ['AVC isquêmico por aterosclerose cerebral', 'Infarto cerebral por aterosclerose']
  },
  {
    cid: 'I63.5',
    name: 'Infarto cerebral devido a oclusão ou estenose de artérias cerebrais',
    synonyms: ['AVC isquêmico por oclusão de artéria cerebral', 'Infarto cerebral por estenose']
  },
  {
    cid: 'I63.6',
    name: 'Infarto cerebral sem especificação adicional',
    synonyms: ['AVC isquêmico sem especificação', 'Infarto cerebral não especificado']
  },
  {
    cid: 'I63.8',
    name: 'Outros infartos cerebrais especificados',
    synonyms: ['AVC isquêmico especificado', 'Infarto cerebral especificado']
  },
  {
    cid: 'I63.9',
    name: 'Infarto cerebral, não especificado',
    synonyms: ['AVC isquêmico não especificado', 'Infarto cerebral sem detalhes adicionais']
  },
  {
    cid: 'I64',
    name: 'Acidente vascular cerebral não especificado como hemorrágico ou isquêmico',
    synonyms: ['AVC não especificado', 'Derrame cerebral não especificado']
  },
  {
    cid: 'I65',
    name: 'Oclusão e estenose de artérias precerebrais, não resultando em infarto cerebral',
    synonyms: ['Oclusão de artérias precerebrais sem infarto', 'Estenose de artérias precerebrais sem infarto']
  },
  {
    cid: 'I65.0',
    name: 'Oclusão e estenose da artéria carótida',
    synonyms: ['Oclusão da artéria carótida', 'Estenose da artéria carótida']
  },
  {
    cid: 'I65.1',
    name: 'Oclusão e estenose da artéria vertebral',
    synonyms: ['Oclusão da artéria vertebral', 'Estenose da artéria vertebral']
  },
  {
    cid: 'I65.2',
    name: 'Oclusão e estenose da artéria basilar',
    synonyms: ['Oclusão da artéria basilar', 'Estenose da artéria basilar']
  },
  {
    cid: 'I65.3',
    name: 'Oclusão e estenose da artéria precerebral múltipla e bilateral',
    synonyms: ['Oclusão de artérias precerebrais múltiplas', 'Estenose de artérias precerebrais múltiplas']
  },
  {
    cid: 'I65.8',
    name: 'Oclusão e estenose de outras artérias precerebrais',
    synonyms: ['Oclusão de outras artérias precerebrais', 'Estenose de outras artérias precerebrais']
  },
  {
    cid: 'I65.9',
    name: 'Oclusão e estenose de artéria precerebral, não especificada',
    synonyms: ['Oclusão de artéria precerebral não especificada', 'Estenose de artéria precerebral não especificada']
  },
  {
    cid: 'I66',
    name: 'Oclusão e estenose de artérias cerebrais, não resultando em infarto cerebral',
    synonyms: ['Oclusão de artérias cerebrais sem infarto', 'Estenose de artérias cerebrais sem infarto']
  },
  {
    cid: 'I66.0',
    name: 'Oclusão e estenose da artéria cerebral média',
    synonyms: ['Oclusão da artéria cerebral média', 'Estenose da artéria cerebral média']
  },
  {
    cid: 'I66.1',
    name: 'Oclusão e estenose da artéria cerebral anterior',
    synonyms: ['Oclusão da artéria cerebral anterior', 'Estenose da artéria cerebral anterior']
  },
  {
    cid: 'I66.2',
    name: 'Oclusão e estenose da artéria cerebral posterior',
    synonyms: ['Oclusão da artéria cerebral posterior', 'Estenose da artéria cerebral posterior']
  },
  {
    cid: 'I66.3',
    name: 'Oclusão e estenose da artéria comunicante anterior',
    synonyms: ['Oclusão da artéria comunicante anterior', 'Estenose da artéria comunicante anterior']
  },
  {
    cid: 'I66.4',
    name: 'Oclusão e estenose da artéria comunicante posterior',
    synonyms: ['Oclusão da artéria comunicante posterior', 'Estenose da artéria comunicante posterior']
  },
  {
    cid: 'I66.8',
    name: 'Oclusão e estenose de outras artérias cerebrais especificadas',
    synonyms: ['Oclusão de outras artérias cerebrais especificadas', 'Estenose de outras artérias cerebrais especificadas']
  },
  {
    cid: 'I66.9',
    name: 'Oclusão e estenose de artéria cerebral não especificada',
    synonyms: ['Oclusão de artéria cerebral não especificada', 'Estenose de artéria cerebral não especificada']
  },
  {
    cid: 'I67',
    name: 'Outras doenças cerebrovasculares',
    synonyms: ['Doenças cerebrovasculares diversas', 'Outras condições cerebrovasculares']
  },
  {
    cid: 'I67.0',
    name: 'Dissecção de artéria cerebral',
    synonyms: ['Dissecção arterial cerebral', 'Laceração de artéria cerebral']
  },
  {
    cid: 'I67.1',
    name: 'Aneurisma de artéria cerebral não rompido',
    synonyms: ['Aneurisma cerebral não rompido', 'Aneurisma arterial cerebral não rompido']
  },
  {
    cid: 'I67.2',
    name: 'Aterosclerose de artéria cerebral',
    synonyms: ['Aterosclerose cerebral', 'Aterosclerose de artérias do cérebro']
  },
  {
    cid: 'I67.3',
    name: 'Leucoencefalopatia vascular',
    synonyms: ['Leucoencefalopatia isquêmica', 'Doença cerebral de pequenos vasos']
  },
  {
    cid: 'I67.4',
    name: 'Encefalopatia hipertensiva',
    synonyms: ['Encefalopatia por hipertensão', 'Doença cerebral por hipertensão']
  },
  {
    cid: 'I67.5',
    name: 'Outros tipos de oclusão e estenose de artérias cerebrais',
    synonyms: ['Outros tipos de oclusão de artérias cerebrais', 'Outros tipos de estenose de artérias cerebrais']
  },
  {
    cid: 'I67.6',
    name: 'Síndrome de moyamoya',
    synonyms: ['Doença moyamoya', 'Doença cerebrovascular moyamoya']
  },
  {
    cid: 'I67.7',
    name: 'Arterite de artérias cerebrais',
    synonyms: ['Arterite cerebral', 'Inflamação de artérias cerebrais']
  },
  {
    cid: 'I67.8',
    name: 'Outras doenças cerebrovasculares especificadas',
    synonyms: ['Doenças cerebrovasculares especificadas', 'Condições cerebrovasculares diversas']
  },
  {
    cid: 'I67.9',
    name: 'Doença cerebrovascular, não especificada',
    synonyms: ['Doença cerebrovascular não especificada', 'Condição cerebrovascular sem detalhes adicionais']
  },
  {
    cid: 'I68',
    name: 'Doenças cerebrovasculares em doenças classificadas em outra parte',
    synonyms: ['Doenças cerebrovasculares secundárias', 'Doenças cerebrovasculares em outras condições']
  },
  {
    cid: 'I68.0',
    name: 'Doença cerebrovascular em sífilis',
    synonyms: ['Doença cerebrovascular sifilítica', 'AVC sifilítico']
  },
  {
    cid: 'I68.1',
    name: 'Doença cerebrovascular em lúpus eritematoso sistêmico',
    synonyms: ['Doença cerebrovascular em lúpus', 'AVC por lúpus']
  },
  {
    cid: 'I68.2',
    name: 'Doença cerebrovascular em poliarterite nodosa',
    synonyms: ['Doença cerebrovascular em poliarterite', 'AVC por poliarterite nodosa']
  },
  {
    cid: 'I68.8',
    name: 'Doença cerebrovascular em outras doenças especificadas',
    synonyms: ['Doença cerebrovascular em outras condições', 'AVC em outras doenças']
  },
  {
    cid: 'I69.0',
    name: 'Sequelas de hemorragia subaracnoide',
    synonyms: ['Sequelas de AVC hemorrágico subaracnoide', 'Consequências de hemorragia subaracnoide']
  },
  {
    cid: 'I69.1',
    name: 'Sequelas de hemorragia intracerebral',
    synonyms: ['Sequelas de AVC hemorrágico intracerebral', 'Consequências de hemorragia intracerebral']
  },
  {
    cid: 'I69.2',
    name: 'Sequelas de hemorragia não especificada',
    synonyms: ['Sequelas de AVC hemorrágico não especificado', 'Consequências de hemorragia não especificada']
  },
  {
    cid: 'I69.3',
    name: 'Sequelas de infarto cerebral',
    synonyms: ['Sequelas de AVC isquêmico', 'Consequências de infarto cerebral']
  },
  {
    cid: 'I69.4',
    name: 'Sequelas de acidente vascular cerebral não especificado',
    synonyms: ['Sequelas de AVC não especificado', 'Consequências de AVC não especificado']
  },
  {
    cid: 'I69.8',
    name: 'Sequelas de outras doenças cerebrovasculares especificadas',
    synonyms: ['Sequelas de doenças cerebrovasculares especificadas', 'Consequências de doenças cerebrovasculares diversas']
  },
  {
    cid: 'I69.9',
    name: 'Sequelas de doença cerebrovascular, não especificada',
    synonyms: ['Sequelas de doença cerebrovascular não especificada', 'Consequências de AVC sem detalhes adicionais']
  },
  //adicione mais codigos abaixo...Doenças do aparelho circulatório (I00 - I99)
  {
    cid: 'I70.0',
    name: 'Aterosclerose das artérias da extremidade inferior',
    synonyms: ['Aterosclerose periférica', 'Doença arterial periférica']
  },
  {
    cid: 'I71.0',
    name: 'Aneurisma dissecante da aorta',
    synonyms: ['Dissecção aórtica', 'Aneurisma dissecante']
  },
  {
    cid: 'I72.0',
    name: 'Aneurisma e dissecção de artérias renais',
    synonyms: ['Aneurisma renal', 'Dissecção de artéria renal']
  },
  {
    cid: 'I73.0',
    name: 'Síndrome de Raynaud',
    synonyms: ['Fenômeno de Raynaud', 'Doença de Raynaud']
  },
  {
    cid: 'I74.0',
    name: 'Embolia e trombose da aorta',
    synonyms: ['Embolia aórtica', 'Trombose aórtica']
  },
  {
    cid: 'I77.0',
    name: 'Outros transtornos da artéria',
    synonyms: ['Estenose arterial', 'Aneurisma sem dissecção']
  },
  {
    cid: 'I78.0',
    name: 'Doenças dos vasos capilares',
    synonyms: ['Capilarite', 'Telangiectasia hemorrágica hereditária']
  },
  {
    cid: 'I80.0',
    name: 'Flebite e tromboflebite dos vasos superficiais das extremidades inferiores',
    synonyms: ['Tromboflebite superficial', 'Inflamação venosa superficial']
  },
  {
    cid: 'I81.0',
    name: 'Trombose da veia porta',
    synonyms: ['Trombose portal', 'Obstrução da veia porta']
  },
  {
    cid: 'I82.0',
    name: 'Embolia e trombose de outras veias especificadas',
    synonyms: ['Embolia venosa', 'Trombose de veias específicas']
  },
  {
    cid: 'I83.0',
    name: 'Varizes das extremidades inferiores com ulceração',
    synonyms: ['Varizes ulceradas', 'Varizes com úlcera']
  },
  {
    cid: 'I84.0',
    name: 'Hemorroidas internas com ulceração',
    synonyms: ['Hemorroidas ulceradas', 'Hemorroidas internas ulceradas']
  },
  {
    cid: 'I85.0',
    name: 'Varizes esofágicas com hemorragia',
    synonyms: ['Varizes esofágicas hemorrágicas', 'Hemorragia por varizes esofágicas']
  },
  {
    cid: 'I86.0',
    name: 'Varizes de outros locais especificados',
    synonyms: ['Varizes pélvicas', 'Varizes vulvares']
  },
  {
    cid: 'I87.0',
    name: 'Insuficiência venosa crônica (periférica)',
    synonyms: ['Insuficiência venosa periférica', 'Doença venosa crônica']
  },
  {
    cid: 'I88.0',
    name: 'Linfadenite inespecífica',
    synonyms: ['Inflamação dos linfonodos', 'Linfadenite não especificada']
  },
  {
    cid: 'I89.0',
    name: 'Outros transtornos dos vasos linfáticos',
    synonyms: ['Linfedema', 'Estenose linfática']
  },
  {
    cid: 'I95.0',
    name: 'Hipotensão ortostática',
    synonyms: ['Hipotensão postural', 'Queda de pressão ao levantar']
  },
  {
    cid: 'I96.0',
    name: 'Gangrena não classificada em outra parte',
    synonyms: ['Gangrena não especificada', 'Necrose de tecidos não especificada']
  },
  {
    cid: 'I97.0',
    name: 'Transtornos do aparelho circulatório subsequentes a procedimentos cirúrgicos',
    synonyms: ['Complicações cirúrgicas do coração', 'Transtornos circulatórios pós-cirúrgicos']
  },
  {
    cid: 'I98.0',
    name: 'Outros transtornos circulatórios em doenças classificadas em outra parte',
    synonyms: ['Transtornos circulatórios secundários', 'Complicações vasculares em outras doenças']
  },
  {
    cid: 'I99.0',
    name: 'Outros transtornos do aparelho circulatório não especificados',
    synonyms: ['Transtornos circulatórios inespecíficos', 'Doenças vasculares não especificadas']
  },
  // adicione mais codigos cid abaixo...Artropatias (M00 - M25)
  {
    cid: 'M20.4',
    name: 'Outras deformidades adquiridas dos dedos das mãos e pés',
    synonyms: ['Deformidades adquiridas dos dedos', 'Alterações nos dedos dos pés e mãos']
  },
  {
    cid: 'M21.0',
    name: 'Deformidade adquirida do pé',
    synonyms: ['Deformidade adquirida do pé', 'Alterações estruturais no pé']
  },
  {
    cid: 'M21.1',
    name: 'Deformidade adquirida dos dedos dos pés',
    synonyms: ['Deformidade adquirida nos dedos dos pés', 'Alterações nos dedos dos pés']
  },
  {
    cid: 'M21.2',
    name: 'Deformidade adquirida do joelho',
    synonyms: ['Deformidade adquirida do joelho', 'Alterações estruturais no joelho']
  },
  {
    cid: 'M21.3',
    name: 'Deformidade adquirida do quadril',
    synonyms: ['Deformidade adquirida do quadril', 'Alterações estruturais no quadril']
  },
  {
    cid: 'M21.4',
    name: 'Deformidade adquirida da pelve',
    synonyms: ['Deformidade adquirida da pelve', 'Alterações estruturais na pelve']
  },
  {
    cid: 'M21.5',
    name: 'Outras deformidades adquiridas',
    synonyms: ['Deformidades adquiridas gerais', 'Alterações estruturais não especificadas']
  },
  {
    cid: 'M22.0',
    name: 'Condrimalação da patela',
    synonyms: ['Condrimalação', 'Desgaste da cartilagem patelar']
  },
  {
    cid: 'M23.0',
    name: 'Transtornos internos do joelho',
    synonyms: ['Lesões internas do joelho', 'Desordens articulares do joelho']
  },
  {
    cid: 'M24.0',
    name: 'Distúrbios das articulações não especificados',
    synonyms: ['Distúrbios articulares inespecíficos', 'Condições articulares não classificadas']
  },
  {
    cid: 'M25.0',
    name: 'Hemartrose',
    synonyms: ['Sangramento na articulação', 'Hemorragia articular']
  },

  //adicione mais cid abaixo... doenças aparelho digestivo

  {
    cid: 'K72',
    name: 'Insuficiência hepática, não classificada em outra parte',
    synonyms: ['Falência hepática', 'Insuficiência do fígado']
  },
  {
    cid: 'K73',
    name: 'Hepatite crônica, não classificada em outra parte',
    synonyms: ['Hepatite crônica', 'Inflamação hepática prolongada']
  },
  {
    cid: 'K74',
    name: 'Fibrose e cirrose hepáticas',
    synonyms: ['Fibrose hepática', 'Cirrose do fígado']
  },
  {
    cid: 'K75',
    name: 'Outras doenças inflamatórias do fígado',
    synonyms: ['Doenças inflamatórias hepáticas', 'Inflamação do fígado']
  },
  {
    cid: 'K76',
    name: 'Outras doenças do fígado',
    synonyms: ['Outras condições do fígado', 'Distúrbios hepáticos']
  },
  {
    cid: 'K77',
    name: 'Doenças do fígado em doenças classificadas em outra parte',
    synonyms: ['Doenças hepáticas associadas', 'Condições hepáticas relacionadas']
  },
  {
    cid: 'K80',
    name: 'Colelitíase',
    synonyms: ['Pedras na vesícula', 'Cálculos biliares']
  },
  {
    cid: 'K81',
    name: 'Colecistite',
    synonyms: ['Inflamação da vesícula biliar', 'Colecistite aguda']
  },
  {
    cid: 'K82',
    name: 'Outras doenças da vesícula biliar',
    synonyms: ['Doenças da vesícula biliar', 'Distúrbios da vesícula']
  },
  {
    cid: 'K83',
    name: 'Outras doenças das vias biliares',
    synonyms: ['Doenças das vias biliares', 'Distúrbios biliares']
  },
  {
    cid: 'K85',
    name: 'Pancreatite aguda',
    synonyms: ['Inflamação aguda do pâncreas', 'Pancreatite grave']
  },
  {
    cid: 'K86',
    name: 'Outras doenças do pâncreas',
    synonyms: ['Doenças pancreáticas', 'Distúrbios do pâncreas']
  },
  {
    cid: 'K87',
    name: 'Afecções do fígado, vesícula biliar e pâncreas em doenças classificadas em outra parte',
    synonyms: ['Condições relacionadas ao fígado e pâncreas', 'Afecções hepatobiliares e pancreáticas associadas']
  },
  {
    cid: 'K90',
    name: 'Má-absorção intestinal',
    synonyms: ['Síndrome de má-absorção', 'Distúrbios de absorção intestinal']
  },
  {
    cid: 'K91',
    name: 'Afecções pós-operatórias do aparelho digestivo, não classificadas em outra parte',
    synonyms: ['Complicações pós-operatórias', 'Problemas digestivos após cirurgia']
  },
  {
    cid: 'K92',
    name: 'Outros transtornos do aparelho digestivo',
    synonyms: ['Transtornos digestivos', 'Problemas diversos no sistema digestivo']
  },
  {
    cid: 'K93',
    name: 'Doenças do aparelho digestivo em doenças classificadas em outra parte',
    synonyms: ['Distúrbios digestivos relacionados', 'Condições associadas ao sistema digestivo']
  },

  //adicione masi cid abaixo Hérnias (K40 - K46)
  
  {
    cid: 'K40.0',
    name: 'Hérnia inguinal bilateral, com obstrução, sem gangrena',
    synonyms: ['Hérnia bilateral com obstrução', 'Hérnia inguinal sem gangrena'],
  },
  {
    cid: 'K40.1',
    name: 'Hérnia inguinal bilateral, com gangrena',
    synonyms: ['Hérnia inguinal com gangrena', 'Hérnia bilateral com complicações'],
  },
  {
    cid: 'K40.2',
    name: 'Hérnia inguinal bilateral, sem obstrução ou gangrena',
    synonyms: ['Hérnia bilateral simples', 'Hérnia sem complicações'],
  },
  {
    cid: 'K40.3',
    name: 'Hérnia inguinal unilateral, com obstrução, sem gangrena',
    synonyms: ['Hérnia unilateral com obstrução', 'Hérnia inguinal com obstrução'],
  },
  {
    cid: 'K40.4',
    name: 'Hérnia inguinal unilateral, com gangrena',
    synonyms: ['Hérnia inguinal com gangrena', 'Hérnia unilateral com complicações'],
  },
  {
    cid: 'K40.9',
    name: 'Hérnia inguinal unilateral, sem obstrução ou gangrena',
    synonyms: ['Hérnia inguinal simples', 'Hérnia unilateral sem complicações'],
  },
  {
    cid: 'K41',
    name: 'Hérnia femoral',
    synonyms: ['Hérnia crural', 'Hérnia na coxa'],
  },
  {
    cid: 'K41.0',
    name: 'Hérnia femoral bilateral, com obstrução, sem gangrena',
    synonyms: ['Hérnia femoral com obstrução', 'Hérnia bilateral sem gangrena'],
  },
  {
    cid: 'K41.1',
    name: 'Hérnia femoral bilateral, com gangrena',
    synonyms: ['Hérnia femoral com gangrena', 'Hérnia bilateral com complicações'],
  },
  {
    cid: 'K41.2',
    name: 'Hérnia femoral bilateral, sem obstrução ou gangrena',
    synonyms: ['Hérnia femoral sem complicações', 'Hérnia bilateral simples'],
  },
  {
    cid: 'K41.3',
    name: 'Hérnia femoral unilateral, com obstrução, sem gangrena',
    synonyms: ['Hérnia femoral unilateral com obstrução', 'Hérnia sem gangrena'],
  },
  {
    cid: 'K41.4',
    name: 'Hérnia femoral unilateral, com gangrena',
    synonyms: ['Hérnia femoral com gangrena', 'Hérnia unilateral com complicações'],
  },
  {
    cid: 'K41.9',
    name: 'Hérnia femoral unilateral, sem obstrução ou gangrena',
    synonyms: ['Hérnia femoral simples', 'Hérnia sem complicações'],
  },
  {
    cid: 'K42',
    name: 'Hérnia umbilical',
    synonyms: ['Hérnia no umbigo', 'Protuberância umbilical'],
  },
  {
    cid: 'K42.0',
    name: 'Hérnia umbilical com obstrução, sem gangrena',
    synonyms: ['Hérnia umbilical obstruída', 'Hérnia sem gangrena'],
  },
  {
    cid: 'K42.1',
    name: 'Hérnia umbilical com gangrena',
    synonyms: ['Hérnia umbilical gangrenada', 'Hérnia com complicações'],
  },
  {
    cid: 'K42.9',
    name: 'Hérnia umbilical sem obstrução ou gangrena',
    synonyms: ['Hérnia umbilical simples', 'Hérnia sem complicações'],
  },
  {
    cid: 'K43',
    name: 'Hérnia ventral',
    synonyms: ['Hérnia abdominal', 'Protuberância abdominal'],
  },
  {
    cid: 'K43.0',
    name: 'Hérnia ventral com obstrução, sem gangrena',
    synonyms: ['Hérnia ventral com obstrução', 'Hérnia abdominal sem gangrena'],
  },
  {
    cid: 'K43.1',
    name: 'Hérnia ventral com gangrena',
    synonyms: ['Hérnia ventral gangrenada', 'Hérnia abdominal com complicações'],
  },
  {
    cid: 'K43.2',
    name: 'Hérnia ventral incisional com obstrução, sem gangrena',
    synonyms: ['Hérnia incisional com obstrução', 'Hérnia pós-operatória sem gangrena'],
  },
  {
    cid: 'K43.3',
    name: 'Hérnia ventral incisional com gangrena',
    synonyms: ['Hérnia incisional com gangrena', 'Hérnia pós-operatória com complicações'],
  },
  {
    cid: 'K43.9',
    name: 'Hérnia ventral sem obstrução ou gangrena',
    synonyms: ['Hérnia ventral simples', 'Hérnia abdominal sem complicações'],
  },
  {
    cid: 'K44',
    name: 'Hérnia diafragmática',
    synonyms: ['Hérnia no diafragma', 'Protuberância diafragmática'],
  },
  {
    cid: 'K44.0',
    name: 'Hérnia diafragmática com obstrução, sem gangrena',
    synonyms: ['Hérnia diafragmática obstruída', 'Hérnia no diafragma sem gangrena'],
  },
  {
    cid: 'K44.1',
    name: 'Hérnia diafragmática com gangrena',
    synonyms: ['Hérnia diafragmática gangrenada', 'Hérnia no diafragma com complicações'],
  },
  {
    cid: 'K44.9',
    name: 'Hérnia diafragmática sem obstrução ou gangrena',
    synonyms: ['Hérnia diafragmática simples', 'Hérnia sem complicações'],
  },
  {
    cid: 'K45',
    name: 'Outras hérnias da cavidade abdominal, com obstrução, sem gangrena',
    synonyms: ['Outras hérnias abdominais', 'Hérnia com obstrução sem gangrena'],
  },
  {
    cid: 'K45.8',
    name: 'Outras hérnias da cavidade abdominal, com gangrena',
    synonyms: ['Hérnia abdominal com gangrena', 'Outras hérnias com complicações'],
  },
  {
    cid: 'K46',
    name: 'Hérnia não especificada',
    synonyms: ['Hérnia de localização desconhecida', 'Hérnia não classificada'],
  },
  //adicione mais cid abaixo Doenças do apêndice (K35 - K38)

  {
    cid: 'K35',
    name: 'Apendicite aguda',
    synonyms: ['Inflamação aguda do apêndice', 'Apendicite'],
  },
  {
    cid: 'K35.0',
    name: 'Apendicite aguda com peritonite generalizada',
    synonyms: ['Apendicite com peritonite', 'Peritonite causada por apendicite'],
  },
  {
    cid: 'K35.1',
    name: 'Apendicite aguda com abcesso periapendicular',
    synonyms: ['Apendicite com abcesso', 'Abcesso ao redor do apêndice'],
  },
  {
    cid: 'K35.2',
    name: 'Apendicite aguda com peritonite localizada',
    synonyms: ['Apendicite com peritonite localizada', 'Inflamação limitada no apêndice'],
  },
  {
    cid: 'K35.3',
    name: 'Apendicite aguda com perfuração e peritonite generalizada',
    synonyms: ['Apendicite perfurada com peritonite', 'Perfuração do apêndice com inflamação generalizada'],
  },
  {
    cid: 'K35.8',
    name: 'Outras formas de apendicite aguda',
    synonyms: ['Outras apendicites agudas', 'Apendicite aguda de tipo indefinido'],
  },
  {
    cid: 'K35.9',
    name: 'Apendicite aguda não especificada',
    synonyms: ['Apendicite não especificada', 'Apendicite aguda indeterminada'],
  },
  {
    cid: 'K36',
    name: 'Outras formas de apendicite',
    synonyms: ['Apendicite crônica', 'Apendicite recorrente'],
  },
  {
    cid: 'K37',
    name: 'Apendicite não especificada',
    synonyms: ['Apendicite sem especificação', 'Inflamação do apêndice não determinada'],
  },
  {
    cid: 'K38',
    name: 'Outras doenças do apêndice',
    synonyms: ['Doenças diversas do apêndice', 'Problemas do apêndice não relacionados à apendicite'],
  },
  {
    cid: 'K38.0',
    name: 'Hérnia do apêndice',
    synonyms: ['Hérnia apendicular', 'Prolapso do apêndice'],
  },
  {
    cid: 'K38.1',
    name: 'Fístula apendicular',
    synonyms: ['Fístula no apêndice', 'Canal anormal no apêndice'],
  },
  {
    cid: 'K38.2',
    name: 'Abscesso apendicular',
    synonyms: ['Abscesso no apêndice', 'Acúmulo de pus no apêndice'],
  },
  {
    cid: 'K38.3',
    name: 'Cálculo apendicular',
    synonyms: ['Pedra no apêndice', 'Cálculo no apêndice'],
  },
  {
    cid: 'K38.8',
    name: 'Outras doenças especificadas do apêndice',
    synonyms: ['Outras doenças do apêndice', 'Condições específicas do apêndice'],
  },
  {
    cid: 'K38.9',
    name: 'Doença do apêndice, não especificada',
    synonyms: ['Doença do apêndice sem especificação', 'Condição não determinada do apêndice'],
  },

  // adicione mais codigos abaixo Doenças do esôfago, do estômago e do duodeno (K20 - K31)
  {
    cid: 'K20',
    name: 'Esofagite',
    synonyms: ['Inflamação do esôfago', 'Esofagite não especificada'],
  },
  {
    cid: 'K20.0',
    name: 'Esofagite de refluxo',
    synonyms: ['Refluxo gastroesofágico com esofagite', 'Inflamação do esôfago causada por refluxo'],
  },
  {
    cid: 'K20.8',
    name: 'Outras esofagites',
    synonyms: ['Esofagite não especificada', 'Esofagite crônica'],
  },
  {
    cid: 'K20.9',
    name: 'Esofagite não especificada',
    synonyms: ['Esofagite sem causa determinada', 'Esofagite idiopática'],
  },
  {
    cid: 'K21',
    name: 'Doença do refluxo gastroesofágico',
    synonyms: ['Refluxo ácido', 'Refluxo gastroesofágico'],
  },
  {
    cid: 'K21.0',
    name: 'Doença do refluxo gastroesofágico com esofagite',
    synonyms: ['Refluxo com inflamação do esôfago', 'Refluxo esofágico com esofagite'],
  },
  {
    cid: 'K21.9',
    name: 'Doença do refluxo gastroesofágico sem esofagite',
    synonyms: ['Refluxo sem inflamação', 'Refluxo gastroesofágico não complicado'],
  },
  {
    cid: 'K22',
    name: 'Outras doenças do esôfago',
    synonyms: ['Doenças diversas do esôfago', 'Problemas não especificados do esôfago'],
  },
  {
    cid: 'K22.0',
    name: 'Acalasia do esôfago',
    synonyms: ['Dificuldade de deglutição', 'Transtorno de motilidade do esôfago'],
  },
  {
    cid: 'K22.1',
    name: 'Úlcera do esôfago',
    synonyms: ['Úlcera esofágica', 'Ferida no esôfago'],
  },
  {
    cid: 'K22.2',
    name: 'Ruptura espontânea do esôfago',
    synonyms: ['Perfuração do esôfago', 'Ruptura esofágica'],
  },
  {
    cid: 'K22.3',
    name: 'Estenose e estreitamento do esôfago',
    synonyms: ['Estenose esofágica', 'Estreitamento do esôfago'],
  },
  {
    cid: 'K22.4',
    name: 'Perfuração do esôfago',
    synonyms: ['Perfuração traumática do esôfago', 'Ruptura do esôfago'],
  },
  {
    cid: 'K22.5',
    name: 'Divertículo do esôfago',
    synonyms: ['Divertículo esofágico', 'Saco no esôfago'],
  },
  {
    cid: 'K22.6',
    name: 'Varizes esofágicas',
    synonyms: ['Veias varicosas no esôfago', 'Varizes no esôfago'],
  },
  {
    cid: 'K22.7',
    name: 'Síndrome de Mallory-Weiss',
    synonyms: ['Laceração esofágica', 'Ruptura esofágica devido a vômito'],
  },
  {
    cid: 'K22.8',
    name: 'Outras doenças especificadas do esôfago',
    synonyms: ['Doenças não especificadas do esôfago', 'Problemas diversos do esôfago'],
  },
  {
    cid: 'K22.9',
    name: 'Doença do esôfago, não especificada',
    synonyms: ['Doença indefinida do esôfago', 'Problema esofágico sem diagnóstico'],
  },
  {
    cid: 'K25',
    name: 'Úlcera gástrica',
    synonyms: ['Úlcera no estômago', 'Ferida no estômago'],
  },
  {
    cid: 'K25.0',
    name: 'Úlcera gástrica aguda com hemorragia',
    synonyms: ['Úlcera estomacal com sangramento', 'Hemorragia causada por úlcera gástrica'],
  },
  {
    cid: 'K25.1',
    name: 'Úlcera gástrica aguda com perfuração',
    synonyms: ['Úlcera gástrica com perfuração', 'Perfuração estomacal por úlcera'],
  },
  {
    cid: 'K25.2',
    name: 'Úlcera gástrica aguda com hemorragia e perfuração',
    synonyms: ['Hemorragia e perfuração por úlcera gástrica', 'Úlcera gástrica perfurada com sangramento'],
  },
  {
    cid: 'K25.3',
    name: 'Úlcera gástrica aguda sem hemorragia nem perfuração',
    synonyms: ['Úlcera gástrica sem complicações', 'Úlcera estomacal não complicada'],
  },
  {
    cid: 'K25.4',
    name: 'Úlcera gástrica crônica ou não especificada com hemorragia',
    synonyms: ['Úlcera gástrica crônica com sangramento', 'Hemorragia estomacal crônica'],
  },
  {
    cid: 'K25.5',
    name: 'Úlcera gástrica crônica ou não especificada com perfuração',
    synonyms: ['Perfuração por úlcera crônica do estômago', 'Úlcera gástrica crônica perfurada'],
  },
  {
    cid: 'K25.6',
    name: 'Úlcera gástrica crônica ou não especificada com hemorragia e perfuração',
    synonyms: ['Úlcera estomacal crônica perfurada com sangramento', 'Hemorragia e perfuração por úlcera crônica'],
  },
  {
    cid: 'K25.7',
    name: 'Úlcera gástrica crônica ou não especificada sem hemorragia nem perfuração',
    synonyms: ['Úlcera gástrica crônica não complicada', 'Úlcera do estômago sem complicações'],
  },
  {
    cid: 'K26',
    name: 'Úlcera duodenal',
    synonyms: ['Úlcera no duodeno', 'Ferida no duodeno'],
  },
  {
    cid: 'K26.0',
    name: 'Úlcera duodenal aguda com hemorragia',
    synonyms: ['Úlcera duodenal com sangramento', 'Hemorragia por úlcera duodenal'],
  },
  {
    cid: 'K26.1',
    name: 'Úlcera duodenal aguda com perfuração',
    synonyms: ['Perfuração causada por úlcera duodenal', 'Úlcera duodenal perfurada'],
  },
  {
    cid: 'K26.2',
    name: 'Úlcera duodenal aguda com hemorragia e perfuração',
    synonyms: ['Hemorragia e perfuração por úlcera duodenal', 'Úlcera duodenal perfurada com sangramento'],
  },
  {
    cid: 'K26.3',
    name: 'Úlcera duodenal aguda sem hemorragia nem perfuração',
    synonyms: ['Úlcera duodenal não complicada', 'Úlcera no duodeno sem complicações'],
  },
  {
    cid: 'K26.4',
    name: 'Úlcera duodenal crônica ou não especificada com hemorragia',
    synonyms: ['Úlcera crônica duodenal com sangramento', 'Hemorragia causada por úlcera crônica no duodeno'],
  },
  {
    cid: 'K26.5',
    name: 'Úlcera duodenal crônica ou não especificada com perfuração',
    synonyms: ['Perfuração causada por úlcera duodenal crônica', 'Úlcera duodenal crônica perfurada'],
  },
  {
    cid: 'K26.6',
    name: 'Úlcera duodenal crônica ou não especificada com hemorragia e perfuração',
    synonyms: ['Úlcera duodenal crônica perfurada com sangramento', 'Hemorragia e perfuração por úlcera crônica no duodeno'],
  },
  {
    cid: 'K26.7',
    name: 'Úlcera duodenal crônica ou não especificada sem hemorragia nem perfuração',
    synonyms: ['Úlcera duodenal crônica sem complicações', 'Úlcera no duodeno não complicada'],
  },
  {
    cid: 'K27',
    name: 'Úlcera péptica, local não especificado',
    synonyms: ['Úlcera péptica', 'Úlcera em localização não determinada'],
  },
  {
    cid: 'K27.1',
    name: 'Úlcera péptica aguda com perfuração',
    synonyms: ['Perfuração causada por úlcera péptica', 'Úlcera péptica perfurada'],
  },
  {
    cid: 'K27.2',
    name: 'Úlcera péptica aguda com hemorragia e perfuração',
    synonyms: ['Hemorragia e perfuração por úlcera péptica', 'Úlcera péptica perfurada com sangramento'],
  },
  {
    cid: 'K27.3',
    name: 'Úlcera péptica aguda sem hemorragia nem perfuração',
    synonyms: ['Úlcera péptica não complicada', 'Úlcera péptica sem complicações'],
  },
  {
    cid: 'K27.4',
    name: 'Úlcera péptica crônica ou não especificada com hemorragia',
    synonyms: ['Úlcera péptica crônica com sangramento', 'Hemorragia por úlcera péptica crônica'],
  },
  {
    cid: 'K27.5',
    name: 'Úlcera péptica crônica ou não especificada com perfuração',
    synonyms: ['Perfuração causada por úlcera péptica crônica', 'Úlcera péptica crônica perfurada'],
  },
  {
    cid: 'K27.6',
    name: 'Úlcera péptica crônica ou não especificada com hemorragia e perfuração',
    synonyms: ['Hemorragia e perfuração por úlcera péptica crônica', 'Úlcera péptica crônica perfurada com sangramento'],
  },
  {
    cid: 'K27.7',
    name: 'Úlcera péptica crônica ou não especificada sem hemorragia nem perfuração',
    synonyms: ['Úlcera péptica crônica não complicada', 'Úlcera péptica sem complicações'],
  },
  {
    cid: 'K28',
    name: 'Úlcera gástrica e duodenal simultâneas',
    synonyms: ['Úlcera em estômago e duodeno', 'Úlceras gástrica e duodenal'],
  },
  {
    cid: 'K28.0',
    name: 'Úlcera gástrica e duodenal simultâneas agudas com hemorragia',
    synonyms: ['Úlcera gástrica e duodenal com sangramento', 'Hemorragia por úlceras simultâneas'],
  },
  {
    cid: 'K28.1',
    name: 'Úlcera gástrica e duodenal simultâneas agudas com perfuração',
    synonyms: ['Perfuração por úlceras gástrica e duodenal', 'Úlceras gástrica e duodenal perfuradas'],
  },
  {
    cid: 'K28.2',
    name: 'Úlcera gástrica e duodenal simultâneas agudas com hemorragia e perfuração',
    synonyms: ['Hemorragia e perfuração por úlceras simultâneas', 'Úlceras gástrica e duodenal perfuradas com sangramento'],
  },
  {
    cid: 'K28.3',
    name: 'Úlcera gástrica e duodenal simultâneas agudas sem hemorragia nem perfuração',
    synonyms: ['Úlceras gástrica e duodenal não complicadas', 'Úlceras gástrica e duodenal sem complicações'],
  },
  {
    cid: 'K28.4',
    name: 'Úlcera gástrica e duodenal simultâneas crônicas ou não especificadas com hemorragia',
    synonyms: ['Úlceras gástrica e duodenal crônicas com sangramento', 'Hemorragia por úlceras simultâneas crônicas'],
  },
  {
    cid: 'K28.5',
    name: 'Úlcera gástrica e duodenal simultâneas crônicas ou não especificadas com perfuração',
    synonyms: ['Perfuração por úlceras crônicas gástrica e duodenal', 'Úlceras crônicas gástrica e duodenal perfuradas'],
  },
  {
    cid: 'K28.6',
    name: 'Úlcera gástrica e duodenal simultâneas crônicas ou não especificadas com hemorragia e perfuração',
    synonyms: ['Hemorragia e perfuração por úlceras crônicas simultâneas', 'Úlceras crônicas gástrica e duodenal perfuradas com sangramento'],
  },
  {
    cid: 'K28.7',
    name: 'Úlcera gástrica e duodenal simultâneas crônicas ou não especificadas sem hemorragia nem perfuração',
    synonyms: ['Úlceras crônicas gástrica e duodenal não complicadas', 'Úlceras sem complicações'],
  },
  {
    cid: 'K29',
    name: 'Gastrite e duodenite',
    synonyms: ['Inflamação do estômago e do duodeno', 'Gastrite e inflamação duodenal'],
  },
  {
    cid: 'K29.0',
    name: 'Gastrite aguda',
    synonyms: ['Gastrite repentina', 'Inflamação aguda do estômago'],
  },
  {
    cid: 'K29.1',
    name: 'Gastrite subaguda',
    synonyms: ['Gastrite não crônica', 'Inflamação subaguda do estômago'],
  },
  {
    cid: 'K29.2',
    name: 'Gastrite crônica superficial',
    synonyms: ['Gastrite crônica leve', 'Inflamação crônica superficial do estômago'],
  },
  {
    cid: 'K29.3',
    name: 'Gastrite crônica atrófica',
    synonyms: ['Inflamação crônica atrófica do estômago', 'Atrofia gástrica crônica'],
  },
  {
    cid: 'K29.4',
    name: 'Gastrite crônica não especificada',
    synonyms: ['Inflamação crônica do estômago não especificada', 'Gastrite não especificada crônica'],
  },
  {
    cid: 'K29.5',
    name: 'Duodenite aguda',
    synonyms: ['Inflamação aguda do duodeno', 'Duodenite repentina'],
  },
  {
    cid: 'K29.6',
    name: 'Duodenite crônica',
    synonyms: ['Inflamação crônica do duodeno', 'Duodenite persistente'],
  },
  {
    cid: 'K29.7',
    name: 'Gastrite e duodenite, não especificadas',
    synonyms: ['Inflamação não especificada do estômago e duodeno', 'Gastrite e duodenite sem diagnóstico preciso'],
  },
  
  // adicione mais cid abaixo Infecções de transmissão predominantemente sexual (A50 - A64)
  
  {
    cid: 'A50',
    name: 'Sífilis congênita',
    synonyms: ['Sífilis adquirida ao nascer', 'Infecção congênita por Treponema pallidum'],
  },
  {
    cid: 'A50.0',
    name: 'Sífilis congênita precoce sintomática',
    synonyms: ['Sífilis congênita sintomática em recém-nascido', 'Sífilis precoce congênita com sintomas'],
  },
  {
    cid: 'A50.1',
    name: 'Sífilis congênita precoce latente',
    synonyms: ['Sífilis latente congênita precoce', 'Infecção congênita precoce sem sintomas'],
  },
  {
    cid: 'A50.2',
    name: 'Sífilis congênita tardia sintomática',
    synonyms: ['Sífilis congênita sintomática após o nascimento', 'Sífilis tardia congênita com sintomas'],
  },
  {
    cid: 'A50.3',
    name: 'Sífilis congênita tardia latente',
    synonyms: ['Sífilis latente congênita tardia', 'Infecção congênita tardia sem sintomas'],
  },
  {
    cid: 'A50.4',
    name: 'Sífilis congênita com comprometimento ósseo e articular',
    synonyms: ['Sífilis congênita com artrite e doenças ósseas', 'Complicações articulares de sífilis congênita'],
  },
  {
    cid: 'A50.5',
    name: 'Sífilis congênita cardiovascular',
    synonyms: ['Complicações cardiovasculares da sífilis congênita', 'Doenças cardíacas de origem sifilítica congênita'],
  },
  {
    cid: 'A50.6',
    name: 'Sífilis congênita com comprometimento neurológico',
    synonyms: ['Sífilis congênita com envolvimento do sistema nervoso', 'Complicações neurológicas de sífilis congênita'],
  },
  {
    cid: 'A50.7',
    name: 'Sífilis congênita com outros comprometimentos',
    synonyms: ['Sífilis congênita com envolvimento de múltiplos órgãos', 'Complicações diversas da sífilis congênita'],
  },
  {
    cid: 'A50.9',
    name: 'Sífilis congênita não especificada',
    synonyms: ['Sífilis congênita sem detalhes', 'Infecção congênita sifilítica não especificada'],
  },
  {
    cid: 'A51',
    name: 'Sífilis primária',
    synonyms: ['Infecção primária por Treponema pallidum', 'Lesão primária de sífilis'],
  },
  {
    cid: 'A51.0',
    name: 'Sífilis primária dos órgãos genitais externos',
    synonyms: ['Sífilis genital primária', 'Úlcera genital sifilítica primária'],
  },
  {
    cid: 'A51.1',
    name: 'Sífilis primária de outras localizações geniturinárias',
    synonyms: ['Sífilis primária em outras áreas geniturinárias', 'Infecção sifilítica em órgãos geniturinários'],
  },
  {
    cid: 'A51.2',
    name: 'Sífilis primária anal',
    synonyms: ['Sífilis primária localizada no ânus', 'Infecção sifilítica anal'],
  },
  {
    cid: 'A51.3',
    name: 'Sífilis primária retal',
    synonyms: ['Sífilis primária localizada no reto', 'Infecção sifilítica retal'],
  },
  {
    cid: 'A51.4',
    name: 'Sífilis primária faríngea',
    synonyms: ['Sífilis primária na faringe', 'Infecção sifilítica faríngea'],
  },
  {
    cid: 'A51.5',
    name: 'Sífilis primária de outras localizações',
    synonyms: ['Sífilis primária em áreas diversas', 'Infecção sifilítica em outras áreas'],
  },
  {
    cid: 'A51.9',
    name: 'Sífilis primária, não especificada',
    synonyms: ['Infecção primária sifilítica não especificada', 'Sífilis primária sem localização específica'],
  },
  {
    cid: 'A52',
    name: 'Sífilis tardia',
    synonyms: ['Sífilis terciária', 'Infecção sifilítica tardia'],
  },
  {
    cid: 'A52.0',
    name: 'Neurosífilis sintomática',
    synonyms: ['Sífilis com comprometimento neurológico', 'Infecção sifilítica do sistema nervoso'],
  },
  {
    cid: 'A52.1',
    name: 'Neurosífilis assintomática',
    synonyms: ['Infecção sifilítica neurológica sem sintomas', 'Neurosífilis sem manifestação clínica'],
  },
  {
    cid: 'A52.2',
    name: 'Neurosífilis com comprometimento meningoespinhal',
    synonyms: ['Comprometimento meningoespinhal por sífilis', 'Infecção sifilítica com envolvimento meningoespinhal'],
  },
  {
    cid: 'A52.3',
    name: 'Sífilis cardiovascular',
    synonyms: ['Complicações cardiovasculares da sífilis terciária', 'Sífilis tardia com envolvimento cardíaco'],
  },
  {
    cid: 'A52.7',
    name: 'Sífilis tardia com outras manifestações',
    synonyms: ['Sífilis terciária com envolvimento de múltiplos órgãos', 'Complicações diversas da sífilis terciária'],
  },
  {
    cid: 'A52.9',
    name: 'Sífilis tardia não especificada',
    synonyms: ['Infecção sifilítica tardia não especificada', 'Sífilis terciária sem detalhes'],
  },
  {
    cid: 'A53',
    name: 'Outras formas e as não especificadas de sífilis',
    synonyms: ['Sífilis não especificada', 'Formas diversas de sífilis'],
  },
  {
    cid: 'A53.0',
    name: 'Sífilis latente precoce',
    synonyms: ['Sífilis não manifestada clinicamente precoce', 'Infecção sifilítica sem sintomas'],
  },
  {
    cid: 'A53.9',
    name: 'Sífilis, não especificada',
    synonyms: ['Sífilis sem diagnóstico específico', 'Infecção sifilítica indefinida'],
  },
  {
    cid: 'A54',
    name: 'Infecção gonocócica',
    synonyms: ['Gonorreia', 'Infecção por Neisseria gonorrhoeae'],
  },
  {
    cid: 'A54.0',
    name: 'Infecção gonocócica do trato geniturinário inferior com abscesso periuretral e glândulas',
    synonyms: ['Gonorreia com abscesso periuretral', 'Infecção gonocócica com abscesso'],
  },
  {
    cid: 'A54.1',
    name: 'Infecção gonocócica do trato geniturinário inferior sem abscesso periuretral',
    synonyms: ['Gonorreia sem abscesso', 'Infecção gonocócica do trato inferior'],
  },
  {
    cid: 'A54.2',
    name: 'Infecção gonocócica do trato geniturinário superior',
    synonyms: ['Gonorreia do trato geniturinário superior', 'Infecção gonocócica do trato superior'],
  },
  {
    cid: 'A54.3',
    name: 'Infecção gonocócica do ânus e do reto',
    synonyms: ['Gonorreia anal', 'Infecção gonocócica retal'],
  },
  {
    cid: 'A54.4',
    name: 'Infecção gonocócica da faringe',
    synonyms: ['Gonorreia da faringe', 'Infecção gonocócica faríngea'],
  },
  {
    cid: 'A54.5',
    name: 'Infecção gonocócica de outras localizações',
    synonyms: ['Gonorreia em outras áreas', 'Infecção gonocócica em localização diversa'],
  },
  {
    cid: 'A54.6',
    name: 'Infecção gonocócica não especificada',
    synonyms: ['Gonorreia não especificada', 'Infecção gonocócica sem detalhes'],
  },
  {
    cid: 'A55',
    name: 'Linfogranuloma venéreo',
    synonyms: ['Doença de Nicolas-Favre', 'Infecção por Chlamydia trachomatis'],
  },
  {
    cid: 'A56',
    name: 'Outras doenças sexualmente transmissíveis devidas a clamídia',
    synonyms: ['Infecção por clamídia', 'Doença devida a Chlamydia trachomatis'],
  },
  {
    cid: 'A56.0',
    name: 'Infecção por clamídia dos órgãos geniturinários inferiores',
    synonyms: ['Infecção por clamídia do trato geniturinário inferior', 'Doença sexualmente transmissível por clamídia'],
  },
  {
    cid: 'A56.1',
    name: 'Infecção por clamídia do trato geniturinário superior',
    synonyms: ['Infecção por clamídia do trato geniturinário superior', 'Clamídia nos órgãos geniturinários superiores'],
  },
  {
    cid: 'A56.2',
    name: 'Infecção por clamídia do ânus e do reto',
    synonyms: ['Clamídia anal', 'Infecção retal por clamídia'],
  },
  {
    cid: 'A56.3',
    name: 'Infecção por clamídia da faringe',
    synonyms: ['Infecção faríngea por clamídia', 'Clamídia na faringe'],
  },
  {
    cid: 'A56.4',
    name: 'Infecção por clamídia de outras localizações',
    synonyms: ['Infecção por clamídia em outras áreas', 'Clamídia em localização diversa'],
  },
  {
    cid: 'A56.8',
    name: 'Outras infecções clamidiais não especificadas',
    synonyms: ['Infecção clamidial não especificada', 'Doença por clamídia sem detalhes'],
  },
  {
    cid: 'A57',
    name: 'Cancróide',
    synonyms: ['Infecção por Haemophilus ducreyi', 'Úlcera genital de cancróide'],
  },
  {
    cid: 'A58',
    name: 'Granuloma inguinal',
    synonyms: ['Doença de Donovan', 'Infecção por Klebsiella granulomatis'],
  },
  {
    cid: 'A59',
    name: 'Tricomoníase',
    synonyms: ['Infecção por Trichomonas vaginalis', 'Doença sexualmente transmissível por tricomoníase'],
  },
  {
    cid: 'A59.0',
    name: 'Tricomoníase urogenital',
    synonyms: ['Tricomoníase no trato geniturinário', 'Infecção geniturinária por tricomoníase'],
  },
  {
    cid: 'A59.8',
    name: 'Tricomoníase de outras localizações',
    synonyms: ['Tricomoníase em outras áreas', 'Infecção diversa por tricomoníase'],
  },
  {
    cid: 'A59.9',
    name: 'Tricomoníase não especificada',
    synonyms: ['Infecção por tricomoníase não especificada', 'Tricomoníase sem localização definida'],
  },
  {
    cid: 'A60',
    name: 'Infecção anogenital por vírus do herpes [herpes simples]',
    synonyms: ['Herpes genital', 'Infecção anogenital por vírus do herpes simples'],
  },
  {
    cid: 'A60.0',
    name: 'Infecção anogenital primária por vírus do herpes [herpes simples]',
    synonyms: ['Herpes genital primário', 'Infecção inicial por herpes simples na área anogenital'],
  },
  {
    cid: 'A60.1',
    name: 'Infecção anogenital recorrente por vírus do herpes [herpes simples]',
    synonyms: ['Herpes genital recorrente', 'Reativação de herpes simples anogenital'],
  },
  {
    cid: 'A60.9',
    name: 'Infecção anogenital por vírus do herpes [herpes simples], não especificada',
    synonyms: ['Herpes anogenital não especificado', 'Infecção anogenital por herpes simples sem especificação'],
  },
  
   {
    cid: 'B05.0',
    name: 'Sarampo complicado por encefalite',
    synonyms: ['Sarampo com inflamação cerebral', 'Encefalite sarampenta', 'Complicação neurológica do sarampo'],
  },
  {
    cid: 'B05.1',
    name: 'Sarampo complicado por meningite',
    synonyms: ['Sarampo com inflamação das meninges', 'Meningite sarampenta', 'Sarampo com infecção meníngea'],
  },
  {
    cid: 'B05.2',
    name: 'Sarampo complicado por pneumonia',
    synonyms: ['Pneumonia sarampenta', 'Infecção pulmonar pelo sarampo', 'Complicação respiratória do sarampo'],
  },
  {
    cid: 'B05.3',
    name: 'Sarampo complicado por otite média',
    synonyms: ['Otite sarampenta', 'Infecção no ouvido por sarampo', 'Complicação auditiva do sarampo'],
  },
  {
    cid: 'B05.4',
    name: 'Sarampo com outras complicações',
    synonyms: ['Sarampo complicado', 'Complicações diversas do sarampo'],
  },
  {
    cid: 'B05.8',
    name: 'Outros tipos de sarampo especificados',
    synonyms: ['Sarampo atípico', 'Sarampo modificado', 'Sarampo não clássico'],
  },
  {
    cid: 'B05.9',
    name: 'Sarampo não especificado',
    synonyms: ['Sarampo sem complicações descritas', 'Infecção por vírus do sarampo'],
  },
  {
    cid: 'B01.0',
    name: 'Varicela complicada por encefalite',
    synonyms: ['Varicela com inflamação cerebral', 'Encefalite varicelosa', 'Complicação neurológica da varicela'],
  },
  {
    cid: 'B01.1',
    name: 'Varicela complicada por meningite',
    synonyms: ['Varicela com inflamação das meninges', 'Meningite varicelosa', 'Varicela com infecção meníngea'],
  },
  {
    cid: 'B01.2',
    name: 'Varicela complicada por pneumonia',
    synonyms: ['Pneumonia varicelosa', 'Infecção pulmonar pela varicela', 'Complicação respiratória da varicela'],
  },
  {
    cid: 'B01.8',
    name: 'Varicela com outras complicações',
    synonyms: ['Varicela complicada', 'Complicações diversas da varicela'],
  },
  {
    cid: 'B01.9',
    name: 'Varicela não especificada',
    synonyms: ['Varicela sem complicações descritas',' Infecção por vírus da varicela'],
  },
    {
  cid: 'Z76.5',
  name: 'Pessoa fingindo ser doente (simulação consciente)',
  synonyms: [
    'Simulação de doença',
    'Fingimento de enfermidade',
    'Falsificação de sintomas',
    'Doença fictícia',
    'Transtorno factício' ],
},
     { CIAP2: 'W82', SYNONYMS: ['condição relacionada ao término da gestação'] },
                     { CIAP2: 'W83', SYNONYMS: ['condição relacionada ao término da gestação'] }, 
                     { CIAP2: 'W90', SYNONYMS: ['condição relacionada ao término da gestação'] },
                     { CIAP2: 'W91', SYNONYMS: ['condição relacionada ao término da gestação'] }, 
                     { CIAP2: 'W92', SYNONYMS: ['condição relacionada ao término da gestação'] },
                     { CIAP2: 'W93', SYNONYMS: ['condição relacionada ao término da gestação'] },
                     { CID: '002', SYNONYMS: ['infecção congênita'] },
                     { CID: '003', SYNONYMS: ['infecção congênita'] }, 
                     { CID: '004', SYNONYMS: ['infecção congênita'] }, 
                     { CID: '005', SYNONYMS: ['infecção congênita'] },
                     { CID: '042', SYNONYMS: ['complicações obstétricas'] }, 
                     { CID: '045', SYNONYMS: ['complicações obstétricas'] },
                     { CID: '060', SYNONYMS: ['trabalho de parto prematuro'] }, 
                     { CID: '061', SYNONYMS: ['ruptura prematura de membranas'] },
                     { CID: '062', SYNONYMS: ['incompetência cervical'] }, 
                     { CID: '063', SYNONYMS: ['hemorragia anteparto'] }, 
                     { CID: '064', SYNONYMS: ['distúrbios hipertensivos na gravidez'] }, 
                     { CID: '065', SYNONYMS: ['diabetes gestacional'] }, 
                     { CID: '066', SYNONYMS: ['infecção materna que afeta o feto'] },
                     { CID: '067', SYNONYMS: ['restrição do crescimento fetal'] },
                     { CID: '068', SYNONYMS: ['morte fetal intrauterina'] },
                     { CID: '069', SYNONYMS: ['anormalidades placentárias'] }, 
                     { CID: '070', SYNONYMS: ['aborto espontâneo'] }, 
                     { CID: '071', SYNONYMS: ['aborto retido'] },
                     { CID: '073', SYNONYMS: ['outras complicações obstétricas'] },
                     { CID: '075.0', SYNONYMS: ['condições do recém-nascido'] },
                     { CID: '075.1', SYNONYMS: ['condições do recém-nascido'] }, 
                     { CID: '075.4', SYNONYMS: ['condições do recém-nascido'] }, 
                     { CID: '075.5', SYNONYMS: ['condições do recém-nascido'] }, 
                     { CID: '075.6', SYNONYMS: ['condições do recém-nascido'] },
        { CID: '075.7', SYNONYMS: ['condições do recém-nascido'] },
        { CID: '075.8', SYNONYMS: ['condições do recém-nascido'] }, 
        { CID: '075.9', SYNONYMS: ['condições do recém-nascido'] }, 
        { CID: '080', SYNONYMS: ['condições do recém-nascido'] },
        { CID: '081', SYNONYMS: ['condições do recém-nascido'] },
        { CID: '082', SYNONYMS: ['condições do recém-nascido'] }, 
        { CID: '083', SYNONYMS: ['condições do recém-nascido'] },
        { CID: '084', SYNONYMS: ['condições do recém-nascido'] }, 
        { CID: 'Z30.3', SYNONYMS: ['planejamento familiar'] }, 
        { CID: 'Z37.0', SYNONYMS: ['nascimento único, vivo'] }, 
        { CID: 'Z37.1', SYNONYMS: ['nascimento único, morto'] }, 
        { CID: 'Z37.2', SYNONYMS: ['nascimentos múltiplos, todos vivos'] },
        { CID: 'Z37.3', SYNONYMS: ['nascimentos múltiplos, um vivo e um morto'] }, 
        { CID: 'Z37.4', SYNONYMS: ['nascimentos múltiplos, todos mortos'] }, 
        { CID: 'Z37.5', SYNONYMS: ['outros resultados do parto'] },
        { CID: 'Z37.6', SYNONYMS: ['outros resultados do parto'] }, 
        { CID: 'Z37.7', SYNONYMS: ['outros resultados do parto'] }, 
        { CID: 'Z37.9', SYNONYMS: ['resultado não especificado do parto'] },
        { CID: 'Z38', SYNONYMS: ['nascido no hospital'] }, 
        { CID: 'Z39', SYNONYMS: ['cuidados pós-parto'] } ];  
  
    ];
  

  

    // Filtra os resultados com base na consulta de busca
    const filteredResults = results.filter(result => 
        result.cid.toLowerCase().includes(searchQuery) || 
        result.name.toLowerCase().includes(searchQuery) ||
        result.synonyms.some(synonym => synonym.toLowerCase().includes(searchQuery))
    );

    console.log("Filtered Results:", filteredResults); // Mensagem de depuração

    if (filteredResults.length > 0) {
        filteredResults.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <p><strong>${result.cid}</strong> - ${result.name}</p>
                <div class="synonym-tooltip">${result.synonyms.join(', ')}</div>
            `;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    }
}
const cidIndex = {};
results.forEach(result => {
    cidIndex[result.cid.toLowerCase()] = result;
    result.synonyms.forEach(synonym => {
        if (!cidIndex[synonym.toLowerCase()]) {
            cidIndex[synonym.toLowerCase()] = result;
        }
    });
});

function performSearch(searchQuery) {
    const filteredResults = Object.values(cidIndex).filter(result => 
        result.cid.toLowerCase().includes(searchQuery) || 
        result.name.toLowerCase().includes(searchQuery)
    );
    displayResults(filteredResults);
}
let debounceTimeout;

function handleSearch(event) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        const searchQuery = event.target.value.toLowerCase();
        performSearch(searchQuery);
    }, 300); // 300ms de atraso após o último caractere digitado
}
