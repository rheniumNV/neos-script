import { member, Member, Component } from "../../core";
    
    export interface CommentInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Text?: member<any>;
    }
    
    export function Comment(props: CommentInput){
      const { id, persistentId, updateOrder, Enabled,
Text, } = props;
    
      return (
        <Component type="FrooxEngine.Comment" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Text" id={typeof Text === "object" && "id" in Text ? Text?.id : undefined} value={typeof Text === "object" && "value" in Text ? Text?.value : Text} /* default: <i>null</i> */  isRaw={typeof Text === "object" && "isRaw" in Text && Text.isRaw ? true : undefined} />
        </Component>
      );
    };
    