import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AvatarNameTagAssignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DequippedLabel?: member<any>;
    }
    
    export function AvatarNameTagAssigner(props: AvatarNameTagAssignerInput){
      const { id, persistentId, updateOrder, Enabled,
DequippedLabel, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarNameTagAssigner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="DequippedLabel" id={typeof DequippedLabel === "object" && "id" in DequippedLabel ? DequippedLabel?.id : undefined} value={typeof DequippedLabel === "object" && "value" in DequippedLabel ? DequippedLabel?.value : DequippedLabel} /* default: <i>null</i> */  />
        </Component>
      );
    };
    