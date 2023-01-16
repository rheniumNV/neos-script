import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface NoiseTextureInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
FilterMode?: member<any>;
AnisotropicLevel?: member<number>;
WrapModeU?: member<any>;
WrapModeV?: member<any>;
MipmapBias?: member<number>;
Size?: member<[number, number]>;
Mipmaps?: member<boolean>;
Format?: member<any>;
Seed?: member<number>;
Monochrome?: member<boolean>;
MonochromeMax?: member<[number, number, number, number]>;
MonochromeMin?: member<[number, number, number, number]>;
Bias?: member<number>;
Gain?: member<number>;
Clamp?: member<boolean>;
    }
    
    export function NoiseTexture(props: NoiseTextureInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
FilterMode,
AnisotropicLevel,
WrapModeU,
WrapModeV,
MipmapBias,
Size,
Mipmaps,
Format,
Seed,
Monochrome,
MonochromeMax,
MonochromeMin,
Bias,
Gain,
Clamp, } = props;
    
      return (
        <Component type="FrooxEngine.NoiseTexture" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureFilterMode]`} name="FilterMode" id={typeof FilterMode === "object" && "id" in FilterMode ? FilterMode?.id : undefined} value={typeof FilterMode === "object" && "value" in FilterMode ? FilterMode?.value : FilterMode} /* default: Point */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="AnisotropicLevel" id={typeof AnisotropicLevel === "object" && "id" in AnisotropicLevel ? AnisotropicLevel?.id : undefined} value={typeof AnisotropicLevel === "object" && "value" in AnisotropicLevel ? AnisotropicLevel?.value : AnisotropicLevel} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`} name="WrapModeU" id={typeof WrapModeU === "object" && "id" in WrapModeU ? WrapModeU?.id : undefined} value={typeof WrapModeU === "object" && "value" in WrapModeU ? WrapModeU?.value : WrapModeU} /* default: Repeat */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`} name="WrapModeV" id={typeof WrapModeV === "object" && "id" in WrapModeV ? WrapModeV?.id : undefined} value={typeof WrapModeV === "object" && "value" in WrapModeV ? WrapModeV?.value : WrapModeV} /* default: Repeat */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MipmapBias" id={typeof MipmapBias === "object" && "id" in MipmapBias ? MipmapBias?.id : undefined} value={typeof MipmapBias === "object" && "value" in MipmapBias ? MipmapBias?.value : MipmapBias} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.int2]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Mipmaps" id={typeof Mipmaps === "object" && "id" in Mipmaps ? Mipmaps?.id : undefined} value={typeof Mipmaps === "object" && "value" in Mipmaps ? Mipmaps?.value : Mipmaps} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[CodeX.TextureFormat]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: Unknown */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Seed" id={typeof Seed === "object" && "id" in Seed ? Seed?.id : undefined} value={typeof Seed === "object" && "value" in Seed ? Seed?.value : Seed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Monochrome" id={typeof Monochrome === "object" && "id" in Monochrome ? Monochrome?.id : undefined} value={typeof Monochrome === "object" && "value" in Monochrome ? Monochrome?.value : Monochrome} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="MonochromeMax" id={typeof MonochromeMax === "object" && "id" in MonochromeMax ? MonochromeMax?.id : undefined} value={typeof MonochromeMax === "object" && "value" in MonochromeMax ? MonochromeMax?.value : MonochromeMax} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="MonochromeMin" id={typeof MonochromeMin === "object" && "id" in MonochromeMin ? MonochromeMin?.id : undefined} value={typeof MonochromeMin === "object" && "value" in MonochromeMin ? MonochromeMin?.value : MonochromeMin} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Bias" id={typeof Bias === "object" && "id" in Bias ? Bias?.id : undefined} value={typeof Bias === "object" && "value" in Bias ? Bias?.value : Bias} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Gain" id={typeof Gain === "object" && "id" in Gain ? Gain?.id : undefined} value={typeof Gain === "object" && "value" in Gain ? Gain?.value : Gain} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Clamp" id={typeof Clamp === "object" && "id" in Clamp ? Clamp?.id : undefined} value={typeof Clamp === "object" && "value" in Clamp ? Clamp?.value : Clamp} /* default: false */  />
        </Component>
      );
    };
    