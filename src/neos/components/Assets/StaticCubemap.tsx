import { member, Member, Component } from "../../core";
    
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  isRaw={typeof URL === "object" && "isRaw" in URL && URL.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureFilterMode]`} name="FilterMode" id={typeof FilterMode === "object" && "id" in FilterMode ? FilterMode?.id : undefined} value={typeof FilterMode === "object" && "value" in FilterMode ? FilterMode?.value : FilterMode} /* default: Point */  isRaw={typeof FilterMode === "object" && "isRaw" in FilterMode && FilterMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="AnisotropicLevel" id={typeof AnisotropicLevel === "object" && "id" in AnisotropicLevel ? AnisotropicLevel?.id : undefined} value={typeof AnisotropicLevel === "object" && "value" in AnisotropicLevel ? AnisotropicLevel?.value : AnisotropicLevel} /* default: 0 */  isRaw={typeof AnisotropicLevel === "object" && "isRaw" in AnisotropicLevel && AnisotropicLevel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Uncompressed" id={typeof Uncompressed === "object" && "id" in Uncompressed ? Uncompressed?.id : undefined} value={typeof Uncompressed === "object" && "value" in Uncompressed ? Uncompressed?.value : Uncompressed} /* default: false */  isRaw={typeof Uncompressed === "object" && "isRaw" in Uncompressed && Uncompressed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DirectLoad" id={typeof DirectLoad === "object" && "id" in DirectLoad ? DirectLoad?.id : undefined} value={typeof DirectLoad === "object" && "value" in DirectLoad ? DirectLoad?.value : DirectLoad} /* default: false */  isRaw={typeof DirectLoad === "object" && "isRaw" in DirectLoad && DirectLoad.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceExactVariant" id={typeof ForceExactVariant === "object" && "id" in ForceExactVariant ? ForceExactVariant?.id : undefined} value={typeof ForceExactVariant === "object" && "value" in ForceExactVariant ? ForceExactVariant?.value : ForceExactVariant} /* default: false */  isRaw={typeof ForceExactVariant === "object" && "isRaw" in ForceExactVariant && ForceExactVariant.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[CodeX.TextureCompression]]`} name="PreferredFormat" id={typeof PreferredFormat === "object" && "id" in PreferredFormat ? PreferredFormat?.id : undefined} value={typeof PreferredFormat === "object" && "value" in PreferredFormat ? PreferredFormat?.value : PreferredFormat} /* default: <i>null</i> */  isRaw={typeof PreferredFormat === "object" && "isRaw" in PreferredFormat && PreferredFormat.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MipMapBias" id={typeof MipMapBias === "object" && "id" in MipMapBias ? MipMapBias?.id : undefined} value={typeof MipMapBias === "object" && "value" in MipMapBias ? MipMapBias?.value : MipMapBias} /* default: 0 */  isRaw={typeof MipMapBias === "object" && "isRaw" in MipMapBias && MipMapBias.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Int32]]`} name="MaxSize" id={typeof MaxSize === "object" && "id" in MaxSize ? MaxSize?.id : undefined} value={typeof MaxSize === "object" && "value" in MaxSize ? MaxSize?.value : MaxSize} /* default: <i>null</i> */  isRaw={typeof MaxSize === "object" && "isRaw" in MaxSize && MaxSize.isRaw ? true : undefined} />
        </Component>
      );
    };
    