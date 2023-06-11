import { member, Member, Component } from "../../../core";
    
    export interface MockupMouthTrackingSourceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Jaw?: member<[number, number, number]>;
JawOpen?: member<number>;
Tongue?: member<[number, number, number]>;
TongueRoll?: member<number>;
LipUpperLeftRaise?: member<number>;
LipUpperRightRaise?: member<number>;
LipLowerLeftRaise?: member<number>;
LipLowerRightRaise?: member<number>;
LipUpperHorizontal?: member<number>;
LipLowerHorizontal?: member<number>;
MouthLeftSmileFrown?: member<number>;
MouthRightSmileFrown?: member<number>;
MouthPout?: member<number>;
LipTopOverturn?: member<number>;
LipBottomOverturn?: member<number>;
LipTopOverUnder?: member<number>;
LipBottomOverUnder?: member<number>;
CheekLeftPuffSuck?: member<number>;
CheekRightPuffSuck?: member<number>;
    }
    
    export function MockupMouthTrackingSource(props: MockupMouthTrackingSourceInput){
      const { id, persistentId, updateOrder, Enabled,
Jaw,
JawOpen,
Tongue,
TongueRoll,
LipUpperLeftRaise,
LipUpperRightRaise,
LipLowerLeftRaise,
LipLowerRightRaise,
LipUpperHorizontal,
LipLowerHorizontal,
MouthLeftSmileFrown,
MouthRightSmileFrown,
MouthPout,
LipTopOverturn,
LipBottomOverturn,
LipTopOverUnder,
LipBottomOverUnder,
CheekLeftPuffSuck,
CheekRightPuffSuck, } = props;
    
      return (
        <Component type="FrooxEngine.MockupMouthTrackingSource" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Jaw" id={typeof Jaw === "object" && "id" in Jaw ? Jaw?.id : undefined} value={typeof Jaw === "object" && "value" in Jaw ? Jaw?.value : Jaw} /* default: [0; 0; 0] */  isRaw={typeof Jaw === "object" && "isRaw" in Jaw && Jaw.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="JawOpen" id={typeof JawOpen === "object" && "id" in JawOpen ? JawOpen?.id : undefined} value={typeof JawOpen === "object" && "value" in JawOpen ? JawOpen?.value : JawOpen} /* default: 0 */  isRaw={typeof JawOpen === "object" && "isRaw" in JawOpen && JawOpen.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Tongue" id={typeof Tongue === "object" && "id" in Tongue ? Tongue?.id : undefined} value={typeof Tongue === "object" && "value" in Tongue ? Tongue?.value : Tongue} /* default: [0; 0; 0] */  isRaw={typeof Tongue === "object" && "isRaw" in Tongue && Tongue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TongueRoll" id={typeof TongueRoll === "object" && "id" in TongueRoll ? TongueRoll?.id : undefined} value={typeof TongueRoll === "object" && "value" in TongueRoll ? TongueRoll?.value : TongueRoll} /* default: 0 */  isRaw={typeof TongueRoll === "object" && "isRaw" in TongueRoll && TongueRoll.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LipUpperLeftRaise" id={typeof LipUpperLeftRaise === "object" && "id" in LipUpperLeftRaise ? LipUpperLeftRaise?.id : undefined} value={typeof LipUpperLeftRaise === "object" && "value" in LipUpperLeftRaise ? LipUpperLeftRaise?.value : LipUpperLeftRaise} /* default: 0 */  isRaw={typeof LipUpperLeftRaise === "object" && "isRaw" in LipUpperLeftRaise && LipUpperLeftRaise.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LipUpperRightRaise" id={typeof LipUpperRightRaise === "object" && "id" in LipUpperRightRaise ? LipUpperRightRaise?.id : undefined} value={typeof LipUpperRightRaise === "object" && "value" in LipUpperRightRaise ? LipUpperRightRaise?.value : LipUpperRightRaise} /* default: 0 */  isRaw={typeof LipUpperRightRaise === "object" && "isRaw" in LipUpperRightRaise && LipUpperRightRaise.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LipLowerLeftRaise" id={typeof LipLowerLeftRaise === "object" && "id" in LipLowerLeftRaise ? LipLowerLeftRaise?.id : undefined} value={typeof LipLowerLeftRaise === "object" && "value" in LipLowerLeftRaise ? LipLowerLeftRaise?.value : LipLowerLeftRaise} /* default: 0 */  isRaw={typeof LipLowerLeftRaise === "object" && "isRaw" in LipLowerLeftRaise && LipLowerLeftRaise.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LipLowerRightRaise" id={typeof LipLowerRightRaise === "object" && "id" in LipLowerRightRaise ? LipLowerRightRaise?.id : undefined} value={typeof LipLowerRightRaise === "object" && "value" in LipLowerRightRaise ? LipLowerRightRaise?.value : LipLowerRightRaise} /* default: 0 */  isRaw={typeof LipLowerRightRaise === "object" && "isRaw" in LipLowerRightRaise && LipLowerRightRaise.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LipUpperHorizontal" id={typeof LipUpperHorizontal === "object" && "id" in LipUpperHorizontal ? LipUpperHorizontal?.id : undefined} value={typeof LipUpperHorizontal === "object" && "value" in LipUpperHorizontal ? LipUpperHorizontal?.value : LipUpperHorizontal} /* default: 0 */  isRaw={typeof LipUpperHorizontal === "object" && "isRaw" in LipUpperHorizontal && LipUpperHorizontal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LipLowerHorizontal" id={typeof LipLowerHorizontal === "object" && "id" in LipLowerHorizontal ? LipLowerHorizontal?.id : undefined} value={typeof LipLowerHorizontal === "object" && "value" in LipLowerHorizontal ? LipLowerHorizontal?.value : LipLowerHorizontal} /* default: 0 */  isRaw={typeof LipLowerHorizontal === "object" && "isRaw" in LipLowerHorizontal && LipLowerHorizontal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MouthLeftSmileFrown" id={typeof MouthLeftSmileFrown === "object" && "id" in MouthLeftSmileFrown ? MouthLeftSmileFrown?.id : undefined} value={typeof MouthLeftSmileFrown === "object" && "value" in MouthLeftSmileFrown ? MouthLeftSmileFrown?.value : MouthLeftSmileFrown} /* default: 0 */  isRaw={typeof MouthLeftSmileFrown === "object" && "isRaw" in MouthLeftSmileFrown && MouthLeftSmileFrown.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MouthRightSmileFrown" id={typeof MouthRightSmileFrown === "object" && "id" in MouthRightSmileFrown ? MouthRightSmileFrown?.id : undefined} value={typeof MouthRightSmileFrown === "object" && "value" in MouthRightSmileFrown ? MouthRightSmileFrown?.value : MouthRightSmileFrown} /* default: 0 */  isRaw={typeof MouthRightSmileFrown === "object" && "isRaw" in MouthRightSmileFrown && MouthRightSmileFrown.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MouthPout" id={typeof MouthPout === "object" && "id" in MouthPout ? MouthPout?.id : undefined} value={typeof MouthPout === "object" && "value" in MouthPout ? MouthPout?.value : MouthPout} /* default: 0 */  isRaw={typeof MouthPout === "object" && "isRaw" in MouthPout && MouthPout.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LipTopOverturn" id={typeof LipTopOverturn === "object" && "id" in LipTopOverturn ? LipTopOverturn?.id : undefined} value={typeof LipTopOverturn === "object" && "value" in LipTopOverturn ? LipTopOverturn?.value : LipTopOverturn} /* default: 0 */  isRaw={typeof LipTopOverturn === "object" && "isRaw" in LipTopOverturn && LipTopOverturn.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LipBottomOverturn" id={typeof LipBottomOverturn === "object" && "id" in LipBottomOverturn ? LipBottomOverturn?.id : undefined} value={typeof LipBottomOverturn === "object" && "value" in LipBottomOverturn ? LipBottomOverturn?.value : LipBottomOverturn} /* default: 0 */  isRaw={typeof LipBottomOverturn === "object" && "isRaw" in LipBottomOverturn && LipBottomOverturn.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LipTopOverUnder" id={typeof LipTopOverUnder === "object" && "id" in LipTopOverUnder ? LipTopOverUnder?.id : undefined} value={typeof LipTopOverUnder === "object" && "value" in LipTopOverUnder ? LipTopOverUnder?.value : LipTopOverUnder} /* default: 0 */  isRaw={typeof LipTopOverUnder === "object" && "isRaw" in LipTopOverUnder && LipTopOverUnder.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LipBottomOverUnder" id={typeof LipBottomOverUnder === "object" && "id" in LipBottomOverUnder ? LipBottomOverUnder?.id : undefined} value={typeof LipBottomOverUnder === "object" && "value" in LipBottomOverUnder ? LipBottomOverUnder?.value : LipBottomOverUnder} /* default: 0 */  isRaw={typeof LipBottomOverUnder === "object" && "isRaw" in LipBottomOverUnder && LipBottomOverUnder.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CheekLeftPuffSuck" id={typeof CheekLeftPuffSuck === "object" && "id" in CheekLeftPuffSuck ? CheekLeftPuffSuck?.id : undefined} value={typeof CheekLeftPuffSuck === "object" && "value" in CheekLeftPuffSuck ? CheekLeftPuffSuck?.value : CheekLeftPuffSuck} /* default: 0 */  isRaw={typeof CheekLeftPuffSuck === "object" && "isRaw" in CheekLeftPuffSuck && CheekLeftPuffSuck.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CheekRightPuffSuck" id={typeof CheekRightPuffSuck === "object" && "id" in CheekRightPuffSuck ? CheekRightPuffSuck?.id : undefined} value={typeof CheekRightPuffSuck === "object" && "value" in CheekRightPuffSuck ? CheekRightPuffSuck?.value : CheekRightPuffSuck} /* default: 0 */  isRaw={typeof CheekRightPuffSuck === "object" && "isRaw" in CheekRightPuffSuck && CheekRightPuffSuck.isRaw ? true : undefined} />
        </Component>
      );
    };
    