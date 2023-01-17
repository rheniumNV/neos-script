import { member, Member, Component } from "../../../core";
    
    export interface RayDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MaxDistance?: member<number>;
PointA?: member<any>;
PointB?: member<any>;
LocalOrigin?: member<[number, number, number]>;
LocalDirection?: member<[number, number, number]>;
    }
    
    export function RayDriver(props: RayDriverInput){
      const { id, persistentId, updateOrder, Enabled,
MaxDistance,
PointA,
PointB,
LocalOrigin,
LocalDirection, } = props;
    
      return (
        <Component type="FrooxEngine.RayDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: 0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[BaseX.float3]]`} name="PointA" id={typeof PointA === "object" && "id" in PointA ? PointA?.id : undefined} value={typeof PointA === "object" && "value" in PointA ? PointA?.value : PointA} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[BaseX.float3]]`} name="PointB" id={typeof PointB === "object" && "id" in PointB ? PointB?.id : undefined} value={typeof PointB === "object" && "value" in PointB ? PointB?.value : PointB} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LocalOrigin" id={typeof LocalOrigin === "object" && "id" in LocalOrigin ? LocalOrigin?.id : undefined} value={typeof LocalOrigin === "object" && "value" in LocalOrigin ? LocalOrigin?.value : LocalOrigin} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LocalDirection" id={typeof LocalDirection === "object" && "id" in LocalDirection ? LocalDirection?.id : undefined} value={typeof LocalDirection === "object" && "value" in LocalDirection ? LocalDirection?.value : LocalDirection} /* default: [0; 0; 0] */  />
        </Component>
      );
    };
    