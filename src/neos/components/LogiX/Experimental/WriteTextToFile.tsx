import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface WriteTextToFileInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
String?: member<any>;
FilePath?: member<any>;
Append?: member<any>;
NewLine?: member<any>;
OnWriteStarted?: member<any>;
OnWriteFinished?: member<any>;
    }
    
    export function WriteTextToFile(props: WriteTextToFileInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
String,
FilePath,
Append,
NewLine,
OnWriteStarted,
OnWriteFinished, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Experimental.WriteTextToFile" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="String" id={typeof String === "object" && "id" in String ? String?.id : undefined} value={typeof String === "object" && "value" in String ? String?.value : String} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="FilePath" id={typeof FilePath === "object" && "id" in FilePath ? FilePath?.id : undefined} value={typeof FilePath === "object" && "value" in FilePath ? FilePath?.value : FilePath} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Append" id={typeof Append === "object" && "id" in Append ? Append?.id : undefined} value={typeof Append === "object" && "value" in Append ? Append?.value : Append} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="NewLine" id={typeof NewLine === "object" && "id" in NewLine ? NewLine?.id : undefined} value={typeof NewLine === "object" && "value" in NewLine ? NewLine?.value : NewLine} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnWriteStarted" id={typeof OnWriteStarted === "object" && "id" in OnWriteStarted ? OnWriteStarted?.id : undefined} value={typeof OnWriteStarted === "object" && "value" in OnWriteStarted ? OnWriteStarted?.value : OnWriteStarted} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnWriteFinished" id={typeof OnWriteFinished === "object" && "id" in OnWriteFinished ? OnWriteFinished?.id : undefined} value={typeof OnWriteFinished === "object" && "value" in OnWriteFinished ? OnWriteFinished?.value : OnWriteFinished} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    