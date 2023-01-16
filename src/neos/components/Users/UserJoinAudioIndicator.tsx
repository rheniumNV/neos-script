import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface UserJoinAudioIndicatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Spatialize?: member<boolean>;
Volume?: member<number>;
    }
    
    export function UserJoinAudioIndicator(props: UserJoinAudioIndicatorInput){
      const { id, persistentId, updateOrder, Enabled,
Spatialize,
Volume, } = props;
    
      return (
        <Component type="FrooxEngine.UserJoinAudioIndicator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Spatialize" id={typeof Spatialize === "object" && "id" in Spatialize ? Spatialize?.id : undefined} value={typeof Spatialize === "object" && "value" in Spatialize ? Spatialize?.value : Spatialize} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Volume" id={typeof Volume === "object" && "id" in Volume ? Volume?.id : undefined} value={typeof Volume === "object" && "value" in Volume ? Volume?.value : Volume} /* default: 0 */  />
        </Component>
      );
    };
    