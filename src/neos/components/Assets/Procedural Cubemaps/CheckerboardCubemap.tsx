import { member, Member, Component } from "../../../core";
    
    export interface CheckerboardCubemapInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
FilterMode?: member<any>;
AnisotropicLevel?: member<number>;
MipmapBias?: member<number>;
Size?: member<number>;
Mipmaps?: member<boolean>;
Format?: member<any>;
CheckerSize?: member<number>;
PosX_Color0?: member<[number, number, number, number]>;
PosX_Color1?: member<[number, number, number, number]>;
NegX_Color0?: member<[number, number, number, number]>;
NegX_Color1?: member<[number, number, number, number]>;
PosY_Color0?: member<[number, number, number, number]>;
PosY_Color1?: member<[number, number, number, number]>;
NegY_Color0?: member<[number, number, number, number]>;
NegY_Color1?: member<[number, number, number, number]>;
PosZ_Color0?: member<[number, number, number, number]>;
PosZ_Color1?: member<[number, number, number, number]>;
NegZ_Color0?: member<[number, number, number, number]>;
NegZ_Color1?: member<[number, number, number, number]>;
    }
    
    export function CheckerboardCubemap(props: CheckerboardCubemapInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
FilterMode,
AnisotropicLevel,
MipmapBias,
Size,
Mipmaps,
Format,
CheckerSize,
PosX_Color0,
PosX_Color1,
NegX_Color0,
NegX_Color1,
PosY_Color0,
PosY_Color1,
NegY_Color0,
NegY_Color1,
PosZ_Color0,
PosZ_Color1,
NegZ_Color0,
NegZ_Color1, } = props;
    
      return (
        <Component type="FrooxEngine.CheckerboardCubemap" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureFilterMode]`} name="FilterMode" id={typeof FilterMode === "object" && "id" in FilterMode ? FilterMode?.id : undefined} value={typeof FilterMode === "object" && "value" in FilterMode ? FilterMode?.value : FilterMode} /* default: Point */  isRaw={typeof FilterMode === "object" && "isRaw" in FilterMode && FilterMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="AnisotropicLevel" id={typeof AnisotropicLevel === "object" && "id" in AnisotropicLevel ? AnisotropicLevel?.id : undefined} value={typeof AnisotropicLevel === "object" && "value" in AnisotropicLevel ? AnisotropicLevel?.value : AnisotropicLevel} /* default: 0 */  isRaw={typeof AnisotropicLevel === "object" && "isRaw" in AnisotropicLevel && AnisotropicLevel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MipmapBias" id={typeof MipmapBias === "object" && "id" in MipmapBias ? MipmapBias?.id : undefined} value={typeof MipmapBias === "object" && "value" in MipmapBias ? MipmapBias?.value : MipmapBias} /* default: 0 */  isRaw={typeof MipmapBias === "object" && "isRaw" in MipmapBias && MipmapBias.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: 0 */  isRaw={typeof Size === "object" && "isRaw" in Size && Size.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Mipmaps" id={typeof Mipmaps === "object" && "id" in Mipmaps ? Mipmaps?.id : undefined} value={typeof Mipmaps === "object" && "value" in Mipmaps ? Mipmaps?.value : Mipmaps} /* default: false */  isRaw={typeof Mipmaps === "object" && "isRaw" in Mipmaps && Mipmaps.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[CodeX.TextureFormat]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: Unknown */  isRaw={typeof Format === "object" && "isRaw" in Format && Format.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="CheckerSize" id={typeof CheckerSize === "object" && "id" in CheckerSize ? CheckerSize?.id : undefined} value={typeof CheckerSize === "object" && "value" in CheckerSize ? CheckerSize?.value : CheckerSize} /* default: 0 */  isRaw={typeof CheckerSize === "object" && "isRaw" in CheckerSize && CheckerSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="PosX_Color0" id={typeof PosX_Color0 === "object" && "id" in PosX_Color0 ? PosX_Color0?.id : undefined} value={typeof PosX_Color0 === "object" && "value" in PosX_Color0 ? PosX_Color0?.value : PosX_Color0} /* default: [0; 0; 0; 0] */  isRaw={typeof PosX_Color0 === "object" && "isRaw" in PosX_Color0 && PosX_Color0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="PosX_Color1" id={typeof PosX_Color1 === "object" && "id" in PosX_Color1 ? PosX_Color1?.id : undefined} value={typeof PosX_Color1 === "object" && "value" in PosX_Color1 ? PosX_Color1?.value : PosX_Color1} /* default: [0; 0; 0; 0] */  isRaw={typeof PosX_Color1 === "object" && "isRaw" in PosX_Color1 && PosX_Color1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NegX_Color0" id={typeof NegX_Color0 === "object" && "id" in NegX_Color0 ? NegX_Color0?.id : undefined} value={typeof NegX_Color0 === "object" && "value" in NegX_Color0 ? NegX_Color0?.value : NegX_Color0} /* default: [0; 0; 0; 0] */  isRaw={typeof NegX_Color0 === "object" && "isRaw" in NegX_Color0 && NegX_Color0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NegX_Color1" id={typeof NegX_Color1 === "object" && "id" in NegX_Color1 ? NegX_Color1?.id : undefined} value={typeof NegX_Color1 === "object" && "value" in NegX_Color1 ? NegX_Color1?.value : NegX_Color1} /* default: [0; 0; 0; 0] */  isRaw={typeof NegX_Color1 === "object" && "isRaw" in NegX_Color1 && NegX_Color1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="PosY_Color0" id={typeof PosY_Color0 === "object" && "id" in PosY_Color0 ? PosY_Color0?.id : undefined} value={typeof PosY_Color0 === "object" && "value" in PosY_Color0 ? PosY_Color0?.value : PosY_Color0} /* default: [0; 0; 0; 0] */  isRaw={typeof PosY_Color0 === "object" && "isRaw" in PosY_Color0 && PosY_Color0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="PosY_Color1" id={typeof PosY_Color1 === "object" && "id" in PosY_Color1 ? PosY_Color1?.id : undefined} value={typeof PosY_Color1 === "object" && "value" in PosY_Color1 ? PosY_Color1?.value : PosY_Color1} /* default: [0; 0; 0; 0] */  isRaw={typeof PosY_Color1 === "object" && "isRaw" in PosY_Color1 && PosY_Color1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NegY_Color0" id={typeof NegY_Color0 === "object" && "id" in NegY_Color0 ? NegY_Color0?.id : undefined} value={typeof NegY_Color0 === "object" && "value" in NegY_Color0 ? NegY_Color0?.value : NegY_Color0} /* default: [0; 0; 0; 0] */  isRaw={typeof NegY_Color0 === "object" && "isRaw" in NegY_Color0 && NegY_Color0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NegY_Color1" id={typeof NegY_Color1 === "object" && "id" in NegY_Color1 ? NegY_Color1?.id : undefined} value={typeof NegY_Color1 === "object" && "value" in NegY_Color1 ? NegY_Color1?.value : NegY_Color1} /* default: [0; 0; 0; 0] */  isRaw={typeof NegY_Color1 === "object" && "isRaw" in NegY_Color1 && NegY_Color1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="PosZ_Color0" id={typeof PosZ_Color0 === "object" && "id" in PosZ_Color0 ? PosZ_Color0?.id : undefined} value={typeof PosZ_Color0 === "object" && "value" in PosZ_Color0 ? PosZ_Color0?.value : PosZ_Color0} /* default: [0; 0; 0; 0] */  isRaw={typeof PosZ_Color0 === "object" && "isRaw" in PosZ_Color0 && PosZ_Color0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="PosZ_Color1" id={typeof PosZ_Color1 === "object" && "id" in PosZ_Color1 ? PosZ_Color1?.id : undefined} value={typeof PosZ_Color1 === "object" && "value" in PosZ_Color1 ? PosZ_Color1?.value : PosZ_Color1} /* default: [0; 0; 0; 0] */  isRaw={typeof PosZ_Color1 === "object" && "isRaw" in PosZ_Color1 && PosZ_Color1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NegZ_Color0" id={typeof NegZ_Color0 === "object" && "id" in NegZ_Color0 ? NegZ_Color0?.id : undefined} value={typeof NegZ_Color0 === "object" && "value" in NegZ_Color0 ? NegZ_Color0?.value : NegZ_Color0} /* default: [0; 0; 0; 0] */  isRaw={typeof NegZ_Color0 === "object" && "isRaw" in NegZ_Color0 && NegZ_Color0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NegZ_Color1" id={typeof NegZ_Color1 === "object" && "id" in NegZ_Color1 ? NegZ_Color1?.id : undefined} value={typeof NegZ_Color1 === "object" && "value" in NegZ_Color1 ? NegZ_Color1?.value : NegZ_Color1} /* default: [0; 0; 0; 0] */  isRaw={typeof NegZ_Color1 === "object" && "isRaw" in NegZ_Color1 && NegZ_Color1.isRaw ? true : undefined} />
        </Component>
      );
    };
    