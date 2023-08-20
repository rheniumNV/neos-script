import { member, Member, Component } from "../../../core";
    
    export interface ReferenceRadio_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
CheckVisual?: member<any>;
OptionReference?: member<any>;
TargetReference?: member<any>;
    }
    
    export function ReferenceRadio_T(props: ReferenceRadio_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
CheckVisual,
OptionReference,
TargetReference, } = props;
    
      return (
        <Component type={`FrooxEngine.UIX.ReferenceRadio\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="CheckVisual" id={typeof CheckVisual === "object" && "id" in CheckVisual ? CheckVisual?.id : undefined} value={typeof CheckVisual === "object" && "value" in CheckVisual ? CheckVisual?.value : CheckVisual} /* default: null */  isRaw={typeof CheckVisual === "object" && "isRaw" in CheckVisual && CheckVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="OptionReference" id={typeof OptionReference === "object" && "id" in OptionReference ? OptionReference?.id : undefined} value={typeof OptionReference === "object" && "value" in OptionReference ? OptionReference?.value : OptionReference} /* default: null */  isRaw={typeof OptionReference === "object" && "isRaw" in OptionReference && OptionReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.SyncRef\`1[${T}]]`} name="TargetReference" id={typeof TargetReference === "object" && "id" in TargetReference ? TargetReference?.id : undefined} value={typeof TargetReference === "object" && "value" in TargetReference ? TargetReference?.value : TargetReference} /* default: null */  isRaw={typeof TargetReference === "object" && "isRaw" in TargetReference && TargetReference.isRaw ? true : undefined} />
        </Component>
      );
    };
    