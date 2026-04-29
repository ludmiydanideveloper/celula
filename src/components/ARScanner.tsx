"use client";

import React, { useEffect, useRef, useState } from 'react';
import { X, Camera, ShieldAlert, Zap, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ARScannerProps {
  isOpen: boolean;
  onClose: () => void;
  targetImage?: string;
}

export default function ARScanner({ isOpen, onClose, targetImage }: ARScannerProps) {
  const [isStarted, setIsStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sceneRef = useRef<any>(null);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      return /android|iphone|ipad|ipod/i.test(userAgent);
    };
    setIsMobile(checkMobile());
  }, []);

  useEffect(() => {
    if (isOpen && isMobile) {
      const timer = setTimeout(() => {
        setIsStarted(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsStarted(false);
    }
  }, [isOpen, isMobile]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Tactical HUD Overlay */}
        <div className="absolute inset-0 z-50 pointer-events-none border-[10px] md:border-[20px] border-charcoal/30 flex flex-col justify-between p-6 md:p-10">
          <div className="flex justify-between items-start pointer-events-auto">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-highlight-yellow font-black text-lg md:text-xl tracking-tighter">
                <Zap className="w-5 h-5 md:w-6 md:h-6 fill-highlight-yellow" />
                SISTEMA AR v1.0
              </div>
              <div className="text-white/50 text-[10px] font-mono">
                {isMobile ? 'ESTADO: CÁMARA ACTIVA' : 'ESTADO: ESPERANDO CONEXIÓN MÓVIL'}
              </div>
            </div>
            <button 
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-colors"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Center Content based on device */}
          {!isMobile && !isStarted ? (
            <div className="flex flex-col items-center gap-6 pointer-events-auto">
               <div className="bg-white p-4 rounded-2xl shadow-[0_0_50px_rgba(255,215,0,0.2)] border-2 border-highlight-yellow overflow-hidden">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    alt="Scan me"
                    className="w-40 h-40"
                  />
               </div>
               <div className="text-center space-y-2">
                  <h3 className="text-white font-bold text-xl uppercase tracking-tighter">Conectar Dispositivo</h3>
                  <p className="text-white/60 text-xs max-w-xs mx-auto leading-relaxed">
                    Escanea este código con tu celular para activar el visor AR y apuntar a la pantalla.
                  </p>
               </div>
               <button 
                onClick={() => setIsStarted(true)}
                className="text-[10px] text-highlight-yellow/50 hover:text-highlight-yellow underline transition-colors"
               >
                 Usar webcam de la compu (No recomendado)
               </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
               <div className="w-48 h-48 md:w-64 md:h-64 border-2 border-dashed border-highlight-yellow/40 rounded-3xl relative">
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-highlight-yellow" />
                  <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-highlight-yellow" />
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-highlight-yellow" />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-highlight-yellow" />
               </div>
               <p className="text-white font-bold text-center max-w-xs text-xs md:text-sm uppercase tracking-widest animate-pulse">
                  Apunta a la imagen en la pantalla o el libro
               </p>
            </div>
          )}

          <div className="flex justify-between items-end">
             <div className="hidden md:block bg-charcoal/60 backdrop-blur-md p-4 rounded-lg border border-white/10 text-white font-mono text-[10px]">
                <p>DEV_TYPE: {isMobile ? 'MOBILE_LENS' : 'DESKTOP_HOST'}</p>
                <p>SIGNAL: STABLE</p>
                <p>RECOGNITION: ENABLED</p>
             </div>
             <div className="flex flex-col items-end w-full md:w-auto">
                <div className="text-white/30 text-[8px] mb-1 uppercase tracking-widest font-black">Powered by MindAR</div>
                <div className="w-full md:w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2 }}
                    className="h-full bg-highlight-yellow shadow-[0_0_10px_#FFD700]" 
                   />
                </div>
             </div>
          </div>
        </div>

        {/* MindAR / A-Frame Scene */}
        {isStarted && (
          <div className="absolute inset-0 w-full h-full">
            {/* 
                Nota: Usamos un iframe o un div con dangerouslySetInnerHTML 
                porque A-Frame inyecta elementos globales que pueden entrar en conflicto con React.
                Para esta implementación, usaremos los tags directamente.
            */}
            <a-scene 
              mindar-image="imageTargetSrc: /targets.mind; autoStart: true; uiScanning: no;" 
              color-space="sRGB" 
              renderer="colorManagement: true, physicallyCorrectLights" 
              vr-mode-ui="enabled: false" 
              device-orientation-permission-ui="enabled: false"
              className="w-full h-full"
            >
              <a-assets>
                {/* Aquí irían los modelos 3D reales */}
                <a-asset-item id="cellModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/image-tracking/assets/card-example/softbar/scene.gltf"></a-asset-item>
              </a-assets>

              <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: ${customFields.lib64}; objects: .clickable"></a-camera>

              {/* Target 0 (Procariota) */}
              <a-entity mindar-image-target="targetIndex: 0">
                <a-sphere position="0 0 0" radius="0.5" color="#E67E22" opacity="0.8" animation="property: rotation; to: 0 360 0; dur: 5000; easing: linear; loop: true">
                    <a-torus position="0 0 0" radius="0.6" radius-tubular="0.01" color="#F1C40F" rotation="90 0 0"></a-torus>
                </a-sphere>
                <a-text value="PROCARIOTA" align="center" position="0 0.8 0" color="#FFFFFF" width="4"></a-text>
              </a-entity>

              {/* Target 1 (Eucariota) */}
              <a-entity mindar-image-target="targetIndex: 1">
                <a-sphere position="0 0 0" radius="0.5" color="#3498DB" opacity="0.8" animation="property: rotation; to: 0 360 0; dur: 5000; easing: linear; loop: true">
                    <a-sphere position="0 0 0" radius="0.2" color="#2980B9"></a-sphere>
                </a-sphere>
                <a-text value="EUCARIOTA" align="center" position="0 0.8 0" color="#FFFFFF" width="4"></a-text>
              </a-entity>
            </a-scene>
          </div>
        )}

        {/* Fallback Message if no camera */}
        {!isStarted && (
          <div className="text-white text-center flex flex-col items-center gap-4">
             <Camera className="w-12 h-12 text-white/20 animate-pulse" />
             <p className="font-mono text-sm">INICIALIZANDO SISTEMA ÓPTICO...</p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
