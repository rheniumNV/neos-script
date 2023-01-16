import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface CharacterTeleporterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TriggersOnly?: member<boolean>;
MinimumVelocity?: member<number>;
DirectionReference?: member<[number, number, number]>;
MaxDirectionAngle?: member<number>;
IgnoreParentUser?: member<boolean>;
    }
    
    export function CharacterTeleporter(props: CharacterTeleporterInput){
      const { id, persistentId, updateOrder, Enabled,
TriggersOnly,
MinimumVelocity,
DirectionReference,
MaxDirectionAngle,
IgnoreParentUser, } = props;
    
      return (
        <Component type="FrooxEngine.CharacterTeleporter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TriggersOnly" id={typeof TriggersOnly === "object" && "id" in TriggersOnly ? TriggersOnly?.id : undefined} value={typeof TriggersOnly === "object" && "value" in TriggersOnly ? TriggersOnly?.value : TriggersOnly} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinimumVelocity" id={typeof MinimumVelocity === "object" && "id" in MinimumVelocity ? MinimumVelocity?.id : undefined} value={typeof MinimumVelocity === "object" && "value" in MinimumVelocity ? MinimumVelocity?.value : MinimumVelocity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="DirectionReference" id={typeof DirectionReference === "object" && "id" in DirectionReference ? DirectionReference?.id : undefined} value={typeof DirectionReference === "object" && "value" in DirectionReference ? DirectionReference?.value : DirectionReference} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxDirectionAngle" id={typeof MaxDirectionAngle === "object" && "id" in MaxDirectionAngle ? MaxDirectionAngle?.id : undefined} value={typeof MaxDirectionAngle === "object" && "value" in MaxDirectionAngle ? MaxDirectionAngle?.value : MaxDirectionAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreParentUser" id={typeof IgnoreParentUser === "object" && "id" in IgnoreParentUser ? IgnoreParentUser?.id : undefined} value={typeof IgnoreParentUser === "object" && "value" in IgnoreParentUser ? IgnoreParentUser?.value : IgnoreParentUser} /* default: false */  />
        </Component>
      );
    };
    