declare module "@react-three/postprocessing" {
  export const EffectComposer: any;
  export const Bloom: any;
  export const ToneMapping: any;
}

declare module "postprocessing" {
  export const BlendFunction: {
    SCREEN: number;
    ADD: number;
    NORMAL: number;
  };
}