import { member, Member, Component } from "../../core";
    
    export interface FontMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OutlineThickness?: member<number>;
OutlineColor?: member<[number, number, number, number]>;
FaceSoftness?: member<number>;
FaceDilate?: member<number>;
Culling?: member<any>;
ZTest?: member<any>;
RenderQueue?: member<number>;
_convertedMaterial?: member<any>;
    }
    
    export function FontMaterial(props: FontMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
OutlineThickness,
OutlineColor,
FaceSoftness,
FaceDilate,
Culling,
ZTest,
RenderQueue,
_convertedMaterial, } = props;
    
      return (
        <Component type="FrooxEngine.FontMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OutlineThickness" id={typeof OutlineThickness === "object" && "id" in OutlineThickness ? OutlineThickness?.id : undefined} value={typeof OutlineThickness === "object" && "value" in OutlineThickness ? OutlineThickness?.value : OutlineThickness} /* default: 0 */  isRaw={typeof OutlineThickness === "object" && "isRaw" in OutlineThickness && OutlineThickness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="OutlineColor" id={typeof OutlineColor === "object" && "id" in OutlineColor ? OutlineColor?.id : undefined} value={typeof OutlineColor === "object" && "value" in OutlineColor ? OutlineColor?.value : OutlineColor} /* default: [0; 0; 0; 0] */  isRaw={typeof OutlineColor === "object" && "isRaw" in OutlineColor && OutlineColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FaceSoftness" id={typeof FaceSoftness === "object" && "id" in FaceSoftness ? FaceSoftness?.id : undefined} value={typeof FaceSoftness === "object" && "value" in FaceSoftness ? FaceSoftness?.value : FaceSoftness} /* default: 0 */  isRaw={typeof FaceSoftness === "object" && "isRaw" in FaceSoftness && FaceSoftness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FaceDilate" id={typeof FaceDilate === "object" && "id" in FaceDilate ? FaceDilate?.id : undefined} value={typeof FaceDilate === "object" && "value" in FaceDilate ? FaceDilate?.value : FaceDilate} /* default: 0 */  isRaw={typeof FaceDilate === "object" && "isRaw" in FaceDilate && FaceDilate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Culling]`} name="Culling" id={typeof Culling === "object" && "id" in Culling ? Culling?.id : undefined} value={typeof Culling === "object" && "value" in Culling ? Culling?.value : Culling} /* default: Off */  isRaw={typeof Culling === "object" && "isRaw" in Culling && Culling.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZTest]`} name="ZTest" id={typeof ZTest === "object" && "id" in ZTest ? ZTest?.id : undefined} value={typeof ZTest === "object" && "value" in ZTest ? ZTest?.value : ZTest} /* default: Less */  isRaw={typeof ZTest === "object" && "isRaw" in ZTest && ZTest.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextUnlitMaterial]`} name="_convertedMaterial" id={typeof _convertedMaterial === "object" && "id" in _convertedMaterial ? _convertedMaterial?.id : undefined} value={typeof _convertedMaterial === "object" && "value" in _convertedMaterial ? _convertedMaterial?.value : _convertedMaterial} /* default: ID0 */  isRaw={typeof _convertedMaterial === "object" && "isRaw" in _convertedMaterial && _convertedMaterial.isRaw ? true : undefined} />
        </Component>
      );
    };
    