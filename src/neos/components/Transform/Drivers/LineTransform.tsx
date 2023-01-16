import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface LineTransformInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Point0?: member<[number, number, number]>;
Point1?: member<[number, number, number]>;
Point0Anchor?: member<any>;
Point1Anchor?: member<any>;
LinePositionType?: member<any>;
PlanePositionType?: member<any>;
LinePoint?: member<number>;
OffsetPoint?: member<[number, number, number]>;
RotationOffset?: member<any>;
_position?: member<any>;
_rotation?: member<any>;
AllowRepositioning?: member<boolean>;
RepositionOffset?: member<boolean>;
    }
    
    export function LineTransform(props: LineTransformInput){
      const { id, persistentId, updateOrder, Enabled,
Point0,
Point1,
Point0Anchor,
Point1Anchor,
LinePositionType,
PlanePositionType,
LinePoint,
OffsetPoint,
RotationOffset,
_position,
_rotation,
AllowRepositioning,
RepositionOffset, } = props;
    
      return (
        <Component type="FrooxEngine.LineTransform" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Point0" id={typeof Point0 === "object" && "id" in Point0 ? Point0?.id : undefined} value={typeof Point0 === "object" && "value" in Point0 ? Point0?.value : Point0} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Point1" id={typeof Point1 === "object" && "id" in Point1 ? Point1?.id : undefined} value={typeof Point1 === "object" && "value" in Point1 ? Point1?.value : Point1} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.TransformRelayRef`} name="Point0Anchor" id={typeof Point0Anchor === "object" && "id" in Point0Anchor ? Point0Anchor?.id : undefined} value={typeof Point0Anchor === "object" && "value" in Point0Anchor ? Point0Anchor?.value : Point0Anchor} /* default: ID0 */  />
<Member type={`FrooxEngine.TransformRelayRef`} name="Point1Anchor" id={typeof Point1Anchor === "object" && "id" in Point1Anchor ? Point1Anchor?.id : undefined} value={typeof Point1Anchor === "object" && "value" in Point1Anchor ? Point1Anchor?.value : Point1Anchor} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PositionType]`} name="LinePositionType" id={typeof LinePositionType === "object" && "id" in LinePositionType ? LinePositionType?.id : undefined} value={typeof LinePositionType === "object" && "value" in LinePositionType ? LinePositionType?.value : LinePositionType} /* default: Relative */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PositionType]`} name="PlanePositionType" id={typeof PlanePositionType === "object" && "id" in PlanePositionType ? PlanePositionType?.id : undefined} value={typeof PlanePositionType === "object" && "value" in PlanePositionType ? PlanePositionType?.value : PlanePositionType} /* default: Relative */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LinePoint" id={typeof LinePoint === "object" && "id" in LinePoint ? LinePoint?.id : undefined} value={typeof LinePoint === "object" && "value" in LinePoint ? LinePoint?.value : LinePoint} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="OffsetPoint" id={typeof OffsetPoint === "object" && "id" in OffsetPoint ? OffsetPoint?.id : undefined} value={typeof OffsetPoint === "object" && "value" in OffsetPoint ? OffsetPoint?.value : OffsetPoint} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="RotationOffset" id={typeof RotationOffset === "object" && "id" in RotationOffset ? RotationOffset?.id : undefined} value={typeof RotationOffset === "object" && "value" in RotationOffset ? RotationOffset?.value : RotationOffset} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_position" id={typeof _position === "object" && "id" in _position ? _position?.id : undefined} value={typeof _position === "object" && "value" in _position ? _position?.value : _position} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotation" id={typeof _rotation === "object" && "id" in _rotation ? _rotation?.id : undefined} value={typeof _rotation === "object" && "value" in _rotation ? _rotation?.value : _rotation} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowRepositioning" id={typeof AllowRepositioning === "object" && "id" in AllowRepositioning ? AllowRepositioning?.id : undefined} value={typeof AllowRepositioning === "object" && "value" in AllowRepositioning ? AllowRepositioning?.value : AllowRepositioning} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RepositionOffset" id={typeof RepositionOffset === "object" && "id" in RepositionOffset ? RepositionOffset?.id : undefined} value={typeof RepositionOffset === "object" && "value" in RepositionOffset ? RepositionOffset?.value : RepositionOffset} /* default: false */  />
        </Component>
      );
    };
    