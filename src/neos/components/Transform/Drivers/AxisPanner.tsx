import { member, Member, Component } from "../../../core";
    
    export interface AxisPannerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TimeBase?: member<any>;
Speed?: member<number>;
Range?: member<number>;
Offset?: member<[number, number, number]>;
Axis?: member<[number, number, number]>;
ReferenceScale?: member<[number, number, number]>;
FullScaleRangeRatio?: member<number>;
_position?: member<any>;
_scale?: member<any>;
    }
    
    export function AxisPanner(props: AxisPannerInput){
      const { id, persistentId, updateOrder, Enabled,
TimeBase,
Speed,
Range,
Offset,
Axis,
ReferenceScale,
FullScaleRangeRatio,
_position,
_scale, } = props;
    
      return (
        <Component type="FrooxEngine.AxisPanner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IValue\`1[System.Double]]`} name="TimeBase" id={typeof TimeBase === "object" && "id" in TimeBase ? TimeBase?.id : undefined} value={typeof TimeBase === "object" && "value" in TimeBase ? TimeBase?.value : TimeBase} /* default: ID0 */  isRaw={typeof TimeBase === "object" && "isRaw" in TimeBase && TimeBase.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Speed" id={typeof Speed === "object" && "id" in Speed ? Speed?.id : undefined} value={typeof Speed === "object" && "value" in Speed ? Speed?.value : Speed} /* default: 0 */  isRaw={typeof Speed === "object" && "isRaw" in Speed && Speed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Range" id={typeof Range === "object" && "id" in Range ? Range?.id : undefined} value={typeof Range === "object" && "value" in Range ? Range?.value : Range} /* default: 0 */  isRaw={typeof Range === "object" && "isRaw" in Range && Range.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: [0; 0; 0] */  isRaw={typeof Offset === "object" && "isRaw" in Offset && Offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Axis" id={typeof Axis === "object" && "id" in Axis ? Axis?.id : undefined} value={typeof Axis === "object" && "value" in Axis ? Axis?.value : Axis} /* default: [0; 0; 0] */  isRaw={typeof Axis === "object" && "isRaw" in Axis && Axis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="ReferenceScale" id={typeof ReferenceScale === "object" && "id" in ReferenceScale ? ReferenceScale?.id : undefined} value={typeof ReferenceScale === "object" && "value" in ReferenceScale ? ReferenceScale?.value : ReferenceScale} /* default: [0; 0; 0] */  isRaw={typeof ReferenceScale === "object" && "isRaw" in ReferenceScale && ReferenceScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FullScaleRangeRatio" id={typeof FullScaleRangeRatio === "object" && "id" in FullScaleRangeRatio ? FullScaleRangeRatio?.id : undefined} value={typeof FullScaleRangeRatio === "object" && "value" in FullScaleRangeRatio ? FullScaleRangeRatio?.value : FullScaleRangeRatio} /* default: 0 */  isRaw={typeof FullScaleRangeRatio === "object" && "isRaw" in FullScaleRangeRatio && FullScaleRangeRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_position" id={typeof _position === "object" && "id" in _position ? _position?.id : undefined} value={typeof _position === "object" && "value" in _position ? _position?.value : _position} /* default: ID0 */  isRaw={typeof _position === "object" && "isRaw" in _position && _position.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_scale" id={typeof _scale === "object" && "id" in _scale ? _scale?.id : undefined} value={typeof _scale === "object" && "value" in _scale ? _scale?.value : _scale} /* default: ID0 */  isRaw={typeof _scale === "object" && "isRaw" in _scale && _scale.isRaw ? true : undefined} />
        </Component>
      );
    };
    