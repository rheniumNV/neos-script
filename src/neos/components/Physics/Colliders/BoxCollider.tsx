import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface BoxColliderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Offset?: member<[number, number, number]>;
Type?: member<any>;
Mass?: member<number>;
CharacterCollider?: member<boolean>;
IgnoreRaycasts?: member<boolean>;
Size?: member<[number, number, number]>;
    }
    
    export function BoxCollider(props: BoxColliderInput){
      const { id, persistentId, updateOrder, Enabled,
Offset,
Type,
Mass,
CharacterCollider,
IgnoreRaycasts,
Size, } = props;
    
      return (
        <Component type="FrooxEngine.BoxCollider" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ColliderType]`} name="Type" id={typeof Type === "object" && "id" in Type ? Type?.id : undefined} value={typeof Type === "object" && "value" in Type ? Type?.value : Type} /* default: NoCollision */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Mass" id={typeof Mass === "object" && "id" in Mass ? Mass?.id : undefined} value={typeof Mass === "object" && "value" in Mass ? Mass?.value : Mass} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CharacterCollider" id={typeof CharacterCollider === "object" && "id" in CharacterCollider ? CharacterCollider?.id : undefined} value={typeof CharacterCollider === "object" && "value" in CharacterCollider ? CharacterCollider?.value : CharacterCollider} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreRaycasts" id={typeof IgnoreRaycasts === "object" && "id" in IgnoreRaycasts ? IgnoreRaycasts?.id : undefined} value={typeof IgnoreRaycasts === "object" && "value" in IgnoreRaycasts ? IgnoreRaycasts?.value : IgnoreRaycasts} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: [0; 0; 0] */  />
        </Component>
      );
    };
    