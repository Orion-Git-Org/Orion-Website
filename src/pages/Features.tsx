import { Link } from 'react-router-dom';
import { useWaitlist } from '../context/WaitlistContext';

export default function Features() {
  const { openModal } = useWaitlist();
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center px-8 md:px-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          <div className="z-10">
            <span className="font-label text-primary tracking-[0.2em] uppercase text-xs mb-4 block">Standardized Desktop Infrastructure</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
              Automating the <br/><span className="text-primary-container">Last Mile</span> of Business.
            </h1>
            <p className="text-lg text-secondary max-w-xl mb-10 leading-relaxed">
              The bridge between LLM intelligence and reliable execution. Deploy standardized infrastructure for legacy desktop workflows and complex business processes that APIs can't reach.
            </p>
            <div className="border-l-2 border-primary/50 pl-6 mt-8">
              <p className="text-sm text-secondary italic leading-relaxed">
                Orchestrating the next generation of kinetic interfaces. We provide the standardized automation primitive for desktop-native and OS-specific workflows, bridging the gap between LLM intelligence and legacy infrastructure.
              </p>
            </div>
          </div>
          {/* orchestrator.yaml code snippet */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-surface-container-lowest border border-outline-variant/15 rounded-lg p-6 code-container text-sm leading-relaxed overflow-hidden">
              <div className="flex items-center gap-2 mb-4 border-b border-outline-variant/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-error-container/40"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary/40"></div>
                <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                <span className="ml-4 text-xs font-label text-on-surface-variant">orchestrator.yaml</span>
              </div>
              <pre className="text-secondary/90"><code><span className="text-primary-container">version:</span> "3.4"{'\n'}
<span className="text-primary-container">orchestrator:</span>{'\n'}
{'  '}<span className="text-primary-container">engine:</span> hybrid-pdd{'\n'}
{'  '}<span className="text-primary-container">agents:</span>{'\n'}
{'    '}- <span className="text-primary-container">id:</span> researcher_01{'\n'}
{'      '}<span className="text-primary-container">capabilities:</span> [web_navigation, data_extraction]{'\n'}
{'      '}<span className="text-primary-container">mode:</span> deterministic{'\n'}
{'    '}- <span className="text-primary-container">id:</span> validator_node{'\n'}
{'      '}<span className="text-primary-container">model:</span> r1-reasoning-pro{'\n'}
{'      '}<span className="text-primary-container">retry_policy:</span> exponential_backoff{'\n'}
{'\n'}
<span className="text-primary-container">workflow:</span>{'\n'}
{'  '}<span className="text-primary-container">steps:</span>{'\n'}
{'    '}- <span className="text-primary-container">action:</span> decompose_task{'\n'}
{'      '}<span className="text-primary-container">parameters:</span>{'\n'}
{'        '}<span className="text-primary-container">strategy:</span> reflexive_control{'\n'}
{'        '}<span className="text-primary-container">depth:</span> 4</code></pre>
            </div>
          </div>
        </div>
      </section>
      {/* Waitlist CTA Section */}
      <section className="py-24 px-8 md:px-16 bg-surface-container-lowest border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Automate your workflows</h2>
          <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Join Orion's growing list of design partners to experience your workflows being automated reliably.
          </p>
          <button onClick={openModal} className="inline-block kinetic-gradient text-on-primary px-10 py-4 rounded-lg font-bold tracking-widest text-sm hover:scale-105 transition-transform">
            JOIN THE WAITLIST
          </button>
        </div>
      </section>
      {/* Section 1: Business Value Pillars */}
      <section className="py-32 px-8 md:px-16 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Enterprise-Ready Execution Engine</h2>
            <div className="h-1 w-24 bg-primary rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
            {/* Card 01 */}
            <div className="glass-panel border border-white/5 p-8 rounded-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group">
              <span className="font-label text-[12px] text-[#10B981] font-bold block mb-6 tracking-widest drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">01</span>
              <h3 className="font-headline font-bold text-lg mb-4 text-on-surface leading-tight group-hover:text-primary transition-colors">Unified Process Control</h3>
              <p className="font-body text-sm text-secondary/80 leading-relaxed">Bridge the gap between modern LLMs and legacy enterprise software, allowing specialized subagents to handle reasoning while Orion handles the dirty work.</p>
            </div>
            {/* Card 02 */}
            <div className="glass-panel border border-white/5 p-8 rounded-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group">
              <span className="font-label text-[12px] text-[#10B981] font-bold block mb-6 tracking-widest drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">02</span>
              <h3 className="font-headline font-bold text-lg mb-4 text-on-surface leading-tight group-hover:text-primary transition-colors">Deterministic Reliability</h3>
              <p className="font-body text-sm text-secondary/80 leading-relaxed">Replace fragile prompt-chains with auditable tool-calling. Ensure critical system interactions follow strict enterprise guardrails every time.</p>
            </div>
            {/* Card 03 */}
            <div className="glass-panel border border-white/5 p-8 rounded-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group">
              <span className="font-label text-[12px] text-[#10B981] font-bold block mb-6 tracking-widest drop-shadow-[0_0_8_px_rgba(16,185,129,0.6)]">03</span>
              <h3 className="font-headline font-bold text-lg mb-4 text-on-surface leading-tight group-hover:text-primary transition-colors">Reduced Dev Maintenance</h3>
              <p className="font-body text-sm text-secondary/80 leading-relaxed">Save hundreds of dev hours with self-healing workflows that automatically reconcile state when UI elements shift or environments drift.</p>
            </div>
            {/* Card 04 */}
            <div className="glass-panel border border-white/5 p-8 rounded-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group">
              <span className="font-label text-[12px] text-[#10B981] font-bold block mb-6 tracking-widest drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">04</span>
              <h3 className="font-headline font-bold text-lg mb-4 text-on-surface leading-tight group-hover:text-primary transition-colors">High-Fidelity Auditing</h3>
              <p className="font-body text-sm text-secondary/80 leading-relaxed">Move beyond opaque model logs. Gain full visibility into every action with real-time state synchronization and detailed execution snapshots.</p>
            </div>
            {/* Card 05 */}
            <div className="glass-panel border border-white/5 p-8 rounded-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group">
              <span className="font-label text-[12px] text-[#10B981] font-bold block mb-6 tracking-widest drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">05</span>
              <h3 className="font-headline font-bold text-lg mb-4 text-on-surface leading-tight group-hover:text-primary transition-colors">Intelligent Resolution</h3>
              <p className="font-body text-sm text-secondary/80 leading-relaxed">Resolve ambiguous UI states with VLM-driven grounding, maintaining deterministic paths while providing the flexibility of human-like reasoning.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2: 3-Tiered Execution */}
      <section className="py-32 px-8 md:px-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="font-label text-primary tracking-widest text-xs uppercase mb-4 block">Closing the API Gap</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">The 3-Tiered Execution Engine</h2>
            <p className="text-secondary mt-6 max-w-2xl mx-auto">Standardized primitives for workflows that span across fragmented systems—from modern APIs to legacy desktop software.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tier 01 */}
            <div className="bg-surface-container-low p-12 rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 font-label text-4xl text-on-surface-variant/10 group-hover:text-primary/20 transition-colors">T1</div>
              <h3 className="font-label text-primary mb-8 tracking-widest uppercase text-xs">Tier 01: Programmatic</h3>
              <h4 className="text-2xl font-bold mb-6">Modern Connectivity</h4>
              <p className="text-secondary leading-relaxed mb-8">Direct interaction with established interfaces. High-speed execution with zero latency for systems that support structured data exchange.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-variant text-[10px] font-label rounded text-primary">APIs & CLIs</span>
                <span className="px-3 py-1 bg-surface-variant text-[10px] font-label rounded text-primary">GRPC</span>
                <span className="px-3 py-1 bg-surface-variant text-[10px] font-label rounded text-primary">SHELL</span>
              </div>
            </div>
            {/* Tier 02 */}
            <div className="bg-surface-container-low p-12 rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 font-label text-4xl text-on-surface-variant/10 group-hover:text-primary/20 transition-colors">T2</div>
              <h3 className="font-label text-primary mb-8 tracking-widest uppercase text-xs">Tier 02: Native UIA</h3>
              <h4 className="text-2xl font-bold mb-6">Legacy Software Bridge</h4>
              <p className="text-secondary leading-relaxed mb-8">The solution for apps with no API surface. Control enterprise software via deep OS-level hooks and accessibility layer mapping.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-variant text-[10px] font-label rounded text-primary">WIN32 HOOKS</span>
                <span className="px-3 py-1 bg-surface-variant text-[10px] font-label rounded text-primary">DESKTOP-RPA</span>
              </div>
            </div>
            {/* Tier 03 */}
            <div className="bg-surface-container-low p-12 rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 font-label text-4xl text-on-surface-variant/10 group-hover:text-primary/20 transition-colors">T3</div>
              <h3 className="font-label text-primary mb-8 tracking-widest uppercase text-xs">Tier 03: Browser</h3>
              <h4 className="text-2xl font-bold mb-6">Web Orchestration</h4>
              <p className="text-secondary leading-relaxed mb-8">Full-DOM orchestration for dynamic web portals. Seamlessly move data between local desktop apps and browser-based interfaces.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-variant text-[10px] font-label rounded text-primary">STAGEHAND</span>
                <span className="px-3 py-1 bg-surface-variant text-[10px] font-label rounded text-primary">CHROME-ENGINE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3: PDD Snippet */}
      <section className="py-32 px-8 md:px-16 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-8">Process-First Orchestration</h2>
            <p className="text-secondary mb-8 leading-relaxed">
              Orion uses Process Definition Documents (PDD) to map your business logic to execution tiers. Unlike fragile prompt chains, PDDs provide the strict guidance required for enterprise-grade automation.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <div>
                  <h5 className="font-bold text-on-surface">Semi-Deterministic Execution</h5>
                  <p className="text-sm text-on-surface-variant">Prefer deterministic paths for reliability, triggering LLM reasoning only when fallback is required.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <div>
                  <h5 className="font-bold text-on-surface">Cross-System Integration</h5>
                  <p className="text-sm text-on-surface-variant">Seamlessly transition between Tier 1 APIs and Tier 2 legacy desktop steps within a single PDD.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-8 code-container text-xs">
            <div className="text-primary mb-4 opacity-50">// PDD_SPEC_V1</div>
            <pre className="text-on-secondary-container"><code><span className="text-primary-container">version:</span> "3.4"{'\n'}
<span className="text-primary-container">orchestrator:</span>{'\n'}
{'  '}<span className="text-primary-container">engine:</span> hybrid-pdd{'\n'}
{'  '}<span className="text-primary-container">agents:</span>{'\n'}
{'    '}- <span className="text-primary-container">id:</span> researcher_01{'\n'}
{'      '}<span className="text-primary-container">capabilities:</span> [web_navigation, data_extraction]{'\n'}
{'      '}<span className="text-primary-container">mode:</span> deterministic{'\n'}
{'    '}- <span className="text-primary-container">id:</span> validator_node{'\n'}
{'      '}<span className="text-primary-container">model:</span> r1-reasoning-pro{'\n'}
{'      '}<span className="text-primary-container">retry_policy:</span> exponential_backoff{'\n'}
{'\n'}
<span className="text-primary-container">workflow:</span>{'\n'}
{'  '}<span className="text-primary-container">steps:</span>{'\n'}
{'    '}- <span className="text-primary-container">action:</span> decompose_task{'\n'}
{'      '}<span className="text-primary-container">parameters:</span>{'\n'}
{'        '}<span className="text-primary-container">strategy:</span> reflexive_control{'\n'}
{'        '}<span className="text-primary-container">depth:</span> 4</code></pre>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-5xl mx-auto glass-panel rounded-xl p-16 text-center relative border border-outline-variant/10">
          <span className="font-label text-primary tracking-[0.2em] uppercase text-xs mb-4 block">Engineered for Technical Reliability</span>
          <div className="absolute inset-0 bg-primary/5 -z-10 rounded-xl"></div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Ready to Get Started?</h2>
          <p className="text-secondary text-lg mb-12 max-w-2xl mx-auto">
            Increase your agency's TAM by automating the "un-automatable." Deploy Orion to scale legacy workflows without the maintenance overhead of custom scripts.
          </p>
          <Link to="/contact" className="inline-block kinetic-gradient text-on-primary px-12 py-5 rounded-lg font-black tracking-widest text-sm hover:scale-105 transition-transform">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </main>
  );
}
