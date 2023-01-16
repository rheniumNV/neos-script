import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface RemoteConnectionPointDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
FilterThreshold?: member<number>;
TargetPoint?: member<any>;
TargetVector?: member<[number, number, number]>;
TargetSize?: member<number>;
TargetOrientation?: member<any>;
LocalPoint?: member<any>;
LocalVector?: member<any>;
LocalOrientation?: member<any>;
LocalSize?: member<any>;
    }
    
    export function RemoteConnectionPointDriver(props: RemoteConnectionPointDriverInput){
      const { id, persistentId, updateOrder, Enabled,
FilterThreshold,
TargetPoint,
TargetVector,
TargetSize,
TargetOrientation,
LocalPoint,
LocalVector,
LocalOrientation,
LocalSize, } = props;
    
      return (
        <Component type="FrooxEngine.RemoteConnectionPointDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FilterThreshold" id={typeof FilterThreshold === "object" && "id" in FilterThreshold ? FilterThreshold?.id : undefined} value={typeof FilterThreshold === "object" && "value" in FilterThreshold ? FilterThreshold?.value : FilterThreshold} /* default: 0 */  />
<Member type={`FrooxEngine.TransformRelayRef`} name="TargetPoint" id={typeof TargetPoint === "object" && "id" in TargetPoint ? TargetPoint?.id : undefined} value={typeof TargetPoint === "object" && "value" in TargetPoint ? TargetPoint?.value : TargetPoint} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TargetVector" id={typeof TargetVector === "object" && "id" in TargetVector ? TargetVector?.id : undefined} value={typeof TargetVector === "object" && "value" in TargetVector ? TargetVector?.value : TargetVector} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TargetSize" id={typeof TargetSize === "object" && "id" in TargetSize ? TargetSize?.id : undefined} value={typeof TargetSize === "object" && "value" in TargetSize ? TargetSize?.value : TargetSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="TargetOrientation" id={typeof TargetOrientation === "object" && "id" in TargetOrientation ? TargetOrientation?.id : undefined} value={typeof TargetOrientation === "object" && "value" in TargetOrientation ? TargetOrientation?.value : TargetOrientation} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="LocalPoint" id={typeof LocalPoint === "object" && "id" in LocalPoint ? LocalPoint?.id : undefined} value={typeof LocalPoint === "object" && "value" in LocalPoint ? LocalPoint?.value : LocalPoint} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="LocalVector" id={typeof LocalVector === "object" && "id" in LocalVector ? LocalVector?.id : undefined} value={typeof LocalVector === "object" && "value" in LocalVector ? LocalVector?.value : LocalVector} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="LocalOrientation" id={typeof LocalOrientation === "object" && "id" in LocalOrientation ? LocalOrientation?.id : undefined} value={typeof LocalOrientation === "object" && "value" in LocalOrientation ? LocalOrientation?.value : LocalOrientation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="LocalSize" id={typeof LocalSize === "object" && "id" in LocalSize ? LocalSize?.id : undefined} value={typeof LocalSize === "object" && "value" in LocalSize ? LocalSize?.value : LocalSize} /* default: ID0 */  />
        </Component>
      );
    };
    