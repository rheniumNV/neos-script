import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface MaterialSetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ActiveSetIndex?: member<number>;
Target?: member<any>;
    }
    
    export function MaterialSet(props: MaterialSetInput){
      const { id, persistentId, updateOrder, Enabled,
ActiveSetIndex,
Target, } = props;
    
      return (
        <Component type="FrooxEngine.MaterialSet" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ActiveSetIndex" id={typeof ActiveSetIndex === "object" && "id" in ActiveSetIndex ? ActiveSetIndex?.id : undefined} value={typeof ActiveSetIndex === "object" && "value" in ActiveSetIndex ? ActiveSetIndex?.value : ActiveSetIndex} /* default: 0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SyncAssetList\`1[FrooxEngine.Material]]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
        </Component>
      );
    };
    