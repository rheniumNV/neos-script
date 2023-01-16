import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AuthorityTimeBaseInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
BaseSpeed?: member<number>;
_actualSpeed?: member<number>;
_actualOffset?: member<number>;
    }
    
    export function AuthorityTimeBase(props: AuthorityTimeBaseInput){
      const { id, persistentId, updateOrder, Enabled,
BaseSpeed,
_actualSpeed,
_actualOffset, } = props;
    
      return (
        <Component type="FrooxEngine.AuthorityTimeBase" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BaseSpeed" id={typeof BaseSpeed === "object" && "id" in BaseSpeed ? BaseSpeed?.id : undefined} value={typeof BaseSpeed === "object" && "value" in BaseSpeed ? BaseSpeed?.value : BaseSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_actualSpeed" id={typeof _actualSpeed === "object" && "id" in _actualSpeed ? _actualSpeed?.id : undefined} value={typeof _actualSpeed === "object" && "value" in _actualSpeed ? _actualSpeed?.value : _actualSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="_actualOffset" id={typeof _actualOffset === "object" && "id" in _actualOffset ? _actualOffset?.id : undefined} value={typeof _actualOffset === "object" && "value" in _actualOffset ? _actualOffset?.value : _actualOffset} /* default: 0 */  />
        </Component>
      );
    };
    