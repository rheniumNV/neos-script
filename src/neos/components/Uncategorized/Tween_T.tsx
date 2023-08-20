import { member, Member, Component } from "../../core";
    
    export interface Tween_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
User?: member<any>;
Target?: member<any>;
OnlyUnderParent?: member<any>;
From?: member<any>;
To?: member<any>;
StartTime?: member<number>;
Duration?: member<number>;
Curve?: member<any>;
LocalCallback?: member<boolean>;
OnDone?: member<any>;
    }
    
    export function Tween_T(props: Tween_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
User,
Target,
OnlyUnderParent,
From,
To,
StartTime,
Duration,
Curve,
LocalCallback,
OnDone, } = props;
    
      return (
        <Component type={`FrooxEngine.Tween\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: null */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[${T}]]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="OnlyUnderParent" id={typeof OnlyUnderParent === "object" && "id" in OnlyUnderParent ? OnlyUnderParent?.id : undefined} value={typeof OnlyUnderParent === "object" && "value" in OnlyUnderParent ? OnlyUnderParent?.value : OnlyUnderParent} /* default: null */  isRaw={typeof OnlyUnderParent === "object" && "isRaw" in OnlyUnderParent && OnlyUnderParent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="From" id={typeof From === "object" && "id" in From ? From?.id : undefined} value={typeof From === "object" && "value" in From ? From?.value : From} /* default: null */  isRaw={typeof From === "object" && "isRaw" in From && From.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="To" id={typeof To === "object" && "id" in To ? To?.id : undefined} value={typeof To === "object" && "value" in To ? To?.value : To} /* default: null */  isRaw={typeof To === "object" && "isRaw" in To && To.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="StartTime" id={typeof StartTime === "object" && "id" in StartTime ? StartTime?.id : undefined} value={typeof StartTime === "object" && "value" in StartTime ? StartTime?.value : StartTime} /* default: null */  isRaw={typeof StartTime === "object" && "isRaw" in StartTime && StartTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Duration" id={typeof Duration === "object" && "id" in Duration ? Duration?.id : undefined} value={typeof Duration === "object" && "value" in Duration ? Duration?.value : Duration} /* default: null */  isRaw={typeof Duration === "object" && "isRaw" in Duration && Duration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CurvePreset]`} name="Curve" id={typeof Curve === "object" && "id" in Curve ? Curve?.id : undefined} value={typeof Curve === "object" && "value" in Curve ? Curve?.value : Curve} /* default: null */  isRaw={typeof Curve === "object" && "isRaw" in Curve && Curve.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LocalCallback" id={typeof LocalCallback === "object" && "id" in LocalCallback ? LocalCallback?.id : undefined} value={typeof LocalCallback === "object" && "value" in LocalCallback ? LocalCallback?.value : LocalCallback} /* default: null */  isRaw={typeof LocalCallback === "object" && "isRaw" in LocalCallback && LocalCallback.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action]`} name="OnDone" id={typeof OnDone === "object" && "id" in OnDone ? OnDone?.id : undefined} value={typeof OnDone === "object" && "value" in OnDone ? OnDone?.value : OnDone} /* default: null */  isRaw={typeof OnDone === "object" && "isRaw" in OnDone && OnDone.isRaw ? true : undefined} />
        </Component>
      );
    };
    