import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface UserspaceScreensManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_unreadIndicator?: member<any>;
    }
    
    export function UserspaceScreensManager(props: UserspaceScreensManagerInput){
      const { id, persistentId, updateOrder, Enabled,
_unreadIndicator, } = props;
    
      return (
        <Component type="FrooxEngine.UserspaceScreensManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_unreadIndicator" id={typeof _unreadIndicator === "object" && "id" in _unreadIndicator ? _unreadIndicator?.id : undefined} value={typeof _unreadIndicator === "object" && "value" in _unreadIndicator ? _unreadIndicator?.value : _unreadIndicator} /* default: ID0 */  />
        </Component>
      );
    };
    