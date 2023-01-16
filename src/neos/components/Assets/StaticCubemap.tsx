import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface StaticCubemapInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
URL?: member<any>;
FilterMode?: member<any>;
AnisotropicLevel?: member<number>;
Uncompressed?: member<boolean>;
DirectLoad?: member<boolean>;
ForceExactVariant?: member<boolean>;
PreferredFormat?: member<any>;
MipMapBias?: member<number>;
MaxSize?: member<any>;
    }
    
    export function StaticCubemap(props: StaticCubemapInput){
      const { id, persistentId, updateOrder, Enabled,
URL,
FilterMode,
AnisotropicLevel,
Uncompressed,
DirectLoad,
ForceExactVariant,
PreferredFormat,
MipMapBias,
MaxSize, } = props;
    
      return (
        <Component type="FrooxEngine.StaticCubemap" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureFilterMode]`} name="FilterMode" id={typeof FilterMode === "object" && "id" in FilterMode ? FilterMode?.id : undefined} value={typeof FilterMode === "object" && "value" in FilterMode ? FilterMode?.value : FilterMode} /* default: Point */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="AnisotropicLevel" id={typeof AnisotropicLevel === "object" && "id" in AnisotropicLevel ? AnisotropicLevel?.id : undefined} value={typeof AnisotropicLevel === "object" && "value" in AnisotropicLevel ? AnisotropicLevel?.value : AnisotropicLevel} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Uncompressed" id={typeof Uncompressed === "object" && "id" in Uncompressed ? Uncompressed?.id : undefined} value={typeof Uncompressed === "object" && "value" in Uncompressed ? Uncompressed?.value : Uncompressed} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DirectLoad" id={typeof DirectLoad === "object" && "id" in DirectLoad ? DirectLoad?.id : undefined} value={typeof DirectLoad === "object" && "value" in DirectLoad ? DirectLoad?.value : DirectLoad} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceExactVariant" id={typeof ForceExactVariant === "object" && "id" in ForceExactVariant ? ForceExactVariant?.id : undefined} value={typeof ForceExactVariant === "object" && "value" in ForceExactVariant ? ForceExactVariant?.value : ForceExactVariant} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[CodeX.TextureCompression]]`} name="PreferredFormat" id={typeof PreferredFormat === "object" && "id" in PreferredFormat ? PreferredFormat?.id : undefined} value={typeof PreferredFormat === "object" && "value" in PreferredFormat ? PreferredFormat?.value : PreferredFormat} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MipMapBias" id={typeof MipMapBias === "object" && "id" in MipMapBias ? MipMapBias?.id : undefined} value={typeof MipMapBias === "object" && "value" in MipMapBias ? MipMapBias?.value : MipMapBias} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Int32]]`} name="MaxSize" id={typeof MaxSize === "object" && "id" in MaxSize ? MaxSize?.id : undefined} value={typeof MaxSize === "object" && "value" in MaxSize ? MaxSize?.value : MaxSize} /* default: <i>null</i> */  />
        </Component>
      );
    };
    