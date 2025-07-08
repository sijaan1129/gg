import React, { useState } from 'react';
import { Terminal, Shield, Settings, Users, Ban, Eye, Zap, Gamepad2, Wrench } from 'lucide-react';

const CommandCategory = ({ icon: Icon, title, commands, color }: {
  icon: any;
  title: string;
  commands: Array<{name: string; description: string; usage: string; type?: string}>;
  color: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="command-category">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full flex items-center justify-between p-6 rounded-xl border transition-all duration-300 ${
          isExpanded 
            ? `${color} border-opacity-50` 
            : 'bg-white/5 border-white/10 hover:bg-white/10'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color.replace('bg-', 'bg-').replace('/20', '/30')}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400">{commands.length} commands available</p>
          </div>
        </div>
        <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-3 animate-slide-down">
          {commands.map((command, index) => (
            <div key={index} className="command-item">
              <div className="flex items-start justify-between mb-2">
                <code className="text-blue-400 font-mono text-lg">/{command.name}</code>
                <div className="flex gap-2">
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">SLASH</span>
                  {command.type === 'both' && (
                    <span className="text-xs text-gray-500 bg-purple-800 px-2 py-1 rounded">PREFIX</span>
                  )}
                </div>
              </div>
              <p className="text-gray-300 mb-2">{command.description}</p>
              <div className="text-sm text-gray-400">
                <span className="font-semibold">Usage:</span> <code className="text-gray-300">{command.usage}</code>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BotCommands = () => {
  const commandCategories = [
    {
      icon: Shield,
      title: "Security Commands",
      color: "bg-red-500/20 border-red-500",
      commands: [
        {
          name: "antispam",
          description: "Configure anti-spam settings and sensitivity levels",
          usage: "/antispam"
        },
        {
          name: "antilink",
          description: "Block malicious links and unauthorized invites",
          usage: "/antilink"
        },
        {
          name: "antibotadd",
          description: "Prevent unauthorized bot additions to your server",
          usage: "/antibotadd"
        },
        {
          name: "antirole_create",
          description: "Block unauthorized role creation attempts",
          usage: "/antirole_create"
        },
        {
          name: "antichannel",
          description: "Prevent unauthorized channel creation and deletion",
          usage: "/antichannel"
        },
        {
          name: "badword",
          description: "Configure bad word filtering and auto-moderation",
          usage: "/badword"
        }
      ]
    },
    {
      icon: Ban,
      title: "Moderation Commands",
      color: "bg-blue-500/20 border-blue-500",
      commands: [
        {
          name: "ban",
          description: "Ban a user with optional reason and message deletion",
          usage: "/ban",
          type: "both"
        },
        {
          name: "softban",
          description: "Softban a user (ban then immediately unban to delete messages)",
          usage: "/softban",
          type: "both"
        },
        {
          name: "kick",
          description: "Kick a user from the server with optional reason",
          usage: "/kick",
          type: "both"
        },
        {
          name: "mute",
          description: "Mute a user indefinitely",
          usage: "/mute",
          type: "both"
        },
        {
          name: "unmute",
          description: "Remove mute from a user",
          usage: "/unmute",
          type: "both"
        },
        {
          name: "tempmute",
          description: "Temporarily mute a user for specified duration",
          usage: "/tempmute",
          type: "both"
        },
        {
          name: "unban",
          description: "Unban a previously banned user",
          usage: "/unban",
          type: "both"
        },
        {
          name: "warn",
          description: "Issue a warning to a user with automatic escalation",
          usage: "/warn",
          type: "both"
        },
        {
          name: "clearwarns",
          description: "Clear all warnings for a specific user",
          usage: "/clearwarns",
          type: "both"
        },
        {
          name: "warns",
          description: "View warning history for a user",
          usage: "/warns",
          type: "both"
        },
        {
          name: "purge",
          description: "Bulk delete messages with various filters",
          usage: "/purge",
          type: "both"
        },
        {
          name: "lock",
          description: "Lock a channel to prevent new messages",
          usage: "/lock",
          type: "both"
        },
        {
          name: "unlock",
          description: "Unlock a previously locked channel",
          usage: "/unlock",
          type: "both"
        },
        {
          name: "rolelockdown",
          description: "Prevent role assignments during emergencies",
          usage: "/rolelockdown",
          type: "both"
        },
        {
          name: "slowmode",
          description: "Set slowmode delay for a channel",
          usage: "/slowmode",
          type: "both"
        },
        {
          name: "announce",
          description: "Send announcements to specified channels",
          usage: "/announce",
          type: "both"
        }
      ]
    },
    {
      icon: Gamepad2,
      title: "Fun Commands",
      color: "bg-green-500/20 border-green-500",
      commands: [
        {
          name: "8ball",
          description: "Ask the magic 8-ball a question",
          usage: "/8ball",
          type: "both"
        },
        {
          name: "coinflip",
          description: "Flip a coin and get heads or tails",
          usage: "/coinflip",
          type: "both"
        },
        {
          name: "dice",
          description: "Roll a dice with customizable sides",
          usage: "/dice",
          type: "both"
        },
        {
          name: "joke",
          description: "Get a random joke to lighten the mood",
          usage: "/joke",
          type: "both"
        },
        {
          name: "meme",
          description: "Get a random meme from popular subreddits",
          usage: "/meme",
          type: "both"
        },
        {
          name: "quote",
          description: "Get an inspirational quote",
          usage: "/quote",
          type: "both"
        },
        {
          name: "fact",
          description: "Learn a random interesting fact",
          usage: "/fact",
          type: "both"
        },
        {
          name: "poll",
          description: "Create a poll with multiple options",
          usage: "/poll",
          type: "both"
        },
        {
          name: "avatar",
          description: "Display a user's avatar in high quality",
          usage: "/avatar",
          type: "both"
        },
        {
          name: "userinfo",
          description: "Get detailed information about a user",
          usage: "/userinfo",
          type: "both"
        }
      ]
    },
    {
      icon: Wrench,
      title: "Setup Commands",
      color: "bg-yellow-500/20 border-yellow-500",
      commands: [
        {
          name: "welcome",
          description: "Configure welcome messages and channels (w)",
          usage: "/welcome"
        },
        {
          name: "goodbye",
          description: "Set up goodbye messages for leaving members (g)",
          usage: "/goodbye"
        },
        {
          name: "boost",
          description: "Configure server boost celebration messages (b)",
          usage: "/boost"
        },
        {
          name: "autorole",
          description: "Set automatic roles for new members",
          usage: "/autorole"
        },
        {
          name: "verification",
          description: "Set up member verification system",
          usage: "/verification"
        },
        {
          name: "modlog",
          description: "Configure moderation logging channel",
          usage: "/modlog"
        },
        {
          name: "prefix",
          description: "Change the bot's command prefix",
          usage: "/prefix"
        },
        {
          name: "language",
          description: "Set the bot's language for your server",
          usage: "/language"
        }
      ]
    }
  ];

  return (
    <section id="commands" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
            <Terminal className="h-4 w-4" />
            Slash & Prefix Commands
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-white">Powerful</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Command Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete control over your server with both modern slash commands and classic prefix commands. 
            Advanced security, moderation, and fun features at your fingertips.
          </p>
        </div>

        <div className="space-y-6">
          {commandCategories.map((category, index) => (
            <CommandCategory key={index} {...category} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg text-white font-semibold">
            <Zap className="h-5 w-5" />
            70+ Total Commands Available
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotCommands;