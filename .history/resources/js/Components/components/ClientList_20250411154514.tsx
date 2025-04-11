
import React, { useState } from 'react';

import { Search, Plus, User, ChevronRight, Phone, Mail, Clock, Edit } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedTransition from './AnimatedTransition';
import { Badge } from '@/components/ui/badge';

// Sample data
const SAMPLE_CLIENTS = [
  { 
    id: '1', 
    name: 'Adewale Johnson', 
    email: 'adewale@example.com', 
    phone: '+234 801 234 5678', 
    lastVisit: '2023-12-15', 
    status: 'active',
    measurements: 12,
    recentOrder: 'Wedding Suit'
  },
  { 
    id: '2', 
    name: 'Chioma Okafor', 
    email: 'chioma@example.com', 
    phone: '+234 802 345 6789', 
    lastVisit: '2024-01-05', 
    status: 'active',
    measurements: 8,
    recentOrder: 'Evening Gown'
  },
  { 
    id: '3', 
    name: 'Emeka Nnamdi', 
    email: 'emeka@example.com', 
    phone: '+234 803 456 7890', 
    lastVisit: '2023-11-20', 
    status: 'inactive',
    measurements: 3,
    recentOrder: 'Business Shirt'
  },
  { 
    id: '4', 
    name: 'Funke Adeyemi', 
    email: 'funke@example.com', 
    phone: '+234 804 567 8901', 
    lastVisit: '2024-02-01', 
    status: 'active',
    measurements: 15,
    recentOrder: 'Traditional Attire'
  },
  { 
    id: '5', 
    name: 'Gbenga Oladipo', 
    email: 'gbenga@example.com', 
    phone: '+234 805 678 9012', 
    lastVisit: '2023-10-10', 
    status: 'inactive',
    measurements: 5,
    recentOrder: 'Casual Wear'
  },
];

interface ClientListProps {
  onSelectClient: (clientId: string) => void;
  onAddNewClient: () => void;
}

const ClientList: React.FC<ClientListProps> = ({ 
  onSelectClient,
  onAddNewClient
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'inactive'>('all');
  
  const filteredClients = SAMPLE_CLIENTS.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          client.phone.includes(searchQuery);
    
    const matchesStatus = activeFilter === 'all' || client.status === activeFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="text-2xl font-display font-medium">Clients</div>
        
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search clients..."
              className="w-full pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button 
            onClick={onAddNewClient}
            className="whitespace-nowrap"
          >
            <Plus className="h-4 w-4 mr-1" /> Add Client
          </Button>
        </div>
      </div>
      
      <div className="flex space-x-2 mb-4">
        <Button
          variant={activeFilter === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveFilter('all')}
          className="text-xs"
        >
          All Clients
        </Button>
        <Button
          variant={activeFilter === 'active' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveFilter('active')}
          className="text-xs"
        >
          Active
        </Button>
        <Button
          variant={activeFilter === 'inactive' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveFilter('inactive')}
          className="text-xs"
        >
          Inactive
        </Button>
      </div>
      
      <div className="grid gap-4">
        {filteredClients.length > 0 ? (
          filteredClients.map((client, index) => (
            <AnimatedTransition 
              key={client.id} 
              show={true} 
              variant="slide-up" 
              delay={index * 50}
            >
              <Card 
                className={(
                  "card-hover overflow-hidden border border-border/50",
                  client.status === 'inactive' && "opacity-75"
                )}
              >
                <CardContent className="p-0">
                  <button
                    className="w-full text-left p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    onClick={() => onSelectClient(client.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={(
                        "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
                        client.status === 'active' 
                          ? "bg-primary/10 text-primary" 
                          : "bg-muted text-muted-foreground"
                      )}>
                        <User className="h-5 w-5" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="font-medium flex items-center">
                          {client.name}
                          {client.status === 'active' ? (
                            <Badge className="ml-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                              Active
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="ml-2 text-xs">
                              Inactive
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <span className="flex items-center">
                            <Phone className="h-3 w-3 mr-1 opacity-70" />
                            {client.phone}
                          </span>
                          <span className="flex items-center">
                            <Mail className="h-3 w-3 mr-1 opacity-70" />
                            {client.email}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4 mt-2 md:mt-0">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Last order</span>
                        <span className="text-sm font-medium">{client.recentOrder}</span>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Measurements</span>
                        <span className="text-sm font-medium">{client.measurements}</span>
                      </div>
                      
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1 opacity-70" />
                          Last visit
                        </span>
                        <span className="text-sm font-medium">
                          {new Date(client.lastVisit).toLocaleDateString('en-NG', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      
                      <Button variant="ghost" size="icon" className="ml-2">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </button>
                </CardContent>
              </Card>
            </AnimatedTransition>
          ))
        ) : (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
              <User className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium">No clients found</h3>
            <p className="text-muted-foreground mt-1 mb-4">
              Try adjusting your search or filters, or add a new client.
            </p>
            <Button onClick={onAddNewClient}>
              <Plus className="h-4 w-4 mr-1" /> Add New Client
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientList;
