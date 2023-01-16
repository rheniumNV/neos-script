import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface HoverPlaybackInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
Trigger?: member<any>;
FromBeginning?: member<boolean>;
Loop?: member<boolean>;
    }
    
    export function HoverPlayback(props: HoverPlaybackInput){
      const { id, persistentId, updateOrder, Enabled,
Target,
Trigger,
FromBeginning,
Loop, } = props;
    
      return (
        <Component type="FrooxEngine.HoverPlayback" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SyncPlayback]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.HoverPlayback+PlayTrigger]`} name="Trigger" id={typeof Trigger === "object" && "id" in Trigger ? Trigger?.id : undefined} value={typeof Trigger === "object" && "value" in Trigger ? Trigger?.value : Trigger} /* default: Hover */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FromBeginning" id={typeof FromBeginning === "object" && "id" in FromBeginning ? FromBeginning?.id : undefined} value={typeof FromBeginning === "object" && "value" in FromBeginning ? FromBeginning?.value : FromBeginning} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Loop" id={typeof Loop === "object" && "id" in Loop ? Loop?.id : undefined} value={typeof Loop === "object" && "value" in Loop ? Loop?.value : Loop} /* default: false */  />
        </Component>
      );
    };
    