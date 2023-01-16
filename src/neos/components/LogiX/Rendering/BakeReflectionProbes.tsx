import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface BakeReflectionProbesInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Root?: member<any>;
BakeInactive?: member<any>;
FilterWithTag?: member<any>;
DelayBeforeBake?: member<any>;
OnBakeBatchStart?: member<any>;
OnBeforeProbeBake?: member<any>;
OnProbeBaked?: member<any>;
OnBakeBatchFinished?: member<any>;
_probe?: member<any>;
_isBaking?: member<boolean>;
_probeCount?: member<number>;
_probeIndex?: member<number>;
    }
    
    export function BakeReflectionProbes(props: BakeReflectionProbesInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Root,
BakeInactive,
FilterWithTag,
DelayBeforeBake,
OnBakeBatchStart,
OnBeforeProbeBake,
OnProbeBaked,
OnBakeBatchFinished,
_probe,
_isBaking,
_probeCount,
_probeIndex, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Rendering.BakeReflectionProbes" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="BakeInactive" id={typeof BakeInactive === "object" && "id" in BakeInactive ? BakeInactive?.id : undefined} value={typeof BakeInactive === "object" && "value" in BakeInactive ? BakeInactive?.value : BakeInactive} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="FilterWithTag" id={typeof FilterWithTag === "object" && "id" in FilterWithTag ? FilterWithTag?.id : undefined} value={typeof FilterWithTag === "object" && "value" in FilterWithTag ? FilterWithTag?.value : FilterWithTag} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="DelayBeforeBake" id={typeof DelayBeforeBake === "object" && "id" in DelayBeforeBake ? DelayBeforeBake?.id : undefined} value={typeof DelayBeforeBake === "object" && "value" in DelayBeforeBake ? DelayBeforeBake?.value : DelayBeforeBake} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnBakeBatchStart" id={typeof OnBakeBatchStart === "object" && "id" in OnBakeBatchStart ? OnBakeBatchStart?.id : undefined} value={typeof OnBakeBatchStart === "object" && "value" in OnBakeBatchStart ? OnBakeBatchStart?.value : OnBakeBatchStart} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnBeforeProbeBake" id={typeof OnBeforeProbeBake === "object" && "id" in OnBeforeProbeBake ? OnBeforeProbeBake?.id : undefined} value={typeof OnBeforeProbeBake === "object" && "value" in OnBeforeProbeBake ? OnBeforeProbeBake?.value : OnBeforeProbeBake} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnProbeBaked" id={typeof OnProbeBaked === "object" && "id" in OnProbeBaked ? OnProbeBaked?.id : undefined} value={typeof OnProbeBaked === "object" && "value" in OnProbeBaked ? OnProbeBaked?.value : OnProbeBaked} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnBakeBatchFinished" id={typeof OnBakeBatchFinished === "object" && "id" in OnBakeBatchFinished ? OnBakeBatchFinished?.id : undefined} value={typeof OnBakeBatchFinished === "object" && "value" in OnBakeBatchFinished ? OnBakeBatchFinished?.value : OnBakeBatchFinished} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ReflectionProbe]`} name="_probe-ID" id={typeof _probe === "object" && "id" in _probe ? _probe?.id : undefined} value={typeof _probe === "object" && "value" in _probe ? _probe?.value : _probe} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isBaking-ID" id={typeof _isBaking === "object" && "id" in _isBaking ? _isBaking?.id : undefined} value={typeof _isBaking === "object" && "value" in _isBaking ? _isBaking?.value : _isBaking} /* default: false */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_probeCount-ID" id={typeof _probeCount === "object" && "id" in _probeCount ? _probeCount?.id : undefined} value={typeof _probeCount === "object" && "value" in _probeCount ? _probeCount?.value : _probeCount} /* default: 0 */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_probeIndex-ID" id={typeof _probeIndex === "object" && "id" in _probeIndex ? _probeIndex?.id : undefined} value={typeof _probeIndex === "object" && "value" in _probeIndex ? _probeIndex?.value : _probeIndex} /* default: 0 */ idOnly />
        </Component>
      );
    };
    