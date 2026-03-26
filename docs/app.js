const TOOLS = [
  {
    "name": "Zapier",
    "url": "https://zapier.com",
    "desc": "Connect 6,000+ apps with no-code workflows, AI-powered suggestions, and conditional logic.",
    "cat": "Workflow Platforms",
    "type": "Commercial"
  },
  {
    "name": "Make",
    "url": "https://www.make.com",
    "desc": "Visual automation platform (formerly Integromat) with advanced branching and data transformations.",
    "cat": "Workflow Platforms",
    "type": "Commercial"
  },
  {
    "name": "n8n",
    "url": "https://github.com/n8n-io/n8n",
    "desc": "Fair-code workflow automation with 400+ integrations. Self-hostable with visual editor.",
    "cat": "Workflow Platforms",
    "type": "Open Source"
  },
  {
    "name": "Activepieces",
    "url": "https://github.com/activepieces/activepieces",
    "desc": "Open-source no-code business automation platform.",
    "cat": "Workflow Platforms",
    "type": "Open Source"
  },
  {
    "name": "Automatisch",
    "url": "https://github.com/automatisch/automatisch",
    "desc": "Open-source Zapier alternative with clean UI.",
    "cat": "Workflow Platforms",
    "type": "Open Source"
  },
  {
    "name": "Windmill",
    "url": "https://github.com/windmill-labs/windmill",
    "desc": "Developer-first workflow engine for scripts, flows, and apps.",
    "cat": "Workflow Platforms",
    "type": "Open Source"
  },
  {
    "name": "Pipedream",
    "url": "https://pipedream.com",
    "desc": "Developer-focused workflow platform with 1,000+ integrations.",
    "cat": "Workflow Platforms",
    "type": "Commercial"
  },
  {
    "name": "Tray.io",
    "url": "https://tray.io",
    "desc": "Enterprise integration and automation platform.",
    "cat": "Workflow Platforms",
    "type": "Commercial"
  },
  {
    "name": "Workato",
    "url": "https://www.workato.com",
    "desc": "Enterprise automation with AI co-pilot and recipe-based workflows.",
    "cat": "Workflow Platforms",
    "type": "Commercial"
  },
  {
    "name": "Temporal",
    "url": "https://github.com/temporalio/temporal",
    "desc": "Durable execution for reliable long-running workflows.",
    "cat": "Workflow Platforms",
    "type": "Open Source"
  },
  {
    "name": "Prefect",
    "url": "https://github.com/PrefectHQ/prefect",
    "desc": "Modern workflow orchestration for data pipelines.",
    "cat": "Workflow Platforms",
    "type": "Open Source"
  },
  {
    "name": "Huginn",
    "url": "https://github.com/huginn/huginn",
    "desc": "Build agents for automated online tasks.",
    "cat": "Workflow Platforms",
    "type": "Open Source"
  },
  {
    "name": "Relevance AI",
    "url": "https://relevanceai.com",
    "desc": "Build and deploy AI agents and tool chains.",
    "cat": "AI-Native Automation",
    "type": "Commercial"
  },
  {
    "name": "Lindy AI",
    "url": "https://www.lindy.ai",
    "desc": "AI employee platform for autonomous agents.",
    "cat": "AI-Native Automation",
    "type": "Commercial"
  },
  {
    "name": "Bardeen",
    "url": "https://www.bardeen.ai",
    "desc": "AI-powered browser automation from natural language.",
    "cat": "AI-Native Automation",
    "type": "Commercial"
  },
  {
    "name": "Axiom",
    "url": "https://axiom.ai",
    "desc": "No-code browser automation with AI actions.",
    "cat": "AI-Native Automation",
    "type": "Commercial"
  },
  {
    "name": "Browse AI",
    "url": "https://www.browse.ai",
    "desc": "Train AI robots to extract website data.",
    "cat": "AI-Native Automation",
    "type": "Commercial"
  },
  {
    "name": "Cassidy AI",
    "url": "https://cassidyai.com",
    "desc": "AI workspace for custom AI assistants.",
    "cat": "AI-Native Automation",
    "type": "Commercial"
  },
  {
    "name": "Respell",
    "url": "https://www.respell.ai",
    "desc": "Build AI workflows visually with LLM steps.",
    "cat": "AI-Native Automation",
    "type": "Commercial"
  },
  {
    "name": "LangChain",
    "url": "https://github.com/langchain-ai/langchain",
    "desc": "Framework for LLM-powered applications.",
    "cat": "AI-Native Automation",
    "type": "Open Source"
  },
  {
    "name": "CrewAI",
    "url": "https://github.com/crewAIInc/crewAI",
    "desc": "Orchestrate autonomous AI agents.",
    "cat": "AI-Native Automation",
    "type": "Open Source"
  },
  {
    "name": "AutoGen",
    "url": "https://github.com/microsoft/autogen",
    "desc": "Multi-agent AI applications framework by Microsoft.",
    "cat": "AI-Native Automation",
    "type": "Open Source"
  },
  {
    "name": "Dust",
    "url": "https://github.com/dust-tt/dust",
    "desc": "Build LLM apps with composable blocks.",
    "cat": "AI-Native Automation",
    "type": "Open Source"
  },
  {
    "name": "Superagent",
    "url": "https://github.com/superagent-ai/superagent",
    "desc": "Open-source AI assistant framework with RAG.",
    "cat": "AI-Native Automation",
    "type": "Open Source"
  },
  {
    "name": "Botpress",
    "url": "https://github.com/botpress/botpress",
    "desc": "Open-source AI chatbot platform with visual editor.",
    "cat": "Chatbot Builders",
    "type": "Open Source"
  },
  {
    "name": "Voiceflow",
    "url": "https://www.voiceflow.com",
    "desc": "Design and launch AI agents and chatbots.",
    "cat": "Chatbot Builders",
    "type": "Commercial"
  },
  {
    "name": "Typebot",
    "url": "https://github.com/baptisteArno/typebot.io",
    "desc": "Open-source conversational form builder.",
    "cat": "Chatbot Builders",
    "type": "Open Source"
  },
  {
    "name": "Rasa",
    "url": "https://github.com/RasaHQ/rasa",
    "desc": "Open-source contextual AI assistants.",
    "cat": "Chatbot Builders",
    "type": "Open Source"
  },
  {
    "name": "Chainlit",
    "url": "https://github.com/Chainlit/chainlit",
    "desc": "Production-ready conversational AI in Python.",
    "cat": "Chatbot Builders",
    "type": "Open Source"
  },
  {
    "name": "Flowise",
    "url": "https://github.com/FlowiseAI/Flowise",
    "desc": "Drag-and-drop LLM flow builder.",
    "cat": "Chatbot Builders",
    "type": "Open Source"
  },
  {
    "name": "Chatbase",
    "url": "https://www.chatbase.co",
    "desc": "Custom AI chatbots trained on your data.",
    "cat": "Chatbot Builders",
    "type": "Commercial"
  },
  {
    "name": "Intercom Fin",
    "url": "https://www.intercom.com/fin",
    "desc": "AI customer service agent.",
    "cat": "Chatbot Builders",
    "type": "Commercial"
  },
  {
    "name": "Stack AI",
    "url": "https://www.stack-ai.com",
    "desc": "No-code AI applications platform.",
    "cat": "Chatbot Builders",
    "type": "Commercial"
  },
  {
    "name": "Dify",
    "url": "https://github.com/langgenius/dify",
    "desc": "Open-source LLM app development platform.",
    "cat": "Chatbot Builders",
    "type": "Open Source"
  },
  {
    "name": "UiPath",
    "url": "https://www.uipath.com",
    "desc": "Enterprise RPA with AI document understanding.",
    "cat": "RPA",
    "type": "Commercial"
  },
  {
    "name": "Automation Anywhere",
    "url": "https://www.automationanywhere.com",
    "desc": "Cloud-native intelligent automation.",
    "cat": "RPA",
    "type": "Commercial"
  },
  {
    "name": "Power Automate",
    "url": "https://powerautomate.microsoft.com",
    "desc": "Microsoft RPA with AI Builder.",
    "cat": "RPA",
    "type": "Commercial"
  },
  {
    "name": "TagUI",
    "url": "https://github.com/aisingapore/TagUI",
    "desc": "Open-source RPA with natural language.",
    "cat": "RPA",
    "type": "Open Source"
  },
  {
    "name": "Robot Framework",
    "url": "https://github.com/robotframework/robotframework",
    "desc": "Open-source automation framework.",
    "cat": "RPA",
    "type": "Open Source"
  },
  {
    "name": "OpenRPA",
    "url": "https://github.com/open-rpa/openrpa",
    "desc": "Free open-source enterprise RPA.",
    "cat": "RPA",
    "type": "Open Source"
  },
  {
    "name": "Blue Prism",
    "url": "https://www.blueprism.com",
    "desc": "Enterprise intelligent automation.",
    "cat": "RPA",
    "type": "Commercial"
  },
  {
    "name": "Automagica",
    "url": "https://github.com/automagica/automagica",
    "desc": "Smart process automation with AI.",
    "cat": "RPA",
    "type": "Open Source"
  },
  {
    "name": "Instantly.ai",
    "url": "https://instantly.ai",
    "desc": "AI-powered cold email platform.",
    "cat": "Email & Marketing",
    "type": "Commercial"
  },
  {
    "name": "Smartlead",
    "url": "https://www.smartlead.ai",
    "desc": "Cold email outreach with AI warmup.",
    "cat": "Email & Marketing",
    "type": "Commercial"
  },
  {
    "name": "Clay",
    "url": "https://www.clay.com",
    "desc": "AI data enrichment and personalized outreach.",
    "cat": "Email & Marketing",
    "type": "Commercial"
  },
  {
    "name": "Apollo.io",
    "url": "https://www.apollo.io",
    "desc": "Sales intelligence and engagement platform.",
    "cat": "Email & Marketing",
    "type": "Commercial"
  },
  {
    "name": "Mailchimp",
    "url": "https://mailchimp.com",
    "desc": "Marketing platform with AI optimization.",
    "cat": "Email & Marketing",
    "type": "Commercial"
  },
  {
    "name": "ActiveCampaign",
    "url": "https://www.activecampaign.com",
    "desc": "Marketing automation with AI.",
    "cat": "Email & Marketing",
    "type": "Commercial"
  },
  {
    "name": "Brevo",
    "url": "https://www.brevo.com",
    "desc": "Marketing with AI subject line optimization.",
    "cat": "Email & Marketing",
    "type": "Commercial"
  },
  {
    "name": "Lemlist",
    "url": "https://www.lemlist.com",
    "desc": "Cold outreach with AI icebreakers.",
    "cat": "Email & Marketing",
    "type": "Commercial"
  },
  {
    "name": "Customer.io",
    "url": "https://customer.io",
    "desc": "Automated behavior-based messaging.",
    "cat": "Email & Marketing",
    "type": "Commercial"
  },
  {
    "name": "Resend",
    "url": "https://github.com/resend/resend-node",
    "desc": "Developer-friendly email API.",
    "cat": "Email & Marketing",
    "type": "Open Source"
  },
  {
    "name": "Airbyte",
    "url": "https://github.com/airbytehq/airbyte",
    "desc": "Open-source ELT with 300+ connectors.",
    "cat": "Data Automation",
    "type": "Open Source"
  },
  {
    "name": "Fivetran",
    "url": "https://www.fivetran.com",
    "desc": "Automated data movement platform.",
    "cat": "Data Automation",
    "type": "Commercial"
  },
  {
    "name": "dbt",
    "url": "https://github.com/dbt-labs/dbt-core",
    "desc": "SQL-based data transformation.",
    "cat": "Data Automation",
    "type": "Open Source"
  },
  {
    "name": "Dagster",
    "url": "https://github.com/dagster-io/dagster",
    "desc": "Cloud-native data orchestration.",
    "cat": "Data Automation",
    "type": "Open Source"
  },
  {
    "name": "Apache Airflow",
    "url": "https://github.com/apache/airflow",
    "desc": "Workflow scheduling and monitoring.",
    "cat": "Data Automation",
    "type": "Open Source"
  },
  {
    "name": "Meltano",
    "url": "https://github.com/meltano/meltano",
    "desc": "Open-source DataOps platform.",
    "cat": "Data Automation",
    "type": "Open Source"
  },
  {
    "name": "Hightouch",
    "url": "https://hightouch.com",
    "desc": "Reverse ETL to 150+ SaaS tools.",
    "cat": "Data Automation",
    "type": "Commercial"
  },
  {
    "name": "Census",
    "url": "https://www.getcensus.com",
    "desc": "Sync warehouse data to business tools.",
    "cat": "Data Automation",
    "type": "Commercial"
  },
  {
    "name": "Great Expectations",
    "url": "https://github.com/great-expectations/great_expectations",
    "desc": "Data validation and profiling.",
    "cat": "Data Automation",
    "type": "Open Source"
  },
  {
    "name": "Stitch",
    "url": "https://www.stitchdata.com",
    "desc": "ETL service with 130+ data sources.",
    "cat": "Data Automation",
    "type": "Commercial"
  },
  {
    "name": "Nanonets",
    "url": "https://nanonets.com",
    "desc": "AI document processing with OCR.",
    "cat": "Document Processing",
    "type": "Commercial"
  },
  {
    "name": "Rossum",
    "url": "https://rossum.ai",
    "desc": "AI document gateway for workflows.",
    "cat": "Document Processing",
    "type": "Commercial"
  },
  {
    "name": "Parseur",
    "url": "https://parseur.com",
    "desc": "AI email and document parser.",
    "cat": "Document Processing",
    "type": "Commercial"
  },
  {
    "name": "Sensible",
    "url": "https://www.sensible.so",
    "desc": "Document extraction API with LLM.",
    "cat": "Document Processing",
    "type": "Commercial"
  },
  {
    "name": "Unstructured",
    "url": "https://github.com/Unstructured-IO/unstructured",
    "desc": "Preprocess unstructured data.",
    "cat": "Document Processing",
    "type": "Open Source"
  },
  {
    "name": "Marker",
    "url": "https://github.com/VikParuchuri/marker",
    "desc": "PDF to markdown with deep learning.",
    "cat": "Document Processing",
    "type": "Open Source"
  },
  {
    "name": "Papermerge",
    "url": "https://github.com/ciur/papermerge",
    "desc": "Open-source DMS with OCR.",
    "cat": "Document Processing",
    "type": "Open Source"
  },
  {
    "name": "ABBYY Vantage",
    "url": "https://www.abbyy.com/vantage/",
    "desc": "AI document processing platform.",
    "cat": "Document Processing",
    "type": "Commercial"
  },
  {
    "name": "Browser Use",
    "url": "https://github.com/browser-use/browser-use",
    "desc": "LLM-powered browser automation.",
    "cat": "Browser Automation",
    "type": "Open Source"
  },
  {
    "name": "Skyvern",
    "url": "https://github.com/Skyvern-AI/skyvern",
    "desc": "AI browser automation with computer vision.",
    "cat": "Browser Automation",
    "type": "Open Source"
  },
  {
    "name": "Playwright",
    "url": "https://github.com/microsoft/playwright",
    "desc": "Cross-browser automation library.",
    "cat": "Browser Automation",
    "type": "Open Source"
  },
  {
    "name": "Puppeteer",
    "url": "https://github.com/puppeteer/puppeteer",
    "desc": "Chrome automation via DevTools.",
    "cat": "Browser Automation",
    "type": "Open Source"
  },
  {
    "name": "Selenium",
    "url": "https://github.com/SeleniumHQ/selenium",
    "desc": "Browser automation framework.",
    "cat": "Browser Automation",
    "type": "Open Source"
  },
  {
    "name": "Crawlee",
    "url": "https://github.com/apify/crawlee",
    "desc": "Scalable web crawling library.",
    "cat": "Browser Automation",
    "type": "Open Source"
  },
  {
    "name": "Apify",
    "url": "https://apify.com",
    "desc": "Web scraping and automation platform.",
    "cat": "Browser Automation",
    "type": "Commercial"
  },
  {
    "name": "PhantomBuster",
    "url": "https://phantombuster.com",
    "desc": "Code-free lead gen automation.",
    "cat": "Browser Automation",
    "type": "Commercial"
  },
  {
    "name": "Cypress",
    "url": "https://github.com/cypress-io/cypress",
    "desc": "JavaScript E2E testing framework.",
    "cat": "Browser Automation",
    "type": "Open Source"
  },
  {
    "name": "Bland AI",
    "url": "https://www.bland.ai",
    "desc": "AI phone calling at scale.",
    "cat": "Voice & Phone",
    "type": "Commercial"
  },
  {
    "name": "Vapi",
    "url": "https://vapi.ai",
    "desc": "Voice AI agent platform.",
    "cat": "Voice & Phone",
    "type": "Commercial"
  },
  {
    "name": "Retell AI",
    "url": "https://www.retellai.com",
    "desc": "Human-like AI voice agents.",
    "cat": "Voice & Phone",
    "type": "Commercial"
  },
  {
    "name": "Air AI",
    "url": "https://www.air.ai",
    "desc": "Autonomous AI for long phone calls.",
    "cat": "Voice & Phone",
    "type": "Commercial"
  },
  {
    "name": "Synthflow",
    "url": "https://synthflow.ai",
    "desc": "No-code AI voice agent builder.",
    "cat": "Voice & Phone",
    "type": "Commercial"
  },
  {
    "name": "Twilio",
    "url": "https://www.twilio.com",
    "desc": "Cloud communications APIs.",
    "cat": "Voice & Phone",
    "type": "Commercial"
  },
  {
    "name": "Vocode",
    "url": "https://github.com/vocodedev/vocode-core",
    "desc": "Open-source voice LLM agents.",
    "cat": "Voice & Phone",
    "type": "Open Source"
  },
  {
    "name": "Pipecat",
    "url": "https://github.com/pipecat-ai/pipecat",
    "desc": "Voice and multimodal AI framework.",
    "cat": "Voice & Phone",
    "type": "Open Source"
  },
  {
    "name": "Bolna",
    "url": "https://github.com/bolna-ai/bolna",
    "desc": "Production-ready AI voice agents.",
    "cat": "Voice & Phone",
    "type": "Open Source"
  }
];

const categories=[...new Set(TOOLS.map(t=>t.cat))];
const types=["Open Source","Commercial"];
let activeCategory=null,activeType=null;

function init(){
  const cc=document.getElementById("categoryFilters");
  let b=document.createElement("button");b.className="filter-btn active";b.textContent="All Categories";
  b.onclick=()=>{activeCategory=null;render();};cc.appendChild(b);
  categories.forEach(cat=>{b=document.createElement("button");b.className="filter-btn";b.textContent=cat;b.onclick=()=>{activeCategory=cat;render();};cc.appendChild(b);});
  const tc=document.getElementById("typeFilters");
  b=document.createElement("button");b.className="filter-btn active";b.textContent="All Types";
  b.onclick=()=>{activeType=null;render();};tc.appendChild(b);
  types.forEach(type=>{b=document.createElement("button");b.className="filter-btn";b.textContent=type;b.onclick=()=>{activeType=type;render();};tc.appendChild(b);});
  document.getElementById("searchBox").addEventListener("input",render);
  render();
}

function render(){
  const q=document.getElementById("searchBox").value.toLowerCase().trim();
  document.querySelectorAll("#categoryFilters .filter-btn").forEach(b=>{
    b.classList.toggle("active",(activeCategory===null&&b.textContent==="All Categories")||b.textContent===activeCategory);
  });
  document.querySelectorAll("#typeFilters .filter-btn").forEach(b=>{
    b.classList.toggle("active",(activeType===null&&b.textContent==="All Types")||b.textContent===activeType);
  });
  let filtered=TOOLS.filter(t=>{
    if(activeCategory&&t.cat!==activeCategory)return false;
    if(activeType&&t.type!==activeType)return false;
    if(q){return(t.name+" "+t.desc+" "+t.cat+" "+t.type).toLowerCase().includes(q);}
    return true;
  });
  document.getElementById("resultCount").textContent="Showing "+filtered.length+" of "+TOOLS.length+" tools";
  const container=document.getElementById("toolsContainer");
  if(filtered.length===0){container.innerHTML='<div class="no-results"><h3>No tools found</h3><p>Try adjusting your search or filters.</p></div>';return;}
  const grouped={};filtered.forEach(t=>{if(!grouped[t.cat])grouped[t.cat]=[];grouped[t.cat].push(t);});
  let html="";
  for(const cat of categories){
    if(!grouped[cat])continue;
    html+='<h2 class="category-heading">'+cat+'</h2>';
    grouped[cat].forEach(t=>{
      const bc=t.type==="Open Source"?"badge-oss":"badge-commercial";
      html+='<div class="tool-card"><div class="tool-info"><a class="tool-name" href="'+t.url+'" target="_blank" rel="noopener">'+t.name+'</a><div class="tool-desc">'+t.desc+'</div></div><span class="tool-badge '+bc+'">'+t.type+'</span></div>';
    });
  }
  container.innerHTML=html;
}
init();
