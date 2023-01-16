import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SimpleKeyboardMovementInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UserRoot?: member<any>;
RelativeToHead?: member<boolean>;
RelativeTo?: member<any>;
VerticalOnly?: member<boolean>;
SlowSpeed?: member<number>;
Speed?: member<number>;
FastSpeed?: member<number>;
AllowPitchRotation?: member<boolean>;
    }
    
    export function SimpleKeyboardMovement(props: SimpleKeyboardMovementInput){
      const { id, persistentId, updateOrder, Enabled,
UserRoot,
RelativeToHead,
RelativeTo,
VerticalOnly,
SlowSpeed,
Speed,
FastSpeed,
AllowPitchRotation, } = props;
    
      return (
        <Component type="FrooxEngine.SimpleKeyboardMovement" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UserRoot]`} name="UserRoot" id={typeof UserRoot === "object" && "id" in UserRoot ? UserRoot?.id : undefined} value={typeof UserRoot === "object" && "value" in UserRoot ? UserRoot?.value : UserRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RelativeToHead" id={typeof RelativeToHead === "object" && "id" in RelativeToHead ? RelativeToHead?.id : undefined} value={typeof RelativeToHead === "object" && "value" in RelativeToHead ? RelativeToHead?.value : RelativeToHead} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="RelativeTo" id={typeof RelativeTo === "object" && "id" in RelativeTo ? RelativeTo?.id : undefined} value={typeof RelativeTo === "object" && "value" in RelativeTo ? RelativeTo?.value : RelativeTo} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="VerticalOnly" id={typeof VerticalOnly === "object" && "id" in VerticalOnly ? VerticalOnly?.id : undefined} value={typeof VerticalOnly === "object" && "value" in VerticalOnly ? VerticalOnly?.value : VerticalOnly} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SlowSpeed" id={typeof SlowSpeed === "object" && "id" in SlowSpeed ? SlowSpeed?.id : undefined} value={typeof SlowSpeed === "object" && "value" in SlowSpeed ? SlowSpeed?.value : SlowSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Speed" id={typeof Speed === "object" && "id" in Speed ? Speed?.id : undefined} value={typeof Speed === "object" && "value" in Speed ? Speed?.value : Speed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FastSpeed" id={typeof FastSpeed === "object" && "id" in FastSpeed ? FastSpeed?.id : undefined} value={typeof FastSpeed === "object" && "value" in FastSpeed ? FastSpeed?.value : FastSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowPitchRotation" id={typeof AllowPitchRotation === "object" && "id" in AllowPitchRotation ? AllowPitchRotation?.id : undefined} value={typeof AllowPitchRotation === "object" && "value" in AllowPitchRotation ? AllowPitchRotation?.value : AllowPitchRotation} /* default: false */  />
        </Component>
      );
    };
    