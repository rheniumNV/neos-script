import { member, Member, Component } from "../../../../core";
    
    export interface SetUserScaleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
UserRoot?: member<any>;
Scale?: member<any>;
AnimationTime?: member<any>;
OnSet?: member<any>;
OnAnimationFinished?: member<any>;
    }
    
    export function SetUserScale(props: SetUserScaleInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
UserRoot,
Scale,
AnimationTime,
OnSet,
OnAnimationFinished, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.SetUserScale" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.UserRoot]`} name="UserRoot" id={typeof UserRoot === "object" && "id" in UserRoot ? UserRoot?.id : undefined} value={typeof UserRoot === "object" && "value" in UserRoot ? UserRoot?.value : UserRoot} /* default: ID0 */  isRaw={typeof UserRoot === "object" && "isRaw" in UserRoot && UserRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: ID0 */  isRaw={typeof Scale === "object" && "isRaw" in Scale && Scale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="AnimationTime" id={typeof AnimationTime === "object" && "id" in AnimationTime ? AnimationTime?.id : undefined} value={typeof AnimationTime === "object" && "value" in AnimationTime ? AnimationTime?.value : AnimationTime} /* default: ID0 */  isRaw={typeof AnimationTime === "object" && "isRaw" in AnimationTime && AnimationTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSet" id={typeof OnSet === "object" && "id" in OnSet ? OnSet?.id : undefined} value={typeof OnSet === "object" && "value" in OnSet ? OnSet?.value : OnSet} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnSet === "object" && "isRaw" in OnSet && OnSet.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnAnimationFinished" id={typeof OnAnimationFinished === "object" && "id" in OnAnimationFinished ? OnAnimationFinished?.id : undefined} value={typeof OnAnimationFinished === "object" && "value" in OnAnimationFinished ? OnAnimationFinished?.value : OnAnimationFinished} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnAnimationFinished === "object" && "isRaw" in OnAnimationFinished && OnAnimationFinished.isRaw ? true : undefined} />
        </Component>
      );
    };
    