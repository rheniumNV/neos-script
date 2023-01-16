import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TransformStreamDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PositionStream?: member<any>;
RotationStream?: member<any>;
ScaleStream?: member<any>;
RootSpaceStream?: member<any>;
Position?: member<any>;
Rotation?: member<any>;
Scale?: member<any>;
AllowOffsets?: member<boolean>;
ResetStreamsOnDestroy?: member<boolean>;
PositionOffset?: member<any>;
RotationOffset?: member<any>;
ScaleOffset?: member<any>;
RunBeforePhysics?: member<boolean>;
    }
    
    export function TransformStreamDriver(props: TransformStreamDriverInput){
      const { id, persistentId, updateOrder, Enabled,
PositionStream,
RotationStream,
ScaleStream,
RootSpaceStream,
Position,
Rotation,
Scale,
AllowOffsets,
ResetStreamsOnDestroy,
PositionOffset,
RotationOffset,
ScaleOffset,
RunBeforePhysics, } = props;
    
      return (
        <Component type="FrooxEngine.TransformStreamDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float3]]`} name="PositionStream" id={typeof PositionStream === "object" && "id" in PositionStream ? PositionStream?.id : undefined} value={typeof PositionStream === "object" && "value" in PositionStream ? PositionStream?.value : PositionStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.floatQ]]`} name="RotationStream" id={typeof RotationStream === "object" && "id" in RotationStream ? RotationStream?.id : undefined} value={typeof RotationStream === "object" && "value" in RotationStream ? RotationStream?.value : RotationStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float3]]`} name="ScaleStream" id={typeof ScaleStream === "object" && "id" in ScaleStream ? ScaleStream?.id : undefined} value={typeof ScaleStream === "object" && "value" in ScaleStream ? ScaleStream?.value : ScaleStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ReferenceStream\`1[FrooxEngine.Slot]]`} name="RootSpaceStream" id={typeof RootSpaceStream === "object" && "id" in RootSpaceStream ? RootSpaceStream?.id : undefined} value={typeof RootSpaceStream === "object" && "value" in RootSpaceStream ? RootSpaceStream?.value : RootSpaceStream} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="Position" id={typeof Position === "object" && "id" in Position ? Position?.id : undefined} value={typeof Position === "object" && "value" in Position ? Position?.value : Position} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="Rotation" id={typeof Rotation === "object" && "id" in Rotation ? Rotation?.id : undefined} value={typeof Rotation === "object" && "value" in Rotation ? Rotation?.value : Rotation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowOffsets" id={typeof AllowOffsets === "object" && "id" in AllowOffsets ? AllowOffsets?.id : undefined} value={typeof AllowOffsets === "object" && "value" in AllowOffsets ? AllowOffsets?.value : AllowOffsets} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ResetStreamsOnDestroy" id={typeof ResetStreamsOnDestroy === "object" && "id" in ResetStreamsOnDestroy ? ResetStreamsOnDestroy?.id : undefined} value={typeof ResetStreamsOnDestroy === "object" && "value" in ResetStreamsOnDestroy ? ResetStreamsOnDestroy?.value : ResetStreamsOnDestroy} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`} name="PositionOffset" id={typeof PositionOffset === "object" && "id" in PositionOffset ? PositionOffset?.id : undefined} value={typeof PositionOffset === "object" && "value" in PositionOffset ? PositionOffset?.value : PositionOffset} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.floatQ]]`} name="RotationOffset" id={typeof RotationOffset === "object" && "id" in RotationOffset ? RotationOffset?.id : undefined} value={typeof RotationOffset === "object" && "value" in RotationOffset ? RotationOffset?.value : RotationOffset} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`} name="ScaleOffset" id={typeof ScaleOffset === "object" && "id" in ScaleOffset ? ScaleOffset?.id : undefined} value={typeof ScaleOffset === "object" && "value" in ScaleOffset ? ScaleOffset?.value : ScaleOffset} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RunBeforePhysics" id={typeof RunBeforePhysics === "object" && "id" in RunBeforePhysics ? RunBeforePhysics?.id : undefined} value={typeof RunBeforePhysics === "object" && "value" in RunBeforePhysics ? RunBeforePhysics?.value : RunBeforePhysics} /* default: false */  />
        </Component>
      );
    };
    