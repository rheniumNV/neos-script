import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ConfirmationHandlerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Label?: member<any>;
Color?: member<any>;
OriginalLabel?: member<any>;
OriginalColor?: member<[number, number, number, number]>;
    }
    
    export function ConfirmationHandler(props: ConfirmationHandlerInput){
      const { id, persistentId, updateOrder, Enabled,
Label,
Color,
OriginalLabel,
OriginalColor, } = props;
    
      return (
        <Component type="FrooxEngine.ConfirmationHandler" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.String]]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[BaseX.color]]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="OriginalLabel" id={typeof OriginalLabel === "object" && "id" in OriginalLabel ? OriginalLabel?.id : undefined} value={typeof OriginalLabel === "object" && "value" in OriginalLabel ? OriginalLabel?.value : OriginalLabel} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="OriginalColor" id={typeof OriginalColor === "object" && "id" in OriginalColor ? OriginalColor?.id : undefined} value={typeof OriginalColor === "object" && "value" in OriginalColor ? OriginalColor?.value : OriginalColor} /* default: [0; 0; 0; 0] */  />
        </Component>
      );
    };
    