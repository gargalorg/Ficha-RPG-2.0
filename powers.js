// ==================== DESCRIÇÕES COMPLETAS DOS PODERES ====================

const powerDescriptions = {
    // ========== CAMPO DE FORÇA ==========
    'Campo de Força': `Campo de Força

【Custo: 3 PAX por Grau】

【GRAU 1】
✅ GERAÇÃO DE CAMPO (Passiva/Ativa): Você pode manifestar um campo de energia. Se usado como uma Ação, concede +2 de Defesa e RD 1 até o seu próximo turno.
✅ "EU NÃO VOU AGUENTAR POR MUITO TEMPO" (Reação): Quando você ou um aliado adjacente for atingido, você pode gastar sua Reação e 1 de Determinação para reduzir o dano sofrido em um valor igual ao seu Tier + Grau de Poder.
✅ CAMPO SALVADOR (Manobra): (1 Ação / 1 Det.) Você projeta um campo em uma zona próxima para amortecer a queda de alguém ou impedir que um objeto pesado esmague um civil. Concede Vantagem em testes de Salvamento.

【GRAU 2】
✅ BOLHA DE PROTEÇÃO (Manobra): (1 Ação / 2 Det.) O campo agora pode envolver você e até dois aliados próximos. O bônus de Defesa sobe para +4 e a RD para 3. Enquanto mantiver a bolha, você só pode realizar ações de movimento ou suporte.
✅ CAMPO DE CONTENÇÃO (Ataque): (1 Ação / 2 Det.) Você tenta prender um inimigo em uma esfera. O alvo deve realizar um teste de Resistência (Tensão 10 + Mente). Se falhar, recebe a condição Imobilizado.
✅ PLATAFORMA DE ENERGIA (Utilidade): Você pode criar superfícies sólidas de energia para caminhar sobre os vãos, permitindo que você e seus aliados ignorem terrenos difíceis ou alcancem lugares altos.

【GRAU 3】
✅ DOMO DA LIGA (Manobra): (1 Ação / 4 Det.) Você cria um domo que cobre uma Zona inteira. A RD é 5 e a Defesa +6. O domo é seletivo: aliados podem atirar de dentro para fora, mas ataques externos são bloqueados.
✅ PULSO DE REPULSÃO (Reação): Se um inimigo entrar em combate corpo-a-corpo com você, você pode gastar 2 de Determinação para liberar uma onda de choque. O inimigo deve ser bem-sucedido em um teste de Potência Tensão 15 ou será empurrado para uma Zona adjacente e ficará Caído.

【GRAU 4】
✅ CAMPO REATIVO (Passiva): Sempre que o campo sofrer um ataque e a RD absorver todo o dano, a energia é convertida. Você recupera 1 de Determinação (limite de 3 por rodada).
✅ PRISÃO MOLECULAR (Ataque): (1 Ação / 5 Det.) Uma versão aprimorada da contenção. O alvo fica Atordoado e Imobilizado. Para escapar, ele precisa de um acerto crítico ou um efeito de desintegração.
✅ ESCUDO ESPELHADO (Reação): Ao bloquear um disparo energético com sucesso, você pode gastar 2 de Determinação para refletir o disparo de volta ao atacante usando sua própria Mente para o teste de acerto.

【GRAU 5】
✅ ISOLAMENTO ABSOLUTO (Manobra): (1 Ação / 8 Det.) Você cria uma barreira que bloqueia até mesmo teletransporte, radiação e ataques psíquicos. Dentro deste campo, ninguém pode ser detectado por meios tecnológicos ou místicos. Defesa +10, RD 15.
✅ MOLDAR REALIDADE CINÉTICA (Utilidade): Você pode criar construtos complexos de campo de força que agem de forma independente por 1d4 rodadas (como mãos gigantes ou paredes móveis).
✅ SOBRECARGA DE CAMPO (Ataque de Área): (1 Ação / 10 Det.) Você expande seu campo de força violentamente a partir do seu corpo. Todos os inimigos em até duas Zonas sofrem dano de esmagamento (Dano = Mente + Tier) e são expelidos da área.`,

    // ========== MESTRE MARCIAL ==========
    'Mestre Marcial': `Mestre Marcial

【Custo: 3 PAX por Grau】

【GRAU 1】
✅ MESTRE DO DOJÔ (Passiva): Seus ataques desarmados causam dano de impacto (Dano = Tier + Grau). Você recebe +2 de acerto em ataques desarmados.
✅ GOLPE DE ATORDOAMENTO (Manobra): (1 Ação / 1 Det.) Você atinge um centro nervoso. Se acertar, o alvo recebe a condição Abaulado.
✅ PARAR IMPACTO (Reação): (1 Det.) Quando alvo de um ataque corpo-a-corpo, você recebe +2 de Defesa. Se o inimigo errar, você pode derrubá-lo (Caído) imediatamente.

【GRAU 2】
✅ MANOBRA DE AGARRAR (Manobra): (1 Ação / 2 Det.) Você imobiliza o alvo. O inimigo fica Imobilizado até passar num teste de Resistência Tensão 12 + Potência/Agilidade.
✅ CONTROLE CORPORAL (Passiva): Você recebe Vantagem para resistir a manobras de derrubar ou empurrar.
✅ COMBATE FLUIDO (Manobra): (1 Ação) Você estuda o oponente. Seu próximo ataque contra ele terá Vantagem.

【GRAU 3】
✅ CONTRA-ATAQUE DE MESTRE (Reação): (2 Det.) Se um inimigo errar um golpe corpo-a-corpo, você realiza um ataque imediato com Vantagem.
✅ GOLPE DUPLO (Manobra): (1 Ação / 3 Det.) Você desfere uma combinação rápida, realizando dois ataques desarmados no mesmo turno contra o mesmo alvo.
✅ MOVIMENTAÇÃO TÁTICA (Passiva): Você ignora ataques de oportunidade e pode se mover entre inimigos sem penalidades.

【GRAU 4】
✅ PRESSÃO MOLECULAR (Manobra): (1 Ação / 5 Det.) Seus golpes ignoram RD física. O alvo deve passar em Resistência Tensão 15 ou ficará Paralisado por 1 rodada.
✅ FOCO INTERIOR (Passiva): Você pode gastar 2 de Determinação para remover qualquer condição de status mental ou física de si mesmo.
✅ SENTIDO DE LUTA (Passiva): Você nunca é pego de surpresa e não pode ser flanqueado.

【GRAU 5】
✅ GOLPE DOS CINCO PONTOS (Manobra): (1 Ação / 10 Det.) O toque da morte. O alvo deve passar em Resistência Tensão 20 ou sua Determinação cai para 0.
✅ ESTADO DE ZEN (Passiva): Você ignora penalidades de cegueira ou escuridão. Sua Defesa base aumenta em +5.
✅ MESTRE SUPREMO (Passiva): Sua margem de crítico é reduzida para 18-20 e você recebe Vantagem em todos os ataques corpo-a-corpo.`,

    // ========== SENTIDOS ESPECIAIS ==========
    'Sentidos Especiais': `Sentidos Especiais

【Custo: 3 PAX por Grau】

✅ Você possui os sentidos bem acima do comum. Escolha um entre a visão, audição ou olfato.
✅ Cada Grau nesse poder te fornece +2 em Testes de Mente quando usar seus sentidos para rastrear, perceber ou qualquer outra atividade que envolva o uso do sentido escolhido.
✅ A cada grau nesse poder, aumente a escala em que ele opera.
✅ Em Grau 5, você pode ouvir ou enxergar o mundo inteiro.`,

    // ========== DISPARO ENERGÉTICO ==========
    'Disparo Energético': `Disparo Energético

【Custo: 4 PAX por Grau】

【GRAU 1】
✅ RAJADA CONCENTRADA (Manobra): (1 Ação / 1 Det.) Você projeta um feixe de energia contra um alvo em alcance Próximo ou Afastado. O bônus de acerto e dano é igual a 1 + Grau do Poder.
✅ DISPARO DE AVISO (Utilidade): (1 Ação) Você realiza um disparo não letal para intimidar ou cercar inimigos. Concede Vantagem em testes de Espírito para Intimidação e pode criar uma barreira visual que impõe a condição Lento.
✅ SOBRECARGA DE IMPACTO (Manobra): (1 Ação / 1 Det.) Em vez de focar no dano, você foca na força cinética. Se o ataque acertar, o dano é reduzido à metade, mas o alvo deve passar num teste de Resistência Tensão 10 + Mente ou será empurrado para uma Zona adjacente e ficará Caído.

【GRAU 2】
✅ FOGO DE SUPRESSÃO (Ataque de Área): (1 Ação / 2 Det.) Você varre uma Zona inteira com energia. Todos os alvos na Zona sofrem dano igual ao seu Tier + Grau. Alvos que falharem num teste de Agilidade recebem a condição Lento.
✅ DISPARO DUPLO (Manobra): (1 Ação / 2 Det.) Você dispara dois feixes simultâneos. Pode atingir dois alvos diferentes na mesma Zona ou concentrar ambos no mesmo alvo (realizando duas rolagens de ataque, a segunda com penalidade de -2).
✅ PONTO DE IGNIÇÃO (Passiva): Seus disparos são tão intensos que causam efeitos secundários. Se você obtiver um sucesso crítico ou uma Página Dupla, o alvo recebe uma condição baseada no seu elemento.

【GRAU 3】
✅ CANHÃO DE ENERGIA (Manobra): (1 Ação / 4 Det.) Você carrega um disparo massivo. O dano aumenta em +1d6 para cada ponto de Mente que você possuir. O feixe atravessa alvos em linha reta, atingindo todos em seu caminho até o alcance Longo.
✅ DISPARO REATIVO (Reação): (2 Det.) Quando um inimigo entrar na sua Zona ou realizar um ataque contra um aliado próximo, você pode realizar um disparo imediato como reação.

【GRAU 4】
✅ DESINTEGRAÇÃO PARCIAL (Passiva): Sua energia é tão instável que consome a matéria. Seus disparos ignoram RD igual ao dobro do seu Grau de Poder.
✅ CHUVA DE PLASMA (Ataque de Área): (1 Ação / 6 Det.) Você dispara para o alto, fazendo a energia cair sobre até três Zonas diferentes. Todos os atingidos devem passar num teste de Resistência Tensão 15 + Mente ou ficarão Atordoados.

【GRAU 5】
✅ ANNIHILAÇÃO TOTAL (Manobra): (1 Ação / 10 Det.) Você libera o limite máximo da sua fonte de energia. Realize um ataque com Vantagem. Se acertar, o dano é triplicado.
✅ NEXO ENERGÉTICO (Passiva): Você se torna um condutor vivo. Enquanto tiver pelo menos 1 ponto de Determinação, você irradia uma aura que concede RD 5 contra ataques do mesmo tipo e recupera 2 pontos de Determinação por rodada.
✅ DISPARO INTERPLANETÁRIO (Utilidade): (1 Ponto de Roteiro) Você pode focar seu disparo para atingir um alvo em escala orbital ou em outra Zona de Combate distante.`,

    // ========== MESTRE ESPADACHIM ==========
    'Espadachim': `Mestre Espadachim

【Custo: 3 PAX por Grau】

【GRAU 1】
✅ MESTRE DAS LÂMINAS (Passiva): Você recebe +2 de acerto com armas brancas. Suas armas causam dano de corte/perfuração (Dano = Tier + Grau + 2).
✅ APARAR (Reação): (1 Det.) Você usa sua arma para bloquear. Recebe +3 de Defesa contra um ataque de proximidade.
✅ ESTOCADA RÁPIDA (Manobra): (1 Ação / 1 Det.) Você realiza um ataque que impõe a condição Sangrando (2 de dano por turno).

【GRAU 2】
✅ DESARMAR (Manobra): (1 Ação / 2 Det.) Você gira sua lâmina para desarmar o oponente. O alvo deve passar em Agilidade ou perderá a arma.
✅ VARREDURA DE LÂMINA (Ataque de Área): (1 Ação / 2 Det.) Você atinge todos os inimigos adjacentes com um único movimento circular.
✅ POSTURA DE DUELO (Passiva): Enquanto enfrentar apenas um inimigo em combate corpo-a-corpo, você recebe Vantagem na Defesa.

【GRAU 3】
✅ LÂMINA DEFENSIVA (Passiva): Enquanto empunhar sua arma, você recebe RD 3 contra ataques físicos.
✅ CORTAR O VENTO (Manobra): (1 Ação / 4 Det.) Você realiza um ataque tão rápido que cria uma onda de vácuo. Alcance Próximo vira Afastado.
✅ FLUXO DE LÂMINAS (Passiva): Se você nocautear um inimigo, pode realizar um movimento extra gratuito para se aproximar de outro alvo.

【GRAU 4】
✅ QUEBRA-AÇO (Passiva): Suas lâminas cortam materiais densos como se fossem papel. Você ignora RD de armaduras tecnológicas e campos de força de Grau inferior ao seu.
✅ REPRESÁLIA (Reação): (3 Det.) Após realizar um Aparo com sucesso, você desfere um contra-golpe instantâneo que causa a condição Ferimento Crítico (o alvo não pode recuperar Determinação até ser tratado).
✅ VONTADE DA LÂMINA (Passiva): Você não pode ser desarmado por meios convencionais. Sua margem de crítico com armas brancas agora é 18-20.

【GRAU 5】
✅ CORTE DIMENSIONAL (Manobra): (1 Ação / 8 Det.) Sua lâmina corta o próprio tecido da realidade. Este ataque ignora qualquer RD ou Campo de Força e atinge seres Intangíveis ou etéreos normalmente.
✅ DANÇA DAS ESPADAS (Passiva): Sua velocidade com a lâmina é sobre-humana. Você pode realizar uma Ação de Ataque extra por turno sem custo de Determinação.
✅ SENTIDO DO DUELISTA (Passiva): Sua Defesa base aumenta em +5. Enquanto empunhar uma arma, você recebe Vantagem em todos os testes de iniciativa e percepção em combate.`,

    // ========== MANIPULAÇÃO ELEMENTAL ==========
    'Manipulação Elemental': `Manipulação Elemental

【Custo: 3 PAX por Grau】

【GRAU 1】
✅ RAIO ELEMENTAL (Manobra): (1 Ação / 1 Det.) Você projeta uma rajada do seu elemento. O dano é igual ao seu Tier + Grau. Se obtiver uma Página Dupla, o alvo recebe a condição correspondente (Queimado, Lento, etc.).
✅ ESCUDO ELEMENTAL (Reação): (1 Det.) Você manifesta seu elemento para bloquear um ataque. Recebe +2 de Defesa.
✅ INTERAÇÃO AMBIENTAL (Utilidade): (1 Ação) Você pode manipular pequenas quantidades do seu elemento presentes no cenário.

【GRAU 2】
✅ MANIPULAÇÃO DE ÁREA (Ataque de Área): (1 Ação / 2 Det.) Você expande seu elemento por uma Zona inteira. Todos os inimigos devem passar em um teste de Resistência ou sofrerão a condição principal do elemento.
✅ FORMA ELEMENTAL PARCIAL (Passiva): Você recebe RD 3 contra ataques baseados no seu próprio elemento.
✅ CONSTRUTOS ELEMENTAIS SIMPLES (Utilidade): (1 Ação / 1 Det.) Você pode moldar seu elemento em ferramentas ou barreiras simples.

【GRAU 3】
✅ DOMÍNIO DA NATUREZA (Manobra): (1 Ação / 4 Det.) Você controla o elemento em escala massiva. Pode alterar o clima local ou criar um desastre natural localizado.
✅ TRANSMUTAÇÃO ELEMENTAL (Passiva): Você pode agora alternar entre sub-tipos do seu elemento.

【GRAU 4】
✅ AVATAR ELEMENTAL (Manobra): (1 Ação / 6 Det.) Você transforma seu corpo inteiramente no elemento por 1d4 rodadas. Recebe a condição Intangível contra ataques físicos.
✅ NÚCLEO REATIVO (Reação): (3 Det.) Quando atingido por um ataque à distância, você reduz o dano sofrido em um valor igual à sua Mente e seu próximo Raio Elemental causará o dobro de dano.

【GRAU 5】
✅ CATACLISMO TOTAL (Manobra): (1 Ação / 10 Det.) Escolha até três Zonas visíveis; todos os seres nessas áreas sofrem dano massivo (Dano = Mente + Tier + 10) e recebem duas condições negativas.
✅ CONTROLE MOLECULAR (Utilidade): (2 Pontos de Roteiro) Você pode manipular o elemento em nível atômico. Pode criar estruturas permanentes.
✅ IMUNIDADE ABSOLUTA (Passiva): Você é totalmente imune a qualquer dano ou efeito negativo proveniente do seu elemento escolhido. Se for alvo de um ataque deste elemento, você recupera 1d6 de Determinação.`,

    // ========== TELEPATIA ==========
    'Telepatia': `Telepatia

【Custo: 4 PAX por Grau】

【GRAU 1】
✅ ELO MENTAL (Passiva): Você pode se comunicar mentalmente com qualquer ser inteligente que esteja em seu campo de visão.
✅ LEITURA SUPERFICIAL (Manobra): (1 Ação / 1 Det.) Você capta os pensamentos imediatos e emoções de um alvo. Concede Vantagem em testes de Percepção ou Intimidação.
✅ PROJEÇÃO DE RUÍDO (Manobra): (1 Ação / 1 Det.) Você envia um "grito" mental. O alvo deve passar em um teste de Resistência (Tensão 10 + Mente) ou ficará Abaulado.

【GRAU 2】
✅ SUGESTÃO HIPNÓTICA (Manobra): (1 Ação / 2 Det.) Você planta uma ideia simples na mente do alvo. Se falhar em Tensão 12 + Mente, o alvo executa a ação.
✅ MASCARAMENTO MENTAL (Passiva): Você apaga sua presença das mentes ao redor. Inimigos recebem Desvantagem para detectar sua localização.
✅ VARREDURA SENSORIAL (Utilidade): (1 Ação / 1 Det.) Você detecta mentes em uma área de 1km.

【GRAU 3】
✅ PARALISIA PSÍQUICA (Manobra): (1 Ação / 4 Det.) Se falhar em Tensão 15 + Mente, o alvo recebe Paralisado por 1d4 rodadas.
✅ ESCUDO COGNITIVO (2 Ações / 4 Det.): Por uma cena, você e aliados recebem Vantagem para resistir a ataques mentais.
✅ INVASÃO DE MEMÓRIA (Utilidade): (3 Ação / 8 Det.) Você mergulha no passado do alvo para extrair uma informação específica.

【GRAU 4】
✅ CONTROLE MENTAL (Manobra): (3 Ação / 6 Det.) Você assume o comando do corpo do alvo por 1d4 rodadas.
✅ ILUSÃO TELEPÁTICA (Manobra): (1 Ação / 3 Det.) Você faz o alvo ver algo que não existe. O alvo fica Cego para tudo, exceto para a ilusão.
✅ DOR SINÁPTICA (Passiva): Seus ataques mentais causam dano direto na Determinação (Dano = Mente + Tier + Grau).

【GRAU 5】
✅ APAGÃO MENTAL (Manobra): (1 Ação / 10 Det.) Você "desliga" a mente de todos os inimigos em uma Zona. Alvos que falharem ficam Incapacitados.
✅ ONIPRESENÇA PSÍQUICA (Passiva): Seu Elo Mental não tem mais limite de distância. Sua Mente aumenta em +5.
✅ REESCRITA DE PERSONALIDADE (Utilidade): (2 Pontos de Roteiro) Você pode alterar permanentemente a memória ou lealdade de um indivíduo.`,

    // ========== GARRAS/PRESAS ==========
    'Garras/Presas': `Garras/Presas

【Custo: 3 PAX por Grau】

【GRAU 1】
✅ ARMAS NATURAIS (Passiva): Seus ataques desarmados causam dano de perfuração ou corte (Dano = Tier + Grau) e você recebe +2 em testes de Atletismo para escalar.
✅ LACERAÇÃO (Manobra): (1 Ação / 1 Det.) Além do dano normal, o alvo recebe a condição Ferido (sofre 2 de dano de sangramento por turno).
✅ MORDIDA DE CONTENÇÃO (Manobra): (1 Ação / 1 Det.) O alvo deve passar em teste de Resistência Tensão 10 + Potência ou ficará Agarrado.

【GRAU 2】
✅ RETALHAR (Manobra): (1 Ação / 2 Det.) Você realiza dois ataques contra o mesmo alvo. O segundo ataque possui -2.
✅ INSTINTO ASSASSINO (Passiva): Vantagem em ataques contra inimigos Ferido, Caído ou Sangrando.
✅ GARRAS DE ESCALADA (Utilidade): Velocidade de Escalada igual à sua velocidade de movimento terrestre.

【GRAU 3】
✅ GARRAS PENETRANTES (Passiva): Seus ataques ignoram RD igual a Potência + Grau.
✅ BOTE SELVAGEM (Manobra): (1 Ação / 3 Det.) Você salta de uma Zona para outra e ataca. O alvo deve passar em teste de Resistência Tensão 15 ou ficará Caído.

【GRAU 4】
✅ FERIMENTOS EXPOSTOS (Passiva): O dano de sangramento aumenta para um valor igual ao seu Tier.
✅ FRENESI SANGUINÁRIO (Reação): (2 Det.) Quando causar dano, você pode realizar um ataque adicional imediato.

【GRAU 5】
✅ ESTRAÇALHAR (Manobra): (1 Ação / 6 Det.) Ataque com Vantagem. Se acertar, o dano é dobrado.
✅ GARRAS ATÔMICAS (Passiva): Seus ataques afetam seres Intangíveis e destroem barreiras físicas de Grau menor.
✅ CARNICEIRO CÓSMICO (Passiva): Ao derrotar um inimigo de Tier igual ou superior, recupera 5 de Determinação.`,

    // ========== METAMORFO ==========
    'Metamorfo': `Metamorfo

【Custo: 5 PAX por Grau (Limite: Grau 1)】

✅ MIMETISMO SOCIAL (Utilidade): (1 Ação) Você pode assumir a aparência, voz e impressões digitais de qualquer pessoa que já tenha visto. Recebe Vantagem Automática em testes de Disfarce e Enganação.
✅ ADAPTAÇÃO BIOLÓGICA (Passiva): Você pode criar brânquias para respirar na água, garras para escalar ou mudar a cor da pele para camuflagem (+3 em Furtividade).
✅ MALEABILIDADE FÍSICA (Reação): (1 Det.) Ao receber um ataque de impacto, você torna seu corpo elástico ou fluído, recebendo RD 5 contra aquele ataque.
✅ EXPANSÃO DE MEMBROS (Manobra): (1 Ação / 1 Det.) Você estica seus braços ou pernas, aumentando seu alcance corpo-a-corpo para Afastado.`,

    // ========== VELOCIDADE SOBRE-HUMANA ==========
    'Velocidade Sobre-Humana': `Velocidade Sobre-Humana

【Custo: 3 PAX por Grau】

【GRAU 1】
✅ CORREDOR NATO (Passiva): +3 Agilidade. Sua distância de movimento por ação aumenta em uma Zona.
✅ REFLEXOS DE ESQUIVA (Passiva): +2 de Defesa contra ataques à distância.
✅ MOVIMENTO ACROBÁTICO (Utilidade): (1 Ação) Corre por paredes, salta sobre obstáculos complexos.

【GRAU 2】
✅ REFLEXOS DE COMBATE (Reação): (1 Det.) Bloqueio ou Esquiva como Reação.
✅ GOLPES EM SÉRIE (Manobra): (1 Ação / 2 Det.) Ataque contra cada inimigo na mesma Zona.
✅ RUTURA CINÉTICA (Manobra): (1 Ação / 2 Det.) Ataca e empurra, deixando o alvo Caído.

【GRAU 3】
✅ ESPECIALISTA EM FLANQUEAMENTO (Passiva): Vantagem contra inimigos atacados por aliados.
✅ GINÁSTICA DE COMBATE (Passiva): Ignora ataques de oportunidade.
✅ INSTANTE DE LUCIDEZ (Manobra): (1 Ação / 3 Det.) Vantagem em Agilidade, Precisão e Defesa.

【GRAU 4】
✅ CONTRA-ATAQUE INEVITÁVEL (Reação): (3 Det.) Quando inimigo errar, ataque de retaliação com dano dobrado.
✅ BORRÃO DE ESQUIVA (Passiva): Inimigos têm Desvantagem. Se rolar 1, fica Vulnerável.
✅ PRECISÃO DE ALTA VELOCIDADE (Passiva): Crítico com 18-20.

【GRAU 5】
✅ DANÇA DA MORTE (Manobra): (1 Ação / 8 Det.) Ataque contra todos em até duas Zonas. Recupera 2 Det por inimigo derrotado.
✅ MÁXIMA EFICIÊNCIA CINÉTICA (Passiva): +10 Agilidade total. Ação de Movimento adicional.
✅ FLUXO DE COMBATE PERFEITO (Passiva): Imune a flanquear. Pode re-rolar Defesa gastando 1 Det.`,

    // ========== CONSTRUTO (LANTERNA) ==========
    'Construtos de Luz': `Construtos de Luz (Lanternas)

【Custo: 5 PAX por Grau】

【GRAU 1】
✅ ARMAMENTO DE LUZ (Passiva): Cria qualquer arma branca ou projétil simples. Usa Espírito para acerto e dano (Dano = Tier + Grau).
✅ ESCUDO DE VONTADE (Reação): (1 Det.) +3 Defesa contra um ataque.
✅ FERRAMENTA VERSÁTIL (Utilidade): (1 Ação) Cria objetos simples. Durabilidade = Espírito + Grau.

【GRAU 2】
✅ PROTEÇÃO INTEGRAL (1 Ação / 1 Det.): Armadura de luz, RD 4, imune ao vácuo.
✅ CONSTRUTO DE CONTENÇÃO (Manobra): (1 Ação / 2 Det.) Algema de luz, causa Agarrado ou Imobilizado.
✅ ARTILHARIA PESADA (Ataque de Área): (1 Ação / 4 Det.) Construtos grandes causam dano em área.

【GRAU 3】
✅ MULTI-TAREFA DE LUZ (Passiva): Mantém três construtos ativos simultaneamente.
✅ MURALHA INTRANSITÁVEL (Manobra): (1 Ação / 3 Det.) Barreira RD 10 entre duas Zonas.
✅ EXÉRCITO DE UM HOMEM SÓ (Manobra): (1 Ação / 6 Det.) Três ataques por rodada.

【GRAU 4】
✅ REFORÇO DE VONTADE (Reação): (3 Det.) Reconstrói construto destruído instantaneamente.
✅ FOTOMETRIA AVANÇADA (Passiva): Cria sensores, radares, filtros de radiação.

【GRAU 5】
✅ CONSTRUTO PLANETÁRIO (Utilidade): (2 Pontos de Roteiro) Cria algo de escala colossal.
✅ VONTADE INABALÁVEL (Passiva): Construtos indestrutíveis por Tiers inferiores. Vantagem em Espírito.
✅ SOBRECARGA DE LUZ SÓLIDA (Manobra): (1 Ação / 10 Det.) Ataque com Vantagem, dano triplicado, causa Cego e Atordoado.`,

    // ========== VOO ==========
    'Voo': `Voo

【Custo: 3 PAX por Grau】

【GRAU 1】
✅ LEVITAR (Passiva): Ignora terreno difícil. Vantagem em Percepção aérea.
✅ MERGULHO EM VELOCIDADE (Manobra): (1 Ação / 1 Det.) Adiciona Grau ao dano, deixa Caído.
✅ RESGATE AÉREO (Utilidade): (1 Ação) Carrega aliado sem reduzir velocidade.

【GRAU 2】
✅ MANOBRABILIDADE AÉREA (Passiva): +2 Defesa no ar. Velocidade dobrada.
✅ ACROBACIA SUPREMA (Reação): (1 Det.) Vantagem na Defesa contra ataque à distância.
✅ VÔO SUPERSÔNICO (Utilidade): (1 Ação / 2 Det.) Atravessa cidades em minutos.

【GRAU 3】
✅ ÁS DOS CÉUS (Passiva): Vantagem em Agilidade/Precisão voando. Defesa no ar +4.
✅ TURBILHÃO DE VENTO (Manobra): (1 Ação / 3 Det.) Arremessa inimigos, causa Abaulado.

【GRAU 4】
✅ INÉRCIA ZERO (Passiva): Ação de Movimento como Ação Livre.
✅ ATAQUE DE INTERCEPTAÇÃO (Reação): (3 Det.) Intercepta e Imobiliza inimigo em movimento.

【GRAU 5】
✅ VÔO TRANSESTELAR (Passiva): Voa no vácuo, imune a Caído. Defesa no ar +6.
✅ BOMBARDEIO CINÉTICO (Manobra): (1 Ação / 8 Det.) Dano = Potência/Mente + 15 em área.
✅ ESTABILIDADE ABSOLUTA (Passiva): Ignora penalidades de alcance. Pode ignorar RD gastando 2 Det.`,

    // ========== MESTRE ATIRADOR ==========
    'Atirador': `Mestre Atirador

【Custo: 3 PAX por Grau】

【GRAU 1】
✅ OLHO DE ÁGUIA (Passiva): +2 acerto à distância. Alcance +1 Zona.
✅ TIRO DE INTERCEPTAÇÃO (Reação): (1 Det.) Anula projétil inimigo.
✅ DISPARO DE PRECISÃO (Manobra): (1 Ação / 1 Det.) Ignora cobertura leve.

【GRAU 2】
✅ TIRO EM MOVIMENTO (Passiva): Ataca sem penalidade após mover.
✅ DISPARO TRICK-SHOT (Manobra): (1 Ação / 2 Det.) Atinge alvos em cobertura total.
✅ MUNIÇÃO ESPECIAL (Utilidade): (1 Det.) Causa Abaulado ou Lento.

【GRAU 3】
✅ CHUVA DE PROJÉTEIS (Ataque de Área): (1 Ação / 4 Det.) Causa Suprimido.
✅ CADÊNCIA ACELERADA (Passiva): Dois ataques por Ação.
✅ ESTOCADA DE LONGE (Passiva): Ignora penalidades de combate corpo-a-corpo.

【GRAU 4】
✅ TIRO NO PONTO VITAL (Passiva): Crítico 18-20, causa Incapacitado.
✅ NUNCA ERRA (Reação): (4 Det.) Transforma erro em acerto automático.
✅ SENTINELA DE LONGE (Reação): (2 Det.) Ataque imediato ao inimigo entrar/sair da Zona.

【GRAU 5】
✅ DISPARO IMPOSSÍVEL (Manobra): (1 Ação / 10 Det.) Atravessa barreiras, dano triplicado.
✅ DOMÍNIO BALÍSTICO (Passiva): Sem penalidades de distância/cobertura.
✅ ARSENAL INFINITO (Passiva): Munição infinita. Pode ignorar RD total gastando 2 Det.`,

    // ========== RESISTÊNCIA APRIMORADA ==========
    'Resistência Aprimorada': `Resistência Aprimorada

【Custo: 3 PAX por Grau】

【GRAU 1】
✅ CORPO ROBUSTO (Passiva): +2 Resistência, RD 1.
✅ DETERMINAÇÃO FERRENHA (Passiva): +5 Determinação máxima.
✅ PONTO DE APOIO (Manobra): (1 Ação / 1 Det.) Não pode ser movido/derrubado.

【GRAU 2】
✅ VIGOR SOBRE-HUMANO (Passiva): Imune a doenças, Vantagem vs venenos.
✅ PELE IMPENETRÁVEL (Passiva): RD 3.
✅ RECUPERAÇÃO DE FÔLEGO (Manobra): (1 Ação / 2 Det.) Recupera Determinação = Tier + Grau.

【GRAU 3】
✅ INQUEBRÁVEL (Passiva): RD 6. Resiste a pressões extremas.
✅ ESCUDO HUMANO (Reação): (2 Det.) Toma dano no lugar de aliado.

【GRAU 4】
✅ ESTADO ESTACIONÁRIO (Passiva): RD 12. Ignora penalidades de Ferido.
✅ PANCADA DE RETORNO (Reação): (3 Det.) Contra-golpe usando Resistência.

【GRAU 5】
✅ IMORTALIDADE CINÉTIQUE (Passiva): RD 20. Se Determinação chegar a 0, desperta com 1 Det após 1d4 rodadas.
✅ NÚCLEO INVIOLÁVEL (Passiva): Imune a desintegração. Vantagem em Espírito vs controle.
✅ SOBREVIVÊNCIA ABSOLUTA (Utilidade): (1 Ponto de Roteiro) Sobrevive a explosão planetária.`,

    // ========== COMUNICAÇÃO ANIMAL ==========
    'Comunicação Animal': `Comunicação Animal

【Custo: 3 PAX por Grau】

【GRAU 1】
✅ LINGUAGEM DA MATILHA (Passiva): Entende e é entendido por animais.
✅ EMPATIA BESTIAL (Utilidade): (1 Ação / 1 Det.) Acalma animais selvagens.
✅ SENTIDOS COMPARTILHADOS (Passiva): +2 Percepção. Não pode ser pego de surpresa se houver animais.

【GRAU 2】
✅ CONVOCAÇÃO DE ALIADOS (Manobra): (1 Ação / 2 Det.) Animais dão Desvantagem aos inimigos.
✅ OLHOS DA NATUREZA (Utilidade): (1 Ação / 1 Det.) Vê através de animal em 1km.
✅ FEROCIDADE INCENTIVADA (Passiva): Animais têm Vantagem e +2 Dano.

【GRAU 3】
✅ COMANDO DA ALFA (Manobra): (1 Ação / 4 Det.) Ataque coordenado, causa Caído ou Sangrando.
✅ MIMETISMO SENSORIAL (Passiva): Visão noturna, sonar. Rastreia Invisíveis.
✅ VIGOR DA SELVA (Reação): (2 Det.) RD 5, recupera 1d6 Det.

【GRAU 4】
✅ DOMINAÇÃO DE FERAS (Manobra): (1 Ação / 6 Det.) Controla criaturas bestiais.
✅ ENXAME DEVASTADOR (Ataque de Área): (1 Ação / 5 Det.) Cobre duas Zonas, causa Cego.
✅ LÍDER DA CAÇA (Passiva): Aliados ganham +2 Agilidade e Defesa.

【GRAU 5】
✅ AVATAR DA NATUREZA (Manobra): (1 Ação / 10 Det.) Espírito de fera lendária, dano triplicado.
✅ RESSURREIÇÃO DO ESPÍRITO (Utilidade): (2 Pontos de Roteiro) Traz animais de volta à vida.
✅ UNIDADE BIOLÓGICA (Passiva): Imune a venenos. Usa atributo de qualquer animal.`,

    // ========== SUPER FORÇA ==========
    'Super-Força': `Super-Força

【Custo: 3 PAX por Grau】

【GRAU 1】
✅ FORÇA BRUTA (Passiva): +2 Potência. Ergue carros.
✅ IMPACTO DEVASTADOR (Manobra): (1 Ação / 1 Det.) Ignora RD igual a Grau + Tier.
✅ ARREMESSO DE PRECISÃO (Manobra): (1 Ação / 1 Det.) Usa Potência para acerto à distância.

【GRAU 2】
✅ ONDA DE CHOQUE (Ataque de Área): (1 Ação / 2 Det.) Empurra e derruba inimigos.
✅ GRIP DE TITÃ (Manobra): (1 Ação / 2 Det.) Imobiliza e causa dano automático.
✅ RESISTÊNCIA AO CANSAÇO (Passiva): Vantagem vs Lento/Exausto.

【GRAU 3】
✅ ESMAGAR ÁTOMOS (Passiva): Dano dobrado contra objetos.
✅ SALTO HULKIANO (Utilidade): (1 Ação / 2 Det.) Salta até duas Zonas.

【GRAU 4】
✅ PULSO DE PRESSÃO (Manobra): (1 Ação / 5 Det.) Cone de vácuo, causa Atordoado.
✅ REAÇÃO DE CONTRA-GOLPE (Reação): (3 Det.) Anula dano e arremessa inimigo.

【GRAU 5】
✅ FORÇA DE ESCALA PLANETÁRIA (Passiva): Move montanhas. Vantagem em Potência vs Tiers inferiores.
✅ GOLPE DO FIM DO MUNDO (Manobra): (1 Ação / 10 Det.) Dano triplicado.
✅ INABALÁVEL (Passiva): Imune a ser empurrado/derrubado.`
};

// Função para obter descrição de um poder
function getPowerDescription(powerName) {
    return powerDescriptions[powerName] || '';
}