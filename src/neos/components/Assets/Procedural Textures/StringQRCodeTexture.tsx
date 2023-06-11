import { member, Member, Component } from "../../../core";
    
    export interface StringQRCodeTextureInput {
        
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
Format?: member<any>;
Payload?: member<any>;
ECCLevel?: member<any>;
Color0?: member<[number, number, number, number]>;
Color1?: member<[number, number, number, number]>;
    }
    
    export function StringQRCodeTexture(props: StringQRCodeTextureInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
FilterMode,
AnisotropicLevel,
WrapModeU,
WrapModeV,
MipmapBias,
Format,
Payload,
ECCLevel,
Color0,
Color1, } = props;
    
      return (
        <Component type="FrooxEngine.StringQRCodeTexture" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureFilterMode]`} name="FilterMode" id={typeof FilterMode === "object" && "id" in FilterMode ? FilterMode?.id : undefined} value={typeof FilterMode === "object" && "value" in FilterMode ? FilterMode?.value : FilterMode} /* default: Point */  isRaw={typeof FilterMode === "object" && "isRaw" in FilterMode && FilterMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="AnisotropicLevel" id={typeof AnisotropicLevel === "object" && "id" in AnisotropicLevel ? AnisotropicLevel?.id : undefined} value={typeof AnisotropicLevel === "object" && "value" in AnisotropicLevel ? AnisotropicLevel?.value : AnisotropicLevel} /* default: 0 */  isRaw={typeof AnisotropicLevel === "object" && "isRaw" in AnisotropicLevel && AnisotropicLevel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`} name="WrapModeU" id={typeof WrapModeU === "object" && "id" in WrapModeU ? WrapModeU?.id : undefined} value={typeof WrapModeU === "object" && "value" in WrapModeU ? WrapModeU?.value : WrapModeU} /* default: Repeat */  isRaw={typeof WrapModeU === "object" && "isRaw" in WrapModeU && WrapModeU.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`} name="WrapModeV" id={typeof WrapModeV === "object" && "id" in WrapModeV ? WrapModeV?.id : undefined} value={typeof WrapModeV === "object" && "value" in WrapModeV ? WrapModeV?.value : WrapModeV} /* default: Repeat */  isRaw={typeof WrapModeV === "object" && "isRaw" in WrapModeV && WrapModeV.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MipmapBias" id={typeof MipmapBias === "object" && "id" in MipmapBias ? MipmapBias?.id : undefined} value={typeof MipmapBias === "object" && "value" in MipmapBias ? MipmapBias?.value : MipmapBias} /* default: 0 */  isRaw={typeof MipmapBias === "object" && "isRaw" in MipmapBias && MipmapBias.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[CodeX.TextureFormat]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: Unknown */  isRaw={typeof Format === "object" && "isRaw" in Format && Format.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Payload" id={typeof Payload === "object" && "id" in Payload ? Payload?.id : undefined} value={typeof Payload === "object" && "value" in Payload ? Payload?.value : Payload} /* default: <i>null</i> */  isRaw={typeof Payload === "object" && "isRaw" in Payload && Payload.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[QRCoder.QRCodeGenerator+ECCLevel]`} name="ECCLevel" id={typeof ECCLevel === "object" && "id" in ECCLevel ? ECCLevel?.id : undefined} value={typeof ECCLevel === "object" && "value" in ECCLevel ? ECCLevel?.value : ECCLevel} /* default: L */  isRaw={typeof ECCLevel === "object" && "isRaw" in ECCLevel && ECCLevel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color0" id={typeof Color0 === "object" && "id" in Color0 ? Color0?.id : undefined} value={typeof Color0 === "object" && "value" in Color0 ? Color0?.value : Color0} /* default: [0; 0; 0; 0] */  isRaw={typeof Color0 === "object" && "isRaw" in Color0 && Color0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color1" id={typeof Color1 === "object" && "id" in Color1 ? Color1?.id : undefined} value={typeof Color1 === "object" && "value" in Color1 ? Color1?.value : Color1} /* default: [0; 0; 0; 0] */  isRaw={typeof Color1 === "object" && "isRaw" in Color1 && Color1.isRaw ? true : undefined} />
        </Component>
      );
    };
    