import { member, Member, Component } from "../../../core";
    
    export interface ScalerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ScaleOffset?: member<[number, number, number]>;
ScaleMultiplier?: member<[number, number, number]>;
ScaleSource?: member<any>;
ScaleMode?: member<any>;
ScaleSpace?: member<any>;
scaleTarget?: member<any>;
    }
    
    export function Scaler(props: ScalerInput){
      const { id, persistentId, updateOrder, Enabled,
ScaleOffset,
ScaleMultiplier,
ScaleSource,
ScaleMode,
ScaleSpace,
scaleTarget, } = props;
    
      return (
        <Component type="FrooxEngine.Scaler" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="ScaleOffset" id={typeof ScaleOffset === "object" && "id" in ScaleOffset ? ScaleOffset?.id : undefined} value={typeof ScaleOffset === "object" && "value" in ScaleOffset ? ScaleOffset?.value : ScaleOffset} /* default: [0; 0; 0] */  isRaw={typeof ScaleOffset === "object" && "isRaw" in ScaleOffset && ScaleOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="ScaleMultiplier" id={typeof ScaleMultiplier === "object" && "id" in ScaleMultiplier ? ScaleMultiplier?.id : undefined} value={typeof ScaleMultiplier === "object" && "value" in ScaleMultiplier ? ScaleMultiplier?.value : ScaleMultiplier} /* default: [0; 0; 0] */  isRaw={typeof ScaleMultiplier === "object" && "isRaw" in ScaleMultiplier && ScaleMultiplier.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ScaleSource" id={typeof ScaleSource === "object" && "id" in ScaleSource ? ScaleSource?.id : undefined} value={typeof ScaleSource === "object" && "value" in ScaleSource ? ScaleSource?.value : ScaleSource} /* default: ID0 */  isRaw={typeof ScaleSource === "object" && "isRaw" in ScaleSource && ScaleSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Scaler+Mode]`} name="ScaleMode" id={typeof ScaleMode === "object" && "id" in ScaleMode ? ScaleMode?.id : undefined} value={typeof ScaleMode === "object" && "value" in ScaleMode ? ScaleMode?.value : ScaleMode} /* default: FullUniform */  isRaw={typeof ScaleMode === "object" && "isRaw" in ScaleMode && ScaleMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="ScaleSpace" id={typeof ScaleSpace === "object" && "id" in ScaleSpace ? ScaleSpace?.id : undefined} value={typeof ScaleSpace === "object" && "value" in ScaleSpace ? ScaleSpace?.value : ScaleSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof ScaleSpace === "object" && "isRaw" in ScaleSpace && ScaleSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="scaleTarget" id={typeof scaleTarget === "object" && "id" in scaleTarget ? scaleTarget?.id : undefined} value={typeof scaleTarget === "object" && "value" in scaleTarget ? scaleTarget?.value : scaleTarget} /* default: ID0 */  isRaw={typeof scaleTarget === "object" && "isRaw" in scaleTarget && scaleTarget.isRaw ? true : undefined} />
        </Component>
      );
    };
    