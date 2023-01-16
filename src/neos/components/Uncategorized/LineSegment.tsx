import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface LineSegmentInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Radius?: member<number>;
Sides?: member<number>;
Point0?: member<[number, number, number]>;
Point1?: member<[number, number, number]>;
Anchor0?: member<any>;
Anchor1?: member<any>;
_cylinder?: member<any>;
_collider?: member<any>;
_offset?: member<any>;
_rotation?: member<any>;
_visualScale?: member<any>;
    }
    
    export function LineSegment(props: LineSegmentInput){
      const { id, persistentId, updateOrder, Enabled,
Radius,
Sides,
Point0,
Point1,
Anchor0,
Anchor1,
_cylinder,
_collider,
_offset,
_rotation,
_visualScale, } = props;
    
      return (
        <Component type="FrooxEngine.LineSegment" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Sides" id={typeof Sides === "object" && "id" in Sides ? Sides?.id : undefined} value={typeof Sides === "object" && "value" in Sides ? Sides?.value : Sides} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Point0" id={typeof Point0 === "object" && "id" in Point0 ? Point0?.id : undefined} value={typeof Point0 === "object" && "value" in Point0 ? Point0?.value : Point0} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Point1" id={typeof Point1 === "object" && "id" in Point1 ? Point1?.id : undefined} value={typeof Point1 === "object" && "value" in Point1 ? Point1?.value : Point1} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.TransformRelayRef`} name="Anchor0" id={typeof Anchor0 === "object" && "id" in Anchor0 ? Anchor0?.id : undefined} value={typeof Anchor0 === "object" && "value" in Anchor0 ? Anchor0?.value : Anchor0} /* default: ID0 */  />
<Member type={`FrooxEngine.TransformRelayRef`} name="Anchor1" id={typeof Anchor1 === "object" && "id" in Anchor1 ? Anchor1?.id : undefined} value={typeof Anchor1 === "object" && "value" in Anchor1 ? Anchor1?.value : Anchor1} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.CylinderMesh]`} name="_cylinder" id={typeof _cylinder === "object" && "id" in _cylinder ? _cylinder?.id : undefined} value={typeof _cylinder === "object" && "value" in _cylinder ? _cylinder?.value : _cylinder} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.CylinderCollider]`} name="_collider" id={typeof _collider === "object" && "id" in _collider ? _collider?.id : undefined} value={typeof _collider === "object" && "value" in _collider ? _collider?.value : _collider} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_offset" id={typeof _offset === "object" && "id" in _offset ? _offset?.id : undefined} value={typeof _offset === "object" && "value" in _offset ? _offset?.value : _offset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotation" id={typeof _rotation === "object" && "id" in _rotation ? _rotation?.id : undefined} value={typeof _rotation === "object" && "value" in _rotation ? _rotation?.value : _rotation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_visualScale" id={typeof _visualScale === "object" && "id" in _visualScale ? _visualScale?.id : undefined} value={typeof _visualScale === "object" && "value" in _visualScale ? _visualScale?.value : _visualScale} /* default: ID0 */  />
        </Component>
      );
    };
    