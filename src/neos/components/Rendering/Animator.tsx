import { member, Member, Component } from "../../core";
    
    export interface AnimatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Clip?: member<any>;
Fields?: member<any>;
    }
    
    export function Animator(props: AnimatorInput){
      const { id, persistentId, updateOrder, Enabled,
Clip,
Fields, } = props;
    
      return (
        <Component type="FrooxEngine.Animator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Animation]`} name="Clip" id={typeof Clip === "object" && "id" in Clip ? Clip?.id : undefined} value={typeof Clip === "object" && "value" in Clip ? Clip?.value : Clip} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.DriveRef\`1[FrooxEngine.IField]]`} name="Fields" id={typeof Fields === "object" && "id" in Fields ? Fields?.id : undefined} value={typeof Fields === "object" && "value" in Fields ? Fields?.value : Fields} /* default: FrooxEngine.SyncList`1[FrooxEngine.DriveRef`1[FrooxEngine.IField]] */  />
        </Component>
      );
    };
    