import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ButtonAudioClipPlayerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ParentUnder?: member<any>;
MinDistance?: member<any>;
MaxDistance?: member<any>;
RolloffMode?: member<any>;
    }
    
    export function ButtonAudioClipPlayer(props: ButtonAudioClipPlayerInput){
      const { id, persistentId, updateOrder, Enabled,
ParentUnder,
MinDistance,
MaxDistance,
RolloffMode, } = props;
    
      return (
        <Component type="FrooxEngine.ButtonAudioClipPlayer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ParentUnder" id={typeof ParentUnder === "object" && "id" in ParentUnder ? ParentUnder?.id : undefined} value={typeof ParentUnder === "object" && "value" in ParentUnder ? ParentUnder?.value : ParentUnder} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="MinDistance" id={typeof MinDistance === "object" && "id" in MinDistance ? MinDistance?.id : undefined} value={typeof MinDistance === "object" && "value" in MinDistance ? MinDistance?.value : MinDistance} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[FrooxEngine.AudioRolloffMode]]`} name="RolloffMode" id={typeof RolloffMode === "object" && "id" in RolloffMode ? RolloffMode?.id : undefined} value={typeof RolloffMode === "object" && "value" in RolloffMode ? RolloffMode?.value : RolloffMode} /* default: <i>null</i> */  />
        </Component>
      );
    };
    