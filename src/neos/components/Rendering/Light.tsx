import { member, Member, Component } from "../../core";
    
    export interface LightInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LightType?: member<any>;
Intensity?: member<number>;
Color?: member<[number, number, number, number]>;
ShadowType?: member<any>;
ShadowStrength?: member<number>;
ShadowNearPlane?: member<number>;
ShadowMapResolution?: member<number>;
Range?: member<number>;
SpotAngle?: member<number>;
Cookie?: member<any>;
    }
    
    export function Light(props: LightInput){
      const { id, persistentId, updateOrder, Enabled,
LightType,
Intensity,
Color,
ShadowType,
ShadowStrength,
ShadowNearPlane,
ShadowMapResolution,
Range,
SpotAngle,
Cookie, } = props;
    
      return (
        <Component type="FrooxEngine.Light" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.LightType]`} name="LightType" id={typeof LightType === "object" && "id" in LightType ? LightType?.id : undefined} value={typeof LightType === "object" && "value" in LightType ? LightType?.value : LightType} /* default: Point */  isRaw={typeof LightType === "object" && "isRaw" in LightType && LightType.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Intensity" id={typeof Intensity === "object" && "id" in Intensity ? Intensity?.id : undefined} value={typeof Intensity === "object" && "value" in Intensity ? Intensity?.value : Intensity} /* default: 0 */  isRaw={typeof Intensity === "object" && "isRaw" in Intensity && Intensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ShadowType]`} name="ShadowType" id={typeof ShadowType === "object" && "id" in ShadowType ? ShadowType?.id : undefined} value={typeof ShadowType === "object" && "value" in ShadowType ? ShadowType?.value : ShadowType} /* default: None */  isRaw={typeof ShadowType === "object" && "isRaw" in ShadowType && ShadowType.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShadowStrength" id={typeof ShadowStrength === "object" && "id" in ShadowStrength ? ShadowStrength?.id : undefined} value={typeof ShadowStrength === "object" && "value" in ShadowStrength ? ShadowStrength?.value : ShadowStrength} /* default: 0 */  isRaw={typeof ShadowStrength === "object" && "isRaw" in ShadowStrength && ShadowStrength.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShadowNearPlane" id={typeof ShadowNearPlane === "object" && "id" in ShadowNearPlane ? ShadowNearPlane?.id : undefined} value={typeof ShadowNearPlane === "object" && "value" in ShadowNearPlane ? ShadowNearPlane?.value : ShadowNearPlane} /* default: 0 */  isRaw={typeof ShadowNearPlane === "object" && "isRaw" in ShadowNearPlane && ShadowNearPlane.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ShadowMapResolution" id={typeof ShadowMapResolution === "object" && "id" in ShadowMapResolution ? ShadowMapResolution?.id : undefined} value={typeof ShadowMapResolution === "object" && "value" in ShadowMapResolution ? ShadowMapResolution?.value : ShadowMapResolution} /* default: 0 */  isRaw={typeof ShadowMapResolution === "object" && "isRaw" in ShadowMapResolution && ShadowMapResolution.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Range" id={typeof Range === "object" && "id" in Range ? Range?.id : undefined} value={typeof Range === "object" && "value" in Range ? Range?.value : Range} /* default: 0 */  isRaw={typeof Range === "object" && "isRaw" in Range && Range.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SpotAngle" id={typeof SpotAngle === "object" && "id" in SpotAngle ? SpotAngle?.id : undefined} value={typeof SpotAngle === "object" && "value" in SpotAngle ? SpotAngle?.value : SpotAngle} /* default: 0 */  isRaw={typeof SpotAngle === "object" && "isRaw" in SpotAngle && SpotAngle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture]`} name="Cookie" id={typeof Cookie === "object" && "id" in Cookie ? Cookie?.id : undefined} value={typeof Cookie === "object" && "value" in Cookie ? Cookie?.value : Cookie} /* default: ID0 */  isRaw={typeof Cookie === "object" && "isRaw" in Cookie && Cookie.isRaw ? true : undefined} />
        </Component>
      );
    };
    