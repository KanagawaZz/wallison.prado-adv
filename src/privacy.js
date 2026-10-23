import { siteConfig } from './data/siteConfig.js';
import { initConsent } from './utils/consent.js';

const { privacy } = siteConfig;

document.querySelector('#privacy').innerHTML = `
  <header class="legal-header">
    <div class="legal-container legal-header-inner">
      <a href="/" class="legal-brand" aria-label="Voltar para a página inicial">
        <span class="legal-monogram">WP</span>
        <span>${siteConfig.name}</span>
      </a>
      <a href="/" class="legal-back">← Voltar ao site</a>
    </div>
  </header>

  <main class="legal-container legal-content">
    <p class="legal-eyebrow">LGPD • Lei nº 13.709/2018</p>
    <h1>Política de Privacidade</h1>
    <p class="legal-updated">Última atualização: ${privacy.lastUpdated}</p>

    <p>
      Esta política explica quais dados pessoais são tratados quando você visita este site ou entra em contato
      pelos canais indicados nele, para que são usados e como você pode exercer os seus direitos.
    </p>

    <h2>1. Quem é o responsável pelos dados</h2>
    <p>
      O controlador dos dados é <strong>${privacy.controller}</strong>, ${privacy.controllerId}.
      Para qualquer assunto relacionado a dados pessoais, escreva para
      <a href="mailto:${privacy.email}">${privacy.email}</a>.
    </p>

    <h2>2. Quais dados são tratados</h2>
    <h3>Dados que você nos envia</h3>
    <p>
      Ao conversar pelo WhatsApp ou por e-mail, você pode compartilhar nome, telefone, e-mail, cargo, órgão,
      um relato da sua situação e documentos funcionais (como contracheques e portarias). Esses dados são
      usados apenas para entender o seu caso e responder ao seu contato, e ficam protegidos pelo
      <strong>sigilo profissional</strong> da advocacia.
    </p>

    <h3>Dados de navegação (somente com a sua autorização)</h3>
    <ul>
      <li>
        <strong>Google Analytics</strong> (Google): páginas visitadas, tempo de permanência, origem do acesso,
        tipo de dispositivo e localização aproximada.
      </li>
      <li>
        <strong>Microsoft Clarity</strong> (Microsoft): cliques, rolagem e movimentos na página, inclusive em
        forma de gravação da sessão, para identificar partes confusas do site. O conteúdo digitado em campos é
        mascarado pela ferramenta.
      </li>
    </ul>
    <p>Essas ferramentas só são ativadas se você clicar em <strong>“Aceitar”</strong> no aviso de cookies.</p>

    <h3>Dados técnicos (sem cookies)</h3>
    <p>
      O <strong>Cloudflare Web Analytics</strong> conta visitas de forma agregada, sem cookies e sem identificar
      você. A empresa de hospedagem (<strong>Vercel</strong>) registra dados técnicos de acesso, como endereço IP
      e navegador, para segurança e funcionamento do site.
    </p>

    <h2>3. Para que os dados são usados e com qual base legal</h2>
    <ul>
      <li>
        <strong>Responder ao seu contato e analisar o seu caso:</strong> procedimentos preliminares a um
        eventual contrato, a seu pedido (art. 7º, V, da LGPD), e exercício regular de direitos (art. 7º, VI).
      </li>
      <li>
        <strong>Estatísticas de uso e melhoria do site</strong> (Google Analytics e Microsoft Clarity):
        consentimento (art. 7º, I), que pode ser revogado a qualquer momento.
      </li>
      <li>
        <strong>Segurança e funcionamento do site</strong> (registros técnicos e Cloudflare): legítimo
        interesse (art. 7º, IX).
      </li>
    </ul>
    <p>Os dados não são vendidos nem usados para outras finalidades.</p>

    <h2>4. Cookies</h2>
    <p>Cookies são pequenos arquivos salvos no seu navegador. Este site usa:</p>
    <div class="legal-table-wrap">
      <table class="legal-table">
        <thead>
          <tr><th>Ferramenta</th><th>Cookies</th><th>Finalidade</th><th>Duração</th></tr>
        </thead>
        <tbody>
          <tr><td>Google Analytics</td><td>_ga, _ga_*</td><td>Distinguir visitantes e sessões</td><td>Até 2 anos</td></tr>
          <tr><td>Microsoft Clarity</td><td>_clck, _clsk e outros</td><td>Agrupar interações de uma mesma visita</td><td>De 1 dia a 1 ano</td></tr>
        </tbody>
      </table>
    </div>
    <p>
      A sua escolha no aviso de cookies fica salva apenas no seu navegador. Você pode mudar de ideia a qualquer
      momento em <a href="#" data-cookie-prefs>Preferências de cookies</a>.
    </p>

    <h2>5. Com quem os dados podem ser compartilhados</h2>
    <p>Apenas com os fornecedores necessários para o funcionamento do site e do atendimento:</p>
    <ul>
      <li>Google (Google Analytics);</li>
      <li>Microsoft (Microsoft Clarity);</li>
      <li>Cloudflare (estatísticas sem cookies);</li>
      <li>Vercel (hospedagem do site);</li>
      <li>Meta (WhatsApp), quando você inicia uma conversa por esse canal.</li>
    </ul>
    <p>
      Alguns desses fornecedores mantêm servidores fora do Brasil. Nesses casos, a transferência internacional
      ocorre conforme o art. 33 da LGPD.
    </p>

    <h2>6. Por quanto tempo os dados são guardados</h2>
    <p>
      Os dados enviados no contato são mantidos pelo tempo necessário ao atendimento e ao cumprimento de
      obrigações legais e éticas da advocacia, incluindo os prazos de guarda e de prescrição aplicáveis. Os dados
      de navegação seguem os prazos das próprias ferramentas, indicados na tabela de cookies.
    </p>

    <h2>7. Seus direitos</h2>
    <p>Pelo art. 18 da LGPD, você pode, a qualquer momento:</p>
    <ul>
      <li>confirmar se os seus dados são tratados e ter acesso a eles;</li>
      <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
      <li>pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários ou excessivos;</li>
      <li>pedir a portabilidade dos dados;</li>
      <li>saber com quem os dados foram compartilhados;</li>
      <li>revogar o consentimento e pedir a eliminação dos dados tratados com base nele.</li>
    </ul>
    <p>
      Para exercer esses direitos, escreva para <a href="mailto:${privacy.email}">${privacy.email}</a>.
      Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados
      (<a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">ANPD</a>).
    </p>

    <h2>8. Segurança</h2>
    <p>
      São adotadas medidas técnicas e administrativas razoáveis para proteger os dados contra acesso não
      autorizado, perda ou uso indevido. As informações compartilhadas no atendimento são tratadas sob sigilo
      profissional.
    </p>

    <h2>9. Alterações nesta política</h2>
    <p>
      Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data da última
      atualização fica sempre indicada no início desta página.
    </p>

    <a href="/" class="legal-cta">← Voltar ao site</a>
  </main>

  <footer class="legal-footer">
    <div class="legal-container">
      <p>© 2026 ${siteConfig.name} • ${siteConfig.oabNumber}</p>
    </div>
  </footer>
`;

initConsent(siteConfig);
