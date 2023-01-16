import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface IndexOfStringInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Str?: member<any>;
Part?: member<any>;
StartIndex?: member<any>;
SearchFromEnd?: member<any>;
    }
    
    export function IndexOfString(props: IndexOfStringInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Str,
Part,
StartIndex,
SearchFromEnd, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.IndexOfString" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Str" id={typeof Str === "object" && "id" in Str ? Str?.id : undefined} value={typeof Str === "object" && "value" in Str ? Str?.value : Str} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Part" id={typeof Part === "object" && "id" in Part ? Part?.id : undefined} value={typeof Part === "object" && "value" in Part ? Part?.value : Part} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="StartIndex" id={typeof StartIndex === "object" && "id" in StartIndex ? StartIndex?.id : undefined} value={typeof StartIndex === "object" && "value" in StartIndex ? StartIndex?.value : StartIndex} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="SearchFromEnd" id={typeof SearchFromEnd === "object" && "id" in SearchFromEnd ? SearchFromEnd?.id : undefined} value={typeof SearchFromEnd === "object" && "value" in SearchFromEnd ? SearchFromEnd?.value : SearchFromEnd} /* default: ID0 */  />
        </Component>
      );
    };
    