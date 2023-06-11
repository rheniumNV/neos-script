import { member, Member, Component } from "../../../core";
    
    export interface ConvexHullColliderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Offset?: member<[number, number, number]>;
Type?: member<any>;
Mass?: member<number>;
CharacterCollider?: member<boolean>;
IgnoreRaycasts?: member<boolean>;
Mesh?: member<any>;
    }
    
    export function ConvexHullCollider(props: ConvexHullColliderInput){
      const { id, persistentId, updateOrder, Enabled,
Offset,
Type,
Mass,
CharacterCollider,
IgnoreRaycasts,
Mesh, } = props;
    
      return (
        <Component type="FrooxEngine.ConvexHullCollider" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: [0; 0; 0] */  isRaw={typeof Offset === "object" && "isRaw" in Offset && Offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ColliderType]`} name="Type" id={typeof Type === "object" && "id" in Type ? Type?.id : undefined} value={typeof Type === "object" && "value" in Type ? Type?.value : Type} /* default: NoCollision */  isRaw={typeof Type === "object" && "isRaw" in Type && Type.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Mass" id={typeof Mass === "object" && "id" in Mass ? Mass?.id : undefined} value={typeof Mass === "object" && "value" in Mass ? Mass?.value : Mass} /* default: 0 */  isRaw={typeof Mass === "object" && "isRaw" in Mass && Mass.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CharacterCollider" id={typeof CharacterCollider === "object" && "id" in CharacterCollider ? CharacterCollider?.id : undefined} value={typeof CharacterCollider === "object" && "value" in CharacterCollider ? CharacterCollider?.value : CharacterCollider} /* default: false */  isRaw={typeof CharacterCollider === "object" && "isRaw" in CharacterCollider && CharacterCollider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreRaycasts" id={typeof IgnoreRaycasts === "object" && "id" in IgnoreRaycasts ? IgnoreRaycasts?.id : undefined} value={typeof IgnoreRaycasts === "object" && "value" in IgnoreRaycasts ? IgnoreRaycasts?.value : IgnoreRaycasts} /* default: false */  isRaw={typeof IgnoreRaycasts === "object" && "isRaw" in IgnoreRaycasts && IgnoreRaycasts.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Mesh]`} name="Mesh" id={typeof Mesh === "object" && "id" in Mesh ? Mesh?.id : undefined} value={typeof Mesh === "object" && "value" in Mesh ? Mesh?.value : Mesh} /* default: ID0 */  isRaw={typeof Mesh === "object" && "isRaw" in Mesh && Mesh.isRaw ? true : undefined} />
        </Component>
      );
    };
    