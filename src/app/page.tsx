"use client";

import React, { useState, useEffect } from 'react';
import BookLayout from '@/components/BookLayout';
import BookPage from '@/components/BookPage';
import MarginCard from '@/components/MarginCard';
import WithMargin from '@/components/WithMargin';
import ARImage from '@/components/ARImage';
import ARScanner from '@/components/ARScanner';
import QRTag from '@/components/QRTag';
import DigitalHologram from '@/components/DigitalHologram';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  // Auto-trigger AR if URL has ?mode=ar
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'ar') {
      // If we are in AR mode, jump to the pages with the cells (pages 2-3 in 0-index)
      setCurrentPage(2);
      setIsScannerOpen(true);
    }
  }, []);
  const [isHologramOpen, setIsHologramOpen] = useState(false);
  const [hologramType, setHologramType] = useState<'procariota' | 'eucariota'>('procariota');

  return (
    <div className="flex flex-col min-h-screen bg-stone-900">
      <BookLayout>
        {/* SPREAD 1: Pages 1 & 2 */}
        {currentPage === 0 && (
          <>
            {/* Left Page 1 */}
            <BookPage isLeft>
              <div className="mb-6 text-center border-b-2 border-charcoal/20 pb-4">
                <h1 className="text-3xl lg:text-4xl font-bold font-inter text-ink-black tracking-tight uppercase">CÉLULA: El Código del Creador</h1>
              </div>

              <div className="flex flex-col h-full text-sm md:text-[15px] lg:text-base leading-relaxed text-charcoal">
                <section className="mb-6 flex flex-col">
                  <h2 className="text-xl font-bold font-inter mb-2 text-ink-black/90 border-l-4 border-highlight-yellow pl-3">Tu origen en una partida</h2>
                  <p className="mb-3 text-justify">
                    Hace 12 años, iniciaste tu partida con un solo bloque inicial. Hoy eres un imperio masivo formado por 30 billones de ciudades operando en tiempo real. ¿Cómo es posible que esa primera pieza contuviera el código fuente para generar tus ojos, tus huesos y tu cerebro? Toda esa información está encriptada en el ADN.
                  </p>
                  <p className="mb-4 text-justify">
                    Para superar este nivel, dejaremos la teoría tradicional y pensaremos como estrategas. Haremos zoom en uno de esos billones de ciudades para entender cómo funciona todo el imperio. Analizaremos la <strong>Célula</strong> como tu <em>Territorio Base</em>: estudiaremos sus murallas defensivas, sus fábricas de energía y cómo se organiza para formar continentes enteros (tu cuerpo). Usa el mapa inferior como guía de reconocimiento. ¡Prepara tu inventario, la campaña comienza!
                  </p>
                  
                  <div className="relative group mb-2 w-full mx-auto">
                    <div className="absolute -inset-1 bg-highlight-yellow/50 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <img 
                      src="/modern_rpg_map.png" 
                      alt="Mapa RPG visto desde arriba" 
                      className="relative rounded-lg shadow-sm border-2 border-highlight-yellow/60 w-full object-cover h-32 md:h-48"
                    />
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="text-xl font-bold font-inter mb-2 text-ink-black/90">¿Qué es la Célula? El Territorio Base</h2>
                  <h3 className="text-lg font-bold font-inter mb-1 text-ink-black/70">Tu primer asentamiento</h3>
                  <p className="mb-2">
                    En los videojuegos de estrategia, empiezas con un "territorio base". Es tu pequeña porción de mapa que funciona por sí sola. Construyes edificios, te defiendes y recolectas recursos.
                  </p>
                  <p className="mb-2">
                    En la biología, ese territorio base es la <strong>célula</strong>. Es la porción más pequeña de ti que está verdaderamente "viva". Tu cuerpo no es un solo mapa gigante; es un imperio formado por 30 billones de estas pequeñas aldeas, todas trabajando en alianza.
                  </p>
                </section>

                <WithMargin
                  isLeftPage={true}
                  marginContent={
                    <div className="flex flex-col gap-4 mt-1">
                      <MarginCard type="architect" title="Mensaje del Arquitecto">
                        Células tan distintas organizadas en perfecta sinergia reflejan el Diseño inteligente de Dios.
                      </MarginCard>
                      
                      <div className="flex flex-col gap-2 mt-2">
                        <h4 className="text-xs font-bold text-ink-black/80 uppercase tracking-wider text-center border-b border-charcoal/10 pb-1">Diversidad Celular</h4>
                        <div className="flex flex-row gap-2 justify-between">
                          <div className="flex flex-col items-center bg-[#D6EAF8]/50 py-2 px-1 rounded border border-[#85C1E9]/40 flex-1 shadow-sm">
                            <div className="w-6 h-6 rounded-full bg-[#85C1E9] mb-1 opacity-80 flex items-center justify-center text-white text-[10px]">⚡</div>
                            <span className="text-[9px] font-bold text-animal-blue text-center leading-tight">Neurona</span>
                          </div>
                          <div className="flex flex-col items-center bg-[#E9F7EF]/50 py-2 px-1 rounded border border-[#82E0AA]/40 flex-1 shadow-sm">
                            <div className="w-6 h-6 rounded bg-[#82E0AA] mb-1 opacity-80 flex items-center justify-center text-white text-[10px]">🛡️</div>
                            <span className="text-[9px] font-bold text-plant-green text-center leading-tight">Epitelio</span>
                          </div>
                          <div className="flex flex-col items-center bg-[#FDEBD0]/50 py-2 px-1 rounded border border-[#F8C471]/40 flex-1 shadow-sm">
                            <div className="w-6 h-6 rounded-full scale-y-75 bg-[#F8C471] mb-1 opacity-80 flex items-center justify-center text-white text-[10px]">💪</div>
                            <span className="text-[9px] font-bold text-accent-orange text-center leading-tight">Músculo Liso</span>
                          </div>
                        </div>
                      </div>

                      <MarginCard type="lore" title="El Sistema de Respawn">
                        Tu imperio no es estático. Tu cuerpo fabrica cerca de 3.8 millones de células nuevas cada segundo para reemplazar a las dañadas. ¡Literalmente no eres la misma persona que eras al empezar a leer!
                      </MarginCard>
                    </div>
                  }
                >
                  <section className="flex-grow">
                    <h2 className="text-xl font-bold font-inter mb-2 text-ink-black/90">La Unidad Mínima (El Motor del Juego)</h2>
                    <p className="mb-2">
                      Una célula es la unidad mínima con vida. En términos de nuestro juego, es capaz de recolectar recursos (nutrirse), subir de nivel (crecer), generar nuevas unidades (reproducirse), detectar el entorno (reaccionar a estímulos) y elegir una clase o especialidad (diferenciarse). Es tu bloque de construcción principal (anatómica), tu motor de trabajo (funcional) y el bloque desde donde inició tu partida (de origen).
                    </p>
                    <p>
                      Además, los "diseños" (o skins) de estas bases varían según su facción. Las del reino vegetal suelen tener estructuras rígidas y geométricas (poliédricas), mientras que las animales se adaptan a su misión y pueden ser planas, cúbicas, cilíndricas o estrelladas.
                    </p>
                  </section>
                </WithMargin>
              </div>
            </BookPage>

            {/* Right Page 2 */}
            <BookPage>
              <section className="flex-grow">
                <h2 className="text-2xl font-bold font-inter mb-4 text-ink-black/90">Estructuras Clave: Edificando tu Reino</h2>
                
                <p className="text-[15px] text-charcoal font-semibold mb-3">
                  La célula tiene 3 partes importantes:
                </p>
                <div className="flex flex-col gap-4">
                    {/* Nucleo */}
                    <div className="flex flex-col sm:flex-row gap-4 p-4 border border-accent-orange/20 bg-accent-orange/5 rounded-lg shadow-sm">
                      <div className="w-full sm:w-1/3 flex-shrink-0">
                        <img src="/modern_nucleus.png" className="w-full h-32 sm:h-full object-cover rounded border border-accent-orange/30" alt="Núcleo" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[17px] font-bold text-accent-orange mb-2">El Castillo Principal (Núcleo)</h3>
                        <p className="text-charcoal font-semibold text-[14px] leading-relaxed mb-2">
                          El Centro de Mando de tu imperio.
                        </p>
                        <div className="text-charcoal text-[13px] leading-relaxed opacity-90 border-l-2 border-accent-orange/30 pl-3">
                          <p className="mb-1">
                            Está protegido por su propia muralla y guarda el tesoro más grande de la ciudad: el manual de instrucciones (ADN).
                          </p>
                          <p>
                            Desde aquí se envían las órdenes. Para reproducirse, el manual se empaqueta en rollos súper apretados llamados <strong>cromosomas</strong>.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Membrana */}
                    <div className="flex flex-col sm:flex-row gap-4 p-4 border border-animal-blue/20 bg-animal-blue-light/10 rounded-lg shadow-sm">
                      <div className="w-full sm:w-1/3 flex-shrink-0">
                        <img src="/modern_membrane.png" className="w-full h-32 sm:h-full object-cover rounded border border-animal-blue/30" alt="Membrana plasmática" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[17px] font-bold text-animal-blue mb-2">La Muralla Mágica (Membrana Plasmática)</h3>
                        <p className="text-charcoal font-semibold text-[14px] leading-relaxed mb-2">
                          El muro exterior de tu base. Funciona como una aduana muy estricta.
                        </p>
                        <p className="text-charcoal text-[13px] leading-relaxed opacity-90 border-l-2 border-animal-blue/30 pl-3">
                          Sus guardias revisan el inventario de lo que quiere entrar (nutrientes) y bloquean a los enemigos. Se encarga de sacar la basura (desechos) para mantener la ciudad limpia. Es una frontera flexible.
                        </p>
                      </div>
                    </div>

                    {/* Citoplasma */}
                    <div className="flex flex-col sm:flex-row gap-4 p-4 border border-plant-green/20 bg-plant-green-light/10 rounded-lg shadow-sm">
                      <div className="w-full sm:w-1/3 flex-shrink-0">
                        <img src="/modern_cytoplasm.png" className="w-full h-32 sm:h-full object-cover rounded border border-plant-green/30" alt="Citoplasma" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[17px] font-bold text-plant-green mb-2">El Terreno (Citoplasma)</h3>
                        <p className="text-charcoal font-semibold text-[14px] leading-relaxed mb-2">
                          El mapa jugable de tu ciudad.
                        </p>
                        <p className="text-charcoal text-[13px] leading-relaxed opacity-90 border-l-2 border-plant-green/30 pl-3">
                          No es un espacio vacío, sino un terreno gelatinoso donde construyes todos tus edificios vitales (las organelas). Aquí es donde se mueven los recursos y donde ocurre casi toda la acción.
                        </p>
                      </div>
                    </div>
                  </div>

                {/* Modelos de Células */}
                <div className="mt-8 mb-4 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold font-inter mb-2 text-ink-black/90 border-b-2 border-charcoal/10 pb-1">Modelos de Células: Los Dos Diseños del Tablero</h2>
                  <p className="text-charcoal text-[14px] leading-relaxed mb-4">
                    A lo largo de la historia, este manual se ha leído en dos tipos de arquitecturas principales. Conocer su diferencia es vital para entender qué tipo de facción estás jugando:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-charcoal/5 p-4 rounded-lg border border-charcoal/10 shadow-sm flex flex-col">
                      <h3 className="text-[15px] font-bold text-charcoal mb-2 border-b border-charcoal/10 pb-2">1. Célula procariota (Nivel 1)</h3>
                      <p className="text-charcoal text-[13px] leading-relaxed">
                        Es como el primer campamento que construyes en el juego. Es una base pequeña, de estructura simple y no tiene un castillo central (carece de núcleo). El manual de instrucciones (ADN) flota libremente por el terreno. Solo tiene unas pequeñas fábricas básicas llamadas ribosomas para hacer proteínas. Para protegerse mejor, tienen un escudo extra llamado pared celular. ¡Las bacterias juegan en este nivel!
                      </p>
                    </div>
                    <div className="bg-charcoal/5 p-4 rounded-lg border border-charcoal/10 shadow-sm flex flex-col">
                      <h3 className="text-[15px] font-bold text-charcoal mb-2 border-b border-charcoal/10 pb-2">2. Célula eucariota (Nivel 100)</h3>
                      <p className="text-charcoal text-[13px] leading-relaxed">
                        Es una metrópolis avanzada. Posee un castillo central (núcleo) que protege el ADN. El terreno está lleno de edificios especializados (las organelas) que hacen trabajos complejos, como fabricar energía a gran escala. Pertenecen a este grupo los hongos, animales y vegetales. Estas células premium, a su vez, tienen algunas diferencias entre ellas dependiendo de su bando.
                      </p>
                    </div>
                  </div>

                  {/* Bloque Interactivo */}
                  <div className="bg-highlight-yellow/20 border border-highlight-yellow p-4 rounded-xl shadow-sm mt-auto">
                    <h3 className="font-bold text-ink-black mb-2 flex items-center gap-2">
                      <span className="bg-highlight-yellow text-charcoal px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider">Misión Activa</span> 
                      Diferencias Tácticas
                    </h3>
                    <p className="text-[13px] text-charcoal mb-3 font-semibold">
                      Contesta: ¿Cuáles son las diferencias principales entre las células procariotas y las eucariotas?
                    </p>
                    <textarea 
                      className="w-full bg-white/60 border border-charcoal/20 rounded p-2 text-[13px] outline-none focus:border-highlight-yellow min-h-[60px]" 
                      placeholder="Escribe tu reporte de campo aquí..."
                    ></textarea>
                  </div>
                  <div className="mt-4 flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <MarginCard type="cheatCode" title="Códigos de Ayuda">
                        <div className="mb-1"><span className="font-bold text-animal-blue">PRO</span>cariota = "Pro" significa antes. (Antes del núcleo / Sin castillo).</div>
                        <div><span className="font-bold text-plant-green">EU</span>cariota = "Eu" significa verdadero. (Núcleo verdadero / Con castillo).</div>
                      </MarginCard>
                    </div>
                    <div className="flex-1">
                      <MarginCard type="architect" title="Mensaje del Arquitecto">
                        La precisión con la que tu membrana celular elige qué entra y qué sale de tu cuerpo es una muestra del cuidado perfecto que Dios puso en cada detalle.
                      </MarginCard>
                    </div>
                  </div>
                </div>
              </section>

              <div className="mt-auto pt-8 flex justify-end">
                <button 
                  onClick={() => setCurrentPage(1)}
                  className="flex items-center gap-2 px-6 py-3 bg-charcoal text-cream-base rounded-lg hover:bg-charcoal/90 transition-colors font-bold group shadow-md"
                >
                  Pasar Página
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </BookPage>
          </>
        )}

        {/* SPREAD 2: Pages 3 & 4 */}
        {currentPage === 1 && (
          <>
            {/* Left Page 3 */}
            <BookPage isLeft>

                <section className="h-full flex flex-col pb-4 overflow-y-auto pr-2">
                  
                  {/* PROCARIOTA */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-charcoal mb-2 uppercase tracking-wide border-b-2 border-charcoal/10 pb-1">Célula Procariota</h3>
                    <div className="bg-paper-white/50 p-3 rounded-xl border border-charcoal/10">
                      <div className="flex flex-col justify-center bg-white/50 rounded-lg p-2 mb-3 shadow-inner border border-charcoal/10 overflow-hidden">
                        <ARImage 
                          src="/prokaryotic.png" 
                          alt="Célula Procariota" 
                          title="Procariota-LVL1"
                          onScanClick={() => setIsScannerOpen(true)}
                        />
                      </div>
                      <div className="flex justify-between items-center px-1">
                        <div className="text-[10px] font-mono text-charcoal/50 uppercase tracking-widest">Target: BioScan_PRK_001</div>
                        <div className="flex gap-2 items-center">
                          <button 
                            onClick={() => setIsScannerOpen(true)}
                            className="text-[9px] bg-charcoal text-white px-2 py-1 rounded font-bold hover:bg-highlight-yellow hover:text-charcoal transition-colors"
                          >
                            MODO AR (CAM)
                          </button>
                          <QRTag id="001" />
                        </div>
                      </div>
                      {/* Componentes abajo */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                         <OrganelleItem icon={<IconMembranaNaranja />} title="Membrana plasmática" desc="Controla paso sustancias" />
                         <OrganelleItem icon={<IconParedNaranja />} title="Pared celular" desc="Protege y da forma" />
                         <OrganelleItem icon={<IconCitoplasmaAmarillo />} title="Citoplasma" desc="Ocurren reacciones químicas" />
                         <OrganelleItem icon={<IconNucleoide />} title="Nucleoide (ADN)" desc="Contiene la información genética" />
                         <OrganelleItem icon={<IconRibosomaNaranja />} title="Ribosomas" desc="Sintetizan proteínas" />
                         <OrganelleItem icon={<IconPili />} title="Pili / Fimbrias" desc="Ayuda a la adhesión" />
                      </div>
                    </div>
                  </div>

                  {/* EUCARIOTA */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2 uppercase tracking-wide border-b-2 border-charcoal/10 pb-1">Célula Eucariota</h3>
                    <div className="bg-paper-white/50 p-3 rounded-xl border border-charcoal/10">
                      <div className="flex flex-col justify-center bg-white/50 rounded-lg p-2 mb-3 shadow-inner border border-charcoal/10 overflow-hidden">
                        <ARImage 
                          src="/eukaryotic.png" 
                          alt="Célula Eucariota" 
                          title="Eucariota-LVL100"
                          onScanClick={() => setIsScannerOpen(true)}
                        />
                      </div>
                      <div className="flex justify-between items-center px-1">
                        <div className="text-[10px] font-mono text-charcoal/50 uppercase tracking-widest">Target: BioScan_EUK_100</div>
                        <div className="flex gap-2 items-center">
                          <button 
                            onClick={() => setIsScannerOpen(true)}
                            className="text-[9px] bg-charcoal text-white px-2 py-1 rounded font-bold hover:bg-highlight-yellow hover:text-charcoal transition-colors"
                          >
                            MODO AR (CAM)
                          </button>
                          <QRTag id="100" />
                        </div>
                      </div>
                      
                      {/* Componentes abajo */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                         <OrganelleItem icon={<IconNucleo />} title="Núcleo" desc="Controla, almacena ADN" />
                         <OrganelleItem icon={<IconCitoplasmaAzul />} title="Citoplasma" desc="Medio con organelos" />
                         <OrganelleItem icon={<IconRibosomaAzul />} title="Ribosomas" desc="Sintetizan proteínas" />
                         <OrganelleItem icon={<IconMitocondria />} title="Mitocondria" desc="Produce energía (ATP)" />
                         <OrganelleItem icon={<IconGolgi />} title="Aparato de Golgi" desc="Produce energía (ATP)" />
                         <OrganelleItem icon={<IconCloroplasto />} title="Cloroplasto" desc="Realizan fotosíntesis" />
                         <OrganelleItem icon={<IconParedVerde />} title="Pared celular" desc="Da forma y protección" />
                         <OrganelleItem icon={<IconVacuola />} title="Vacuola" desc="Almacena protección" />
                         <OrganelleItem icon={<IconMembranaVerde />} title="Membrana" desc="Paso de sustancias" />
                      </div>
                    </div>
                  </div>

                  {/* CÉLULA VEGETAL */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2 uppercase tracking-wide border-b-2 border-charcoal/10 pb-1">Célula Vegetal</h3>
                    <div className="bg-paper-white/50 p-3 rounded-xl border border-charcoal/10">
                      <div className="flex flex-col justify-center bg-white/50 rounded-lg p-2 mb-3 shadow-inner border border-charcoal/10 overflow-hidden">
                        <ARImage 
                          src="/vegetal.png" 
                          alt="Célula Vegetal" 
                          title="Vegetal-LVL200"
                          onScanClick={() => setIsScannerOpen(true)}
                        />
                      </div>
                      <div className="flex justify-between items-center px-1">
                        <div className="text-[10px] font-mono text-charcoal/50 uppercase tracking-widest">Target: BioScan_VEG_200</div>
                        <div className="flex gap-2 items-center">
                          <button 
                            onClick={() => setIsScannerOpen(true)}
                            className="text-[9px] bg-charcoal text-white px-2 py-1 rounded font-bold hover:bg-highlight-yellow hover:text-charcoal transition-colors"
                          >
                            MODO AR (CAM)
                          </button>
                          <QRTag id="200" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 mb-2">
                    <div className="bg-charcoal/5 border border-charcoal/20 p-4 rounded-xl shadow-sm">
                      <h3 className="text-[16px] font-bold text-ink-black mb-3 flex items-center gap-2">
                        <span className="bg-animal-blue text-white px-2 py-0.5 rounded text-[11px] font-black uppercase tracking-wider">Misión AR</span> 
                        Reconocimiento de Terreno
                      </h3>
                      <p className="text-[13px] text-charcoal mb-3 leading-relaxed font-semibold">
                        ¡Activa tu visor apuntando la cámara al dibujo! Una vez que la base se proyecte en 3D sobre tu mesa, cumple estos 5 puntos:
                      </p>
                      <ul className="text-[12.5px] text-charcoal space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5">🏰</span>
                          <span><strong>Localiza el Castillo Central:</strong> Busca la esfera grande (Núcleo). Gira el modelo. ¿Logras ver el código sagrado (ADN) allí dentro?</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5">🛡️</span>
                          <span><strong>Defensas de Borde:</strong> Si estás en Vegetal, toca la Doble Muralla (Pared). Si estás en Animal, comprueba su Muro Flexible (Membrana).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5">⚡</span>
                          <span><strong>Fuentes de Energía:</strong> Busca los edificios con forma de "maní" con rayas adentro (Mitocondrias). ¿Logras ver alguna activa?</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5">🌾</span>
                          <span><strong>Tecnología Exclusiva (Vegetal):</strong> Busca unos edificios grandes y verdes (Cloroplastos). Son Paneles Solares. ¿Cuántos hay?</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5">📦</span>
                          <span><strong>Zonas de Carga:</strong> Busca las Vacuolas. En el Clan Vegetal son gigantes (guardan agua), en el Animal son muy pequeñas.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <MarginCard type="mission" title="Misión Secundaria">
                        Si con una aguja mágica pincharas la <strong>Vacuola</strong> (el tanque de agua) de una Célula Vegetal, ¿qué le pasaría a la planta de tu jardín? <em>(Pista: piensa en una flor cuando hace calor).</em>
                      </MarginCard>
                    </div>
                    <div className="flex-1">
                      <MarginCard type="lore" title="Autodestrucción Heroica">
                        Si los guardias detectan un "bug" irreparable o un virus conquistando todo, activan un protocolo ninja llamado <strong>Apoptosis</strong>. La célula se autodestruye para no lastimar al resto de tus ciudades. ¡Un sacrificio épico!
                      </MarginCard>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 flex justify-start">
                    <button 
                      onClick={() => setCurrentPage(0)}
                      className="flex items-center gap-2 px-4 py-2 border-2 border-charcoal/20 text-charcoal rounded-lg hover:bg-charcoal/5 transition-colors font-bold group text-sm"
                    >
                      <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      Página Anterior
                    </button>
                  </div>
                </section>
            </BookPage>

            {/* Right Page 4 */}
            <BookPage>
              <section className="mb-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold font-inter mb-4 text-ink-black/90">Eligiendo tu Bando: Los Dos Grandes Clanes</h2>
                
                <p className="mb-5 text-sm md:text-[15px] leading-relaxed text-charcoal text-justify">
                  Dentro del inmenso imperio de las Células Eucariotas, existen dos facciones principales con estrategias de supervivencia completamente distintas. Tu estilo de juego dependerá de a qué clan pertenezcas. ¿Prefieres generar tu propia energía solar y construir defensas impenetrables, o moverte libremente cazando recursos con un diseño más flexible? Analiza las características de cada facción:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Clan Vegetal */}
                  <div className="bg-plant-green-light/10 border border-plant-green/30 p-4 rounded-xl shadow-sm">
                    <h3 className="font-bold text-plant-green text-lg mb-2 flex items-center gap-2">🍃 El Clan Vegetal</h3>
                    <p className="text-[13px] leading-relaxed text-charcoal">
                      Como las plantas no pueden moverse del lugar, su base necesita ser súper resistente. Por eso, su célula tiene una <strong>Muralla Extra-Fuerte (Pared Celular)</strong> por fuera de la membrana para no derrumbarse. Además, no necesitan salir a buscar recursos: tienen <strong>Paneles Solares (Cloroplastos)</strong> que fabrican su propia comida usando solo la luz del sol.
                    </p>
                  </div>

                  {/* Clan Animal */}
                  <div className="bg-animal-blue-light/10 border border-animal-blue/30 p-4 rounded-xl shadow-sm">
                    <h3 className="font-bold text-animal-blue text-lg mb-2 flex items-center gap-2">🐾 El Clan Animal</h3>
                    <p className="text-[13px] leading-relaxed text-charcoal">
                      ¡Aquí jugamos nosotros! Como los animales nos movemos para cazar o recolectar comida, nuestro muro debe ser blandito y flexible (solo tenemos <strong>membrana</strong>). Como no tenemos paneles solares, necesitamos que nuestras <strong>Centrales Eléctricas (Mitocondrias)</strong> trabajen a tope todo el tiempo para darnos energía.
                    </p>
                  </div>
                </div>

                {/* Tabla de Configuracion */}
                <h3 className="text-[16px] font-bold text-ink-black mb-2 flex items-center gap-2">
                  <span className="bg-highlight-yellow text-charcoal px-2 py-0.5 rounded text-[11px] font-black uppercase tracking-wider">Misión</span> 
                  Configuración de Base
                </h3>
                <p className="text-[13px] text-charcoal mb-3 font-semibold">
                  Eres un ingeniero de construcción de reinos. Completa esta tabla de equipamiento básico según el clan de célula que te toque diseñar:
                </p>

                <div className="bg-white rounded-xl border border-charcoal/20 overflow-hidden shadow-sm mb-6 text-[12px] sm:text-[13px]">
                  <div className="grid grid-cols-3 bg-charcoal text-white font-bold">
                    <div className="p-2 border-r border-white/20 text-center flex items-center justify-center">Estructura a Instalar</div>
                    <div className="p-2 border-r border-white/20 text-center flex items-center justify-center">Nombre Biológico</div>
                    <div className="p-2 text-center flex items-center justify-center leading-tight">¿Quién lo tiene? (Vegetal, Animal o Ambos)</div>
                  </div>
                  
                  {[
                    { juego: "Muralla Extra-Fuerte", biol: "Pared Celular" },
                    { juego: "Aduana y Control", biol: "Membrana Plasmática" },
                    { juego: "Paneles Solares", biol: "Cloroplastos" },
                    { juego: "Castillo de Mando", biol: "Núcleo" },
                    { juego: "Centrales Eléctricas", biol: "Mitocondrias" }
                  ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-3 border-b border-charcoal/10 last:border-0 hover:bg-charcoal/5 transition-colors">
                      <div className="p-2 border-r border-charcoal/10 font-bold text-charcoal flex items-center justify-center text-center">{row.juego}</div>
                      <div className="p-2 border-r border-charcoal/10 text-center text-charcoal/90 font-medium flex items-center justify-center">{row.biol}</div>
                      <div className="p-2 flex items-center justify-center bg-highlight-yellow/5">
                        <input type="text" className="w-full text-center bg-transparent outline-none border-b border-dashed border-charcoal/30 focus:border-charcoal transition-colors font-bold text-ink-black uppercase text-[10px] tracking-wider" placeholder="¿QUIÉN?" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mb-6 flex justify-center w-full relative">
                <img src="/cuadro.png" alt="Cuadro comparativo celular" className="w-2/3 md:w-1/2 object-contain h-auto rounded-xl shadow-sm border border-charcoal/10" />
              </div>

              <section className="p-5 bg-charcoal/5 text-charcoal rounded-xl shadow-md border border-charcoal/10 relative overflow-hidden mb-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
                <h2 className="text-lg font-bold font-inter mb-2 text-accent-orange flex items-center gap-2">
                  <span>🚨</span> Misión Secundaria: El Saboteador
                </h2>
                <p className="leading-relaxed mb-3 text-[13px]">
                  <strong>¡Atención Estrategas! Alerta en el Reino: El Invasor sin base.</strong> Los exploradores han detectado un ente extraño en el mapa. No es una célula. No tiene murallas, ni centrales de energía, ni castillo. Es literalmente un plano con un código malicioso (ADN/ARN) envuelto en una pequeña cápsula de proteína. A este ente lo llamamos <strong>VIRUS</strong>.
                </p>
                <p className="leading-relaxed mb-3 text-[13px]">
                  Como no tiene fábricas propias, no puede hacer nada por sí solo... hasta que logra infiltrarse en uno de nuestros castillos. Allí, piratea el sistema y obliga a nuestros constructores a fabricar millones de copias de él.
                </p>
                <div className="bg-white/60 p-3 rounded-lg border border-accent-orange/30 shadow-inner">
                  <p className="text-[13px] mb-2 text-accent-orange font-bold">Reúnete con tu grupo de compañeros y argumenten:</p>
                  <p className="text-[13px]">Si el virus no es una base completa (no es célula) y no puede sobrevivir sin robar nuestra energía... ¿Debería considerarse que está "vivo"? Justifiquen su respuesta.</p>
                </div>
              </section>

              <section className="mb-2 text-center px-4">
                <h2 className="text-lg font-bold font-inter text-charcoal mb-2 flex justify-center items-center gap-2">
                  <span>👑</span> El Gran Diseñador
                </h2>
                <h3 className="text-[14px] font-bold text-charcoal/80 mb-2">El Código Maestro detrás del Juego</h3>
                <p className="text-charcoal text-[13px] leading-relaxed mb-3">
                  Cualquier gamer sabe que un juego espectacular, sin errores (bugs) y con gráficos increíbles no aparece por accidente de la nada. Detrás de esa maravilla hay un equipo brillante de diseñadores trabajando durante años. Al hacer zoom en la "Célula", vemos un nivel de ingeniería asombroso: murallas que eligen qué entra, fábricas de energía perfectas y códigos de ADN que superan a cualquier computadora humana.
                </p>
                <p className="text-charcoal font-bold italic text-[14px] mb-3">
                  "Reconozcan que el Señor es Dios; él nos hizo, y somos suyos..." (Salmo 100:3)
                </p>
                <div className="bg-charcoal/5 border border-charcoal/10 rounded-lg p-3 inline-block w-full text-left">
                  <p className="text-charcoal font-bold text-[13px] mb-1">Reflexiona:</p>
                  <p className="text-charcoal text-[13px]">
                    Si eres una "creación maestra" con un código único, planeada cuidadosamente por el Gran Diseñador del universo... ¿Cómo deberías valorar y proteger tu propio "reino" todos los días a través de lo que comes, lo que respiras y cuánto descansas?
                  </p>
                </div>
              </section>
            </BookPage>
          </>
        )}
      </BookLayout>

      {/* AR Scanner Overlay (For mobile/camera testing) */}
      <ARScanner 
        isOpen={isScannerOpen} 
        onClose={() => setIsScannerOpen(false)} 
      />

      {/* Digital Hologram Overlay (For evaluator/desktop) */}
      <DigitalHologram 
        isOpen={isHologramOpen}
        onClose={() => setIsHologramOpen(false)}
        type={hologramType}
      />
    </div>
  );
}

// Iconos y Componentes de Organelas (Recreados en SVG desde la foto)
const OrganelleItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border border-charcoal/5 hover:border-charcoal/20 transition-colors">
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-charcoal text-[11px] leading-tight mb-0.5">{title}</h4>
      <p className="text-[9px] text-charcoal/70 leading-tight">{desc}</p>
    </div>
  </div>
);

const IconMembranaNaranja = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><rect x="10" y="30" width="80" height="15" fill="#E67E22" rx="4"/><rect x="10" y="55" width="80" height="15" fill="#E67E22" rx="4"/></svg>;
const IconParedNaranja = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><rect x="10" y="20" width="80" height="60" fill="#D35400" rx="4"/><path d="M10 40h80M10 60h80M30 20v20M60 20v20M45 40v20M75 40v20M30 60v20M60 60v20" stroke="#FDF2E9" strokeWidth="3"/></svg>;
const IconCitoplasmaAmarillo = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><circle cx="50" cy="50" r="40" fill="#FAD7A1"/><circle cx="30" cy="40" r="4" fill="#E67E22"/><circle cx="70" cy="50" r="4" fill="#E67E22"/><circle cx="45" cy="70" r="4" fill="#E67E22"/><circle cx="55" cy="30" r="4" fill="#E67E22"/></svg>;
const IconNucleoide = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><path d="M30 50 Q40 20 60 40 T70 60 T40 80 T30 50" fill="none" stroke="#D35400" strokeWidth="5" strokeLinecap="round"/></svg>;
const IconRibosomaNaranja = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><circle cx="30" cy="50" r="6" fill="#D35400"/><circle cx="50" cy="50" r="6" fill="#D35400"/><circle cx="70" cy="50" r="6" fill="#D35400"/></svg>;
const IconPili = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><path d="M20 50h60M30 50v-15M45 50v-15M60 50v-15M70 50v-15" stroke="#D35400" strokeWidth="4" strokeLinecap="round"/></svg>;

const IconNucleo = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><circle cx="50" cy="50" r="40" fill="#85C1E9"/><circle cx="50" cy="50" r="20" fill="#2874A6"/><circle cx="30" cy="30" r="4" fill="#D6EAF8"/><circle cx="70" cy="70" r="4" fill="#D6EAF8"/></svg>;
const IconCitoplasmaAzul = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><circle cx="50" cy="50" r="40" fill="#D6EAF8"/><circle cx="30" cy="40" r="4" fill="#85C1E9"/><circle cx="70" cy="50" r="4" fill="#85C1E9"/><circle cx="45" cy="70" r="4" fill="#85C1E9"/></svg>;
const IconRibosomaAzul = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><circle cx="30" cy="50" r="6" fill="#85C1E9"/><circle cx="50" cy="50" r="6" fill="#85C1E9"/><circle cx="70" cy="50" r="6" fill="#85C1E9"/></svg>;
const IconMitocondria = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><rect x="15" y="30" width="70" height="40" rx="20" fill="#E67E22"/><path d="M25 50 Q35 30 45 50 T65 50 T75 50" fill="none" stroke="#FDF2E9" strokeWidth="3" strokeLinecap="round"/></svg>;
const IconGolgi = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><path d="M20 35 Q50 15 80 35M20 50 Q50 30 80 50M20 65 Q50 45 80 65" fill="none" stroke="#85C1E9" strokeWidth="8" strokeLinecap="round"/></svg>;
const IconCloroplasto = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><rect x="15" y="30" width="70" height="40" rx="20" fill="#82E0AA"/><rect x="30" y="40" width="10" height="20" fill="#229954" rx="2"/><rect x="45" y="40" width="10" height="20" fill="#229954" rx="2"/><rect x="60" y="40" width="10" height="20" fill="#229954" rx="2"/></svg>;
const IconParedVerde = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><rect x="10" y="20" width="80" height="60" fill="#82E0AA" rx="4"/><path d="M10 40h80M10 60h80M30 20v20M60 20v20M45 40v20M75 40v20M30 60v20M60 60v20" stroke="#E9F7EF" strokeWidth="3"/></svg>;
const IconVacuola = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><path d="M20 50 C20 20, 80 20, 80 50 C80 80, 20 80, 20 50" fill="#D6EAF8" stroke="#85C1E9" strokeWidth="4"/></svg>;
const IconMembranaVerde = () => <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm"><rect x="10" y="30" width="80" height="15" fill="#82E0AA" rx="4"/><rect x="10" y="55" width="80" height="15" fill="#82E0AA" rx="4"/></svg>;

